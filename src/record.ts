interface Profile {
    name?: string;
    cellphone?: string;
    email?: string;
    id: number;
}

type ProfileTypes = "vip" | "normal";

const profiles: Record<ProfileTypes, Array<Profile>> = {
    "vip": [
        {
            id: 10,
            cellphone: "99999",
            email: "steve@apple.com",
            name: "Steve Jobs"
        }
    ],
    "normal": [
        {
            id: 10,
            cellphone: "99999",
            email: "steve@apple.com",
            name: "Joel"
        }
    ]
};

export { }