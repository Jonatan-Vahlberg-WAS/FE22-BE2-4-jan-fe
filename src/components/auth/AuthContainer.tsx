"use client";

import { useEffect, useState } from "react";
import LogingForm from "./LoginForm";
import RegisterForm from "./RegisterFrom";
import LoggedInSection from "./LoggedInSection";
import { useUser } from "@/context/user";

interface AuthFormDetails {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}

type AuthFieldKey = keyof AuthFormDetails;

const AuthContainer = () => {

    const user = useUser();

    const [state, setState] = useState<AuthState>("login");
    const [formDetails, setFormDetails] = useState<AuthFormDetails>({ // type inference
        email: "",
        password: "",
    });
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if(user.user) {
            setState("logged-in");
        }
    }, [user.user]);

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
        user.login(formDetails.email, formDetails.password, () => {
            const form = e.currentTarget as HTMLFormElement; // type casting / type assertion
            form?.reset();
        }, (error) => {
            setError(error); 
        });

        console.log("login");
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
            {state === "logged-in" && user.user && (
                <LoggedInSection
                    user={user.user}
                    changeState={() => {
                        setState("login");
                        setError("");
                        user.logout();
                    }}
                />
            )}
            <hr className="border-gray-400 opacity-50 my-4" />
        </div>

    );
};


export default AuthContainer;