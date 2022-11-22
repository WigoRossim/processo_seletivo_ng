import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContexts";
import { Container } from "./style";

const ProtectRouts = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <Container>
        <h2>Carregando...</h2>
      </Container>
    );
  } else {
    return user ? <Outlet /> : <Navigate to="/login" replace />;
  }
};

export default ProtectRouts;
