import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

interface User {
  id: number;
  name: Name;
  email: string;
  gender: number;
  dob: Dob;
  phone: string;
  nat: string;
  location: Location;
  image: string;
}
interface Name {
  first: string;
  last: string;
  title: string;
}
interface Dob {
  age: number;
  date: string;
}

interface Location {
  city: string;
  country: string;
  postcode: number;
  state: string;
}

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
    try{
      api.get("/?results=10").then((response) => setUsers(response.data.results));
    }catch(e){
      console.log(e)
    }
  }, []);


  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  );
}
