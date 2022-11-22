import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContexts";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

interface IHeaderProps {
  balanceIsVisible: boolean;
  setBalanceIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ balanceIsVisible, setBalanceIsVisible }: IHeaderProps) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  function goToLogin() {
    localStorage.removeItem("@context:token");
    localStorage.removeItem("@context:id");
    navigate("/login", { replace: true });
  }

  return (
    <Container>
      <div className="box_logo">
        <h1>NG.CA$H</h1>
        <p>
          Olá, <span>{user?.username}</span>!
        </p>
      </div>
      <div className="box_buttons">
        {!balanceIsVisible ? (
          <button onClick={() => setBalanceIsVisible(true)}>
            <FaEyeSlash size={28} />
          </button>
        ) : (
          <button onClick={() => setBalanceIsVisible(false)}>
            <FaEye size={28} />
          </button>
        )}

        <button onClick={goToLogin}>
          <MdLogout size={28} />
        </button>
      </div>
    </Container>
  );
};

export default Header;
