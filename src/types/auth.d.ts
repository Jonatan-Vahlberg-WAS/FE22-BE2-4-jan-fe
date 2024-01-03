type AuthState = "login" | "register" | "logged-in";

type User = {
    firstName: string;
    lastName: string;
    email: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
}


type AuthResponse = {
    user: User;
    token: string;
}

type AuthErrorResponse = {
    message: string;
    data: any;
}
