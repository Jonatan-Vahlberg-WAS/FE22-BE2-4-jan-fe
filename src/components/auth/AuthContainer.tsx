"use client";

import { useState } from "react";
import LogingForm from "./LoginForm";
import RegisterForm from "./RegisterFrom";

interface AuthFormDetails {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}

const AuthContainer = () => {
    const [state, setState] = useState<AuthState>("login");
    const [formDetails, setFormDetails] = useState<AuthFormDetails>({ // type inference
        email: "",
        password: "",
    });

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("login");
        const form = e.currentTarget as HTMLFormElement; // type casting / type assertion
        form.reset();
    }

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("register");
        const form = e.currentTarget as HTMLFormElement; // type casting / type assertion
        form.reset();
    }

    return (
        <div>
            {state === "login" && (
                <LogingForm
                    onSubmit={handleLogin}
                    onChange={(e) => {
                        setFormDetails({
                            ...formDetails,
                            [e.target.name]: e.target.value,
                        });
                    }}
                    changeState={setState}
                    {...formDetails}
                />
            )}
            {state === "register" && (
                <RegisterForm
                    onSubmit={handleLogin}
                    onChange={(e) => {
                        setFormDetails({
                            ...formDetails,
                            [e.target.name]: e.target.value,
                        });
                    }}
                    changeState={setState}
                    {...formDetails}
                    firstName={formDetails.firstName || ""}
                    lastName={formDetails.lastName || ""}
                />
            )}
            <hr className="border-gray-400 opacity-50" />
        </div>

    );
};


export default AuthContainer;