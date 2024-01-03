"use client";

import { useUser } from "@/context/user";
import BasicInput from "../BasicInput";
import { useState } from "react";

const ProductCategoryCreationForm = () => {
    const user = useUser();
    
    const [name, setName] = useState<string>("");
    const [shown, setShown] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
    }
    
    if(!user.user) return null;
    return (
        <div className="flex flex-col gap-4 border border-gray-300 rounded-md p-4 mt-4">
            <h2 className="text-xl font-semibold">
            <span
                className=" text-blue-500 cursor-pointer mr-2"
                onClick={() => setShown(!shown)}
            >
                {shown ? "▼" : "▶"}
            </span>
                Create Product Category
            </h2>
            {shown && <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4 gap-4">
                   <BasicInput
                        name="name"
                        label="Name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-md px-4 py-2"
                    >
                        Create
                    </button>
                </div>
            </form>}
        </div>
    );

}

export default ProductCategoryCreationForm;