import { UserProvider } from "./context/userContext";

import Main from "./pages/Main";


export default function App() {
  return (
      <UserProvider>
        <Main />
      </UserProvider>
  );
}
