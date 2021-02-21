interface Profile {
    name:string;
    cellphone:string;
    email:string;
    id:number;
}

const person: Profile = {
    name:"Steve Jobs",
    cellphone:"99999",
    email:"steve@apple.com",
    id:10

}

const getContactInfo = (personData: Profile)=>{
    const {id, cellphone, email} = personData;

    return {id, cellphone, email}
}

type ContactInfo = ReturnType<typeof getContactInfo>;

const contactData:ContactInfo = {
    cellphone:"208082028",
    email:"teste@teste.com",
    id:29220
}