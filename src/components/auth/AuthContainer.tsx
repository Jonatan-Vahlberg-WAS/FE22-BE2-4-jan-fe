"use client";

import { useEffect, useState } from "react";
import LogingForm from "./LoginForm";
import RegisterForm from "./RegisterFrom";
import LoggedInSection from "./LoggedInSection";
import { useUser } from "@/context/user";

// Defines the formdetails type
interface AuthFormDetails {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}
// Defines a type for each AuthFormDetails key such as "email" or "password"
type AuthFieldKey = keyof AuthFormDetails;

const defaultFormDetails: AuthFormDetails = {
    email: "",
    password: "",
};

const AuthContainer = () => {

    const user = useUser();

    const [state, setState] = useState<AuthState>("login");
    const [formDetails, setFormDetails] = useState(defaultFormDetails) // type inference for formDetails);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if(user.user) {
            setState("logged-in");
        }
    }, [user.user]);

    // Validates that the formDetails object has a value for each key in the names array
    const validateNotEmpty = (names: AuthFieldKey[]) => {
        setError("");
        return names.every((name: AuthFieldKey) => {
            return !!formDetails[name];
        })
    }

    // Type casts the event target to an HTMLFormElement for the reset() method
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

    // Type casts the event target to an HTMLFormElement for the reset() method
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!validateNotEmpty(["email", "password", "firstName", "lastName"])) {
            return setError("Please fill in all the fields");
        }

        user.register(formDetails.email, formDetails.password, formDetails.firstName!, formDetails.lastName!, () => {
            const form = e.currentTarget as HTMLFormElement; // type casting / type assertion
            form?.reset();
        }, (error) => {
            setError(error); 
        });
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