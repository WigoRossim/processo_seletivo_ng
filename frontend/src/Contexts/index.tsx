import { IProvider } from "../Interfaces/Global";
import AuthProvider from "./AuthContexts";

const Provider = ({ children }: IProvider) => (
  <AuthProvider>{children}</AuthProvider>
);

export default Provider;
