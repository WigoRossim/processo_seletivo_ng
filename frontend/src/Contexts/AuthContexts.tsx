import { createContext, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IProvider } from "../Interfaces/Global";
import api from "../Services/api";

export const AuthContext = createContext<userContextData>(
  {} as userContextData
);

export interface IDataRegister {
  username: string;
  password: string;
}

export interface ITransactions {
  value: number;
  id: string;
  createdAt: string;
}

export interface IAccounts {
  balance: number;
  id: string;
  transaction_debitedAccount: ITransactions[];
  transaction_creditedAccount: ITransactions[];
}

export interface IUserData {
  username: string;
  id: string;
  password: string;
  accounts: IAccounts;
}

export interface ITrasactionCreateData {
  value: number;
  name: string;
}

interface userContextData {
  userRegister: (IDataRegister: FieldValues) => void;
  userLogin: (IDataLogin: FieldValues) => void;
  trasactionCreate: (ITrasactionCreateData: FieldValues) => void;
  user: IUserData | undefined;
  loading: boolean;
  transactions: ITransactions[] | undefined;
  setTransactions: React.Dispatch<
    React.SetStateAction<ITransactions[] | undefined>
  >;
}

const AuthProvider = ({ children }: IProvider) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUserData>();
  const [transactions, setTransactions] = useState<ITransactions[]>();
  const [listUsers, setListUsers] = useState<IUserData[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@context:token");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const { data } = await api.get<IUserData>("/users");

          setUser(data);
        } catch {
          localStorage.removeItem("@context:token");
          localStorage.removeItem("@context:id");
          navigate("/login", { replace: true });
        }
      }
      setLoading(false);
    }
    loadUser();

    api
      .get("/users/all")
      .then((response) => {
        setListUsers(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const userRegister = (data: FieldValues) => {
    delete data.confirmPassword;
    const postAPI = () => {
      const response = api.post("/users", data).then((response) => {
        response.status === 201 && navigate("/", { replace: false });
      });
      return response;
    };
    toast.promise(postAPI(), {
      loading: "Loading",
      success: "Conta criada com sucesso!",
      error: "Usuário já cadastrado!",
    });
  };

  const userLogin = (data: FieldValues) => {
    const postAPI = () => {
      const response = api.post("/user/login", data).then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("@context:token", token);
        localStorage.setItem("@context:id", user.id);

        api.defaults.headers.common.authorization = `Bearer ${token}`;
        setUser(user);

        navigate("/dashboard", { replace: true });
      });
      return response;
    };
    toast.promise(postAPI(), {
      loading: "Loading",
      success: "Boas Vindas",
      error: "Falha ao logar.Verifique se usuário e senha estão corretos",
    });
  };

  const trasactionCreate = (data: FieldValues) => {
    const { username, value } = data;

    const findUser = listUsers?.find((user) => user.username === username);

    const newData = {
      value,
      debitedAccountId: user?.accounts.id,
      creditedAccountId: findUser?.accounts.id,
    };

    const postAPI = () => {
      const response = api.post("/transactions", newData).then((response) => {
        return response;
      });
      return response;
    };
    toast.promise(postAPI(), {
      loading: "Loading",
      success: "Transferencia realizada",
      error: "Algo deu errado, verifique o nome do destinatario ou seu cash",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        userRegister,
        userLogin,
        user,
        loading,
        transactions,
        setTransactions,
        trasactionCreate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
