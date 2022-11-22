import Provider from "./Contexts";
import { Toaster } from "react-hot-toast";
import { RoutesMain } from "./Routes";
import Global from "./styles/global";

function App() {
  return (
    <Provider>
      <Global />
      <Toaster
        toastOptions={{
          style: {
            border: "2px solid var(--gray-1)",
          },
        }}
      />
      <RoutesMain />
    </Provider>
  );
}

export default App;
