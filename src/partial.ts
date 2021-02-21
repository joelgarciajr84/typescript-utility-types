interface Profile {
  name:string;
  cellphone:string;
  email:string;
  id:number;
}

const searchbySomeField = (dataToSearch: Partial<Profile> )=>{
  console.log(dataToSearch)
  return dataToSearch
}

const whatWeKnow = {
  name:"Steve Jobs",
}

const searchResult = searchbySomeField(whatWeKnow)


export{}