import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import Main from "./pages/Main";
import Teste from "./pages/Teste";
import ModalUser from "./components/ModalUser";

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}
