import React from "react";
import BasicInput from "../BasicInput";

interface LogingFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeState: React.Dispatch<React.SetStateAction<AuthState>>;
  email: string;
  password: string;
}

const LogingForm = ({
    onSubmit,
    onChange,
    changeState,
    email,
    password,
}: LogingFormProps) => {
    
    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col mb-4 gap-4">
            <BasicInput
                name="email"
                label="Email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
                />
            <BasicInput
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-1 rounded-md self-center"
                >
                Login
            </button>
            <span className="text-gray-600 text-center">or</span>
            <button
                type="button"
                className="bg-transparent text-blue-800 p-2 rounded-lg"
                onClick={() => changeState("register")}
                >
                Register
            </button>
            </div>
        </form>
    );
}

export default LogingForm;