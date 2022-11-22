import { useContext, useEffect, useState } from "react";
import { AuthContext, ITransactions } from "../../Contexts/AuthContexts";
import api from "../../Services/api";
import { BoxButtonFilter, Container, Titulo } from "./style";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

interface IListaTrasacoesProps {
  cashout: boolean;
  setCashout: React.Dispatch<React.SetStateAction<boolean>>;
  cashin: boolean;
  setCashin: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListaTrasacoes = ({
  cashout,
  setCashout,
  cashin,
  setCashin,
}: IListaTrasacoesProps) => {
  const { user, transactions, setTransactions } = useContext(AuthContext);
  const [debitedAccounts, setDebitedAccounts] = useState<ITransactions[]>();
  const [creditedAccounts, setCreditedAccounts] = useState<ITransactions[]>();

  useEffect(() => {
    api.get(`/transactions`).then((response) => setTransactions(response.data));
    api
      .get(`/transactions/cashout`)
      .then((response) => setDebitedAccounts(response.data));
    api
      .get(`/transactions/cashin`)
      .then((response) => setCreditedAccounts(response.data));
  }, []);

  const filterCashout = () => {
    setCashout(true);
    setCashin(false);
  };

  const filterCashin = () => {
    setCashout(false);
    setCashin(true);
  };

  return (
    <>
      <Titulo>Suas Transações</Titulo>
      <BoxButtonFilter>
        <button onClick={filterCashout}>
          <GiPayMoney size={40} /> CashOut
        </button>
        <button onClick={filterCashin}>
          <GiReceiveMoney size={40} /> CashIn
        </button>
      </BoxButtonFilter>
      <Container>
        {cashout
          ? debitedAccounts?.map(({ createdAt, value, id }) => (
              <li key={id}>
                <p>
                  <span>Data: </span>{" "}
                  {createdAt.split("T")[0].split("-").reverse().join("-")},{" "}
                  <span>Hora: </span> {createdAt.split("T")[1].split(".")[0]}
                </p>
                <p>
                  <span>Valor:</span> R${value}
                </p>
              </li>
            ))
          : cashin
          ? creditedAccounts?.map(({ createdAt, value, id }) => (
              <li key={id}>
                <p>
                  <span>Data: </span>{" "}
                  {createdAt.split("T")[0].split("-").reverse().join("-")},{" "}
                  <span>Hora: </span> {createdAt.split("T")[1].split(".")[0]}
                </p>
                <p>
                  <span>Valor:</span> R${value}
                </p>
              </li>
            ))
          : transactions?.map(({ createdAt, value, id }) => (
              <li key={id}>
                <p>
                  <span>Data: </span>{" "}
                  {createdAt.split("T")[0].split("-").reverse().join("-")},{" "}
                  <span>Hora: </span> {createdAt.split("T")[1].split(".")[0]}
                </p>
                <p>
                  <span>Valor:</span> R${value}
                </p>
              </li>
            ))}
      </Container>
    </>
  );
};

export default ListaTrasacoes;
