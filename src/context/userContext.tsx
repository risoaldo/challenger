import { createContext, ReactNode, useEffect, useState } from "react";

import { User } from "../types/user";
import { api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextData {
  users: User[];
  filterUser: (text: string) => User[];
  loadMoreUsers: () => Promise<void>;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get("/?results=10");
        const data = await response.data.results;
        // .then((response) => setUsers(response.data.results));
        setUsers(data);
      } catch (e) {
        console.log(e);
      }
    }
    loadUsers();
  }, []);
  async function loadMoreUsers() {
    try {
      const response = await api.get("/?results=10");
      const data = await response.data.results;
      // .then((response) => setUsers(response.data.results));
      setUsers(users.concat(data));
      console.log("users ontexto", users);
    } catch (e) {
      console.log(e);
    }
  }

  function filterUser(searchText: string) {
    let parsedText = searchText.replace(/\s/g, "");
    const userFiltering = users.filter(
      (user) =>
        user.name?.title.toLowerCase().includes(parsedText.toLowerCase()) ||
        user.name?.first.toLowerCase().includes(parsedText.toLowerCase()) ||
        user.name?.last.toLowerCase().includes(parsedText.toLowerCase()) ||
        user.nat.toLowerCase().includes(parsedText.toLowerCase())
    );
    return userFiltering;
  }
  return (
    <UserContext.Provider value={{ users, filterUser, loadMoreUsers }}>
      {children}
    </UserContext.Provider>
  );
}
