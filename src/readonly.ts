interface Profile {
  name?:string;
  cellphone?:string;
  email?:string;
  id:number;
}

const profile: Readonly<Profile> = {
  id:1010,
  name:"Steve Jobs"
}

// profile.id = 20;
// profile.name = "Bill Gates"

export {}