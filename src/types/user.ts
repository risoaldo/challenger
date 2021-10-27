
export type User = {
  login: Login;
  name: Name;
  email: string;
  gender: string;
  dob: Dob;
  phone: string;
  nat: string;
  location: Location;
  picture: Picture;
}
interface Login {
  uuid:string;
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

interface Picture {
  medium: string;
}