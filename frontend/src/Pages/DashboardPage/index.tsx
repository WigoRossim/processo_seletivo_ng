import { useContext, useState } from "react";
import Header from "../../Components/Header";
import ListaTrasacoes from "../../Components/ListaTransacoes";
import { AuthContext } from "../../Contexts/AuthContexts";
import { Container } from "./style";
import { GrTransaction } from "react-icons/gr";
import { BiListUl } from "react-icons/bi";
import FormTransacao from "../../Components/FormTransacao";

const DashboardPage = () => {
  const [balanceIsVisible, setBalanceIsVisible] = useState<boolean>(false);
  const [pagination, setPagination] = useState<boolean>(false);
  const [cashout, setCashout] = useState<boolean>(false);
  const [cashin, setCashin] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  const listAllTransactions = () => {
    setCashout(false);
    setCashin(false);
    setPagination(false);
  };

  return (
    <>
      <Header
        balanceIsVisible={balanceIsVisible}
        setBalanceIsVisible={setBalanceIsVisible}
      />
      <Container>
        <div className="box_accounts">
          <h2>Conta</h2>
          {!balanceIsVisible ? (
            <span className="hashed">....</span>
          ) : (
            <span className="account">R${user?.accounts.balance}</span>
          )}
        </div>

        <div className="box_sessions">
          <div className="box_buttons_nav">
            <button onClick={() => setPagination(true)}>
              <GrTransaction size={34} />
              Transação
            </button>
            <button onClick={listAllTransactions}>
              <BiListUl size={38} />
              Extratos
            </button>
          </div>
          {!pagination ? (
            <ListaTrasacoes
              cashin={cashin}
              cashout={cashout}
              setCashin={setCashin}
              setCashout={setCashout}
            />
          ) : (
            <FormTransacao />
          )}
        </div>
      </Container>
    </>
  );
};

export default DashboardPage;
