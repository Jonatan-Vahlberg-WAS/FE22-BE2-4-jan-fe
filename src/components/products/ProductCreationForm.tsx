"use client";

import { useUser } from "@/context/user";
import BasicInput from "../BasicInput";
import { useState } from "react";

const categories: Category[] = [{
    "_id": "65953cabad473a0bc7dab5e5",
    "name": "Books"
},
{
    "_id": "65953cabad473a0bc7dab5e6",
    "name": "Home & Kitchen"
},
{
    "_id": "65953cabad473a0bc7dab5e7",
    "name": "Sports & Outdoors"
},
{
    "_id": "65953cabad473a0bc7dab5e8",
    "name": "Toys & Games"
},
{
    "_id": "65953cabad473a0bc7dab5e9",
    "name": "Beauty & Personal Care"
},
{
    "_id": "65953cabad473a0bc7dab5ea",
    "name": "Automotive"
},
{
    "_id": "65953cabad473a0bc7dab5eb",
    "name": "Electronics"
},
{
    "_id": "65953cabad473a0bc7dab5ec",
    "name": "Clothing"
},
{
    "_id": "65953cabad473a0bc7dab5ed",
    "name": "Health & Household"
},
{
    "_id": "65953cabad473a0bc7dab5ee",
    "name": "Movies & TV Shows"
},
{
    "_id": "65953eda4b2eb57e9e03adb5",
    "name": "Shoes",
}
]

interface ProductFields {
    name: string;
    description: string;
    price: number;
    categories: string[];
}

const defaultFormFields: ProductFields = {
    name: "",
    description: "",
    price: 0,
    categories: [],
}

const ProductCreationForm = () => {
    const user = useUser();
    
    const [formFields, setFormFields] = useState<ProductFields>(defaultFormFields);
    const [shown, setShown] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
        setFormFields(defaultFormFields);
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
                Create Product
            </h2>
            {shown && <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4 gap-4">
                   <BasicInput
                        name="name"
                        label="Name"
                        type="text"
                        placeholder="Name"
                        value={formFields.name}
                        onChange={(e) => setFormFields({...formFields, name: e.target.value})}
                    />
                    <BasicInput
                        name="description"
                        label="Description"
                        type="text"
                        placeholder="Description"
                        value={formFields.description}
                        onChange={(e) => setFormFields({...formFields, description: e.target.value})}
                    />
                    <BasicInput
                        name="price"
                        label="Price"
                        type="number"
                        placeholder="Price"
                        value={formFields.price.toString()}
                        onChange={(e) => setFormFields({...formFields, price: parseInt(e.target.value)})}
                        min="0"
                    />
                    <div className="grid grid-cols-3 gap-4">
                        {categories.map((category) => (
                            <label key={category._id} className="flex flex-row items-center">
                                <input
                                    type="checkbox"
                                    name="categories"
                                    value={category._id}
                                    onChange={(e) => {
                                        if(e.target.checked) {
                                            setFormFields({...formFields, categories: [...formFields.categories, e.target.value]})
                                        } else {
                                            setFormFields({...formFields, categories: formFields.categories.filter((category) => category !== e.target.value)})
                                        }
                                    }}
                                />
                                <span className="ml-2">{category.name}</span>
                            </label>
                        ))}
                    </div>
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

export default ProductCreationForm;