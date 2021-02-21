interface Profile {
    name?: string;
    cellphone?: string;
    email?: string;
    id: number;
}

type ProfileIDEmail = Omit<Profile, "name" | "cellphone">;

const data: ProfileIDEmail = {
    id: 10,
    email: "steve@apple.com"
};

export { }