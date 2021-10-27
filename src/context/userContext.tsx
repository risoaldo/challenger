import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../types/user";
import { api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  users: User[];
  filterUser: (text: string) => User[];
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

  function filterUser(searchText: string) {
    let parsedText = searchText.replace(/\s/g, '')
    const userFiltering = users.filter(
      (user) =>
        user.name?.title.toLowerCase().includes(parsedText.toLowerCase()) ||
        user.name?.first.toLowerCase().includes(parsedText.toLowerCase()) ||
        user.name?.last.toLowerCase().includes(parsedText.toLowerCase())||
        user.nat.toLowerCase().includes(parsedText.toLowerCase())
    );
    console.log('texto entrado: ', parsedText);
    return userFiltering;
  }
  return (
    <UserContext.Provider value={{ users, filterUser }}>
      {children}
    </UserContext.Provider>
  );
}
