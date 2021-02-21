interface Profile {
  name?:string;
  cellphone?:string;
  email?:string;
  id:number;
}

interface FullProfile extends Required<Profile>{}
//type FullProfileType = Required<Profile>

const searchByProfile = (profile: FullProfile )=>{
  console.log(profile)
  return profile
}

const whatWeKnow:FullProfile = {
  name:"Steve Jobs",
  cellphone:"9999999",
  email:"steve@apple.com",
  id:10,
}

const searchResult = searchByProfile(whatWeKnow)


export{}