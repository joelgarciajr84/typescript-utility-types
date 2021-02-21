interface Profile {
  name?:string;
  cellphone?:string;
  email?:string;
  id:number;
}

type PersonContacts = Pick<Profile, "name" | "cellphone" | "email">;
//interface PersonContacts extends Pick<Profile, "name" | "cellphone" | "email">{}


const person: PersonContacts = {
  name:"Steve Jobs",
  cellphone: "99999",
  email:"steve@apple.com"
};

console.log(person)

export {}