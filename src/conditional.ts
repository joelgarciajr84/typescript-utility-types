type withdraw = {
    id: number;
    amount: number;
    date: Date;
}

type transfer = {
    id: number;
    amount: number;
    origin: string
}


type withdrawDetails = {
    id: number;
    amount: number;
    date: Date;
    status: string;
}

type transferDetails = {
    id: number;
    amount: number;
    type: string;
    date: Date;
    status: string;
}



type GetTransactionType<T> = T extends withdraw ? withdrawDetails : number;


type T0 = TypeName<string>;


function foo<T>(transactionData: T): T {

    return transactionData
}

