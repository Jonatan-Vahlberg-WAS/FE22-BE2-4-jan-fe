import React from "react";


interface LoggedInSectionProps {
    user: User;
    changeState: React.Dispatch<React.SetStateAction<AuthState>>;
}

const LoggedInSection = ({ user, changeState }: LoggedInSectionProps) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl font-semibold">Welcome {user.firstName} {user.lastName}</h1>
            <h2 className="text-lg font-semibold">Email: {user.email}</h2>
            <button 
                className="bg-blue-500 text-white px-4 py-1 rounded-md self-center"
                onClick={() => changeState("login")}
            >Logout</button>
        </div>
    );
}

export default LoggedInSection;