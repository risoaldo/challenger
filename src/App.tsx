import { UserProvider } from "./context/userContext";
import { QueryClient, QueryClientProvider } from "react-query";

import Main from "./pages/Main";


const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Main />
      </UserProvider>
    </QueryClientProvider>
  );
}
