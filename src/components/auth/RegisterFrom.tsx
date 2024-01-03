import React from "react";
import BasicInput from "../BasicInput";

interface LogingFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeState: React.Dispatch<React.SetStateAction<AuthState>>;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const RegisterForm = ({
  onSubmit,
  onChange,
  changeState,
  email,
  password,
  firstName,
  lastName,
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
        <div className="flex flex-row mb-4 gap-4">
          <BasicInput
            name="firstName"
            label="First Name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={onChange}
          />
          <BasicInput
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded-md self-center"
        >
          Register
        </button>
        <span className="text-gray-600 text-center">or</span>
        <button
          type="button"
          className="bg-transparent text-blue-800 p-2 rounded-lg"
          onClick={() => changeState("login")}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
