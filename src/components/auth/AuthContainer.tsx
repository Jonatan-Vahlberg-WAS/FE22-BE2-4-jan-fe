"use client";

import { useState } from "react";
import LogingForm from "./LoginForm";
import RegisterForm from "./RegisterFrom";
import LoggedInSection from "./LoggedInSection";

interface AuthFormDetails {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}

type AuthFieldKey = keyof AuthFormDetails;

const AuthContainer = () => {
    const [state, setState] = useState<AuthState>("login");
    const [formDetails, setFormDetails] = useState<AuthFormDetails>({ // type inference
        email: "",
        password: "",
    });
    const [error, setError] = useState<string>("");

    const validateNotEmpty = (names: AuthFieldKey[]) => {
        setError("");
        return names.every((name: AuthFieldKey) => {
            return !!formDetails[name];
        })
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!validateNotEmpty(["email", "password"])) {
            return setError("Please fill in all the fields");
        }
        console.log("login");
        const form = e.currentTarget as HTMLFormElement; // type casting / type assertion
        form.reset();
    }

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!validateNotEmpty(["email", "password"])) {
            return setError("Please fill in all the fields");
        }
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
                    onSubmit={handleRegister}
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
            {error && <p className="text-red-500">
                <i>
                    {error}
                </i>
            </p>}
            {state === "logged-in" && (
                <LoggedInSection
                    user={{
                        firstName: "John",
                        lastName: "Doe",
                        email: "john@doe.com",
                        _id: "123",
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                    }}
                    changeState={setState}
                />
            )}
            <hr className="border-gray-400 opacity-50" />
        </div>

    );
};


export default AuthContainer;