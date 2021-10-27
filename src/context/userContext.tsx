import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from '../types/user';
import { api } from "../services/api";


interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  users: User[];
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUSers() {
      try {
        await api
          .get("/?results=10")
          .then((response) => setUsers(response.data.results));
      } catch (e) {
        console.log(e);
      }
    }

    loadUSers();
    
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
}
