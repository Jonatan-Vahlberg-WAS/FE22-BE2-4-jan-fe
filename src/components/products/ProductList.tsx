"use client";

import { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import ProductListHeader from "./ProductListHeader";

const categories = [{
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
            "__v": 0
        }
]

const dummyData: Product[] = [
    {
        "_id": "659566f8448d068dbaff0873",
        "name": "Facial Moisturizer",
        "description": "Hydrating facial moisturizer suitable for all skin types.",
        "price": 35,
        "categories": [
            {
                "_id": "65953cabad473a0bc7dab5e9",
                "name": "Beauty & Personal Care"
            }
        ]
    },
    {
        "_id": "659566f8448d068dbaff0874",
        "name": "Women's Running Shoes",
        "description": "Comfortable and durable shoes for running and training.",
        "price": 79,
        "categories": [
            {
                "_id": "65953cabad473a0bc7dab5ec",
                "name": "Clothing"
            }
        ]
    },
    {
        "_id": "659566f8448d068dbaff0875",
        "name": "Wireless Earbuds",
        "description": "High-quality wireless earbuds with noise cancellation.",
        "price": 129,
        "categories": [
            {
                "_id": "65953cabad473a0bc7dab5eb",
                "name": "Electronics"
            }
        ]
    },
    {
        "_id": "659566f8448d068dbaff0876",
        "name": "Car Cleaning Kit",
        "description": "Complete kit for cleaning and maintaining your car.",
        "price": 59,
        "categories": [
            {
                "_id": "65953cabad473a0bc7dab5ea",
                "name": "Automotive"
            }
        ]
    },
    {
        "_id": "659566f8448d068dbaff0877",
        "name": "Cycling Helmet",
        "description": "Safety-certified helmet for cyclists, providing protection.",
        "price": 45,
        "categories": [
            {
                "_id": "65953cabad473a0bc7dab5e7",
                "name": "Sports & Outdoors"
            }
        ]
    },
    {
        "_id": "659566f8448d068dbaff0878",
        "name": "Yoga Mat",
        "description": "High-quality yoga mat suitable for all types of yoga practice.",
        "price": 25,
        "categories": [
            {
                "_id": "65953cabad473a0bc7dab5e7",
                "name": "Sports & Outdoors"
            }
        ]
    },
    {
        "_id": "659566f8448d068dbaff0879",
        "name": "Coffee Maker",
        "description": "Programmable coffee maker for brewing your favorite coffee.",
        "price": 89,
        "categories": [
            {
                "_id": "65953cabad473a0bc7dab5e6",
                "name": "Home & Kitchen"
            }
        ]
    },
]

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>(dummyData); //TODO: Replace with API call
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    useEffect(() => {
        if(selectedCategory) {
            setProducts(dummyData.filter((product) => {
                return product.categories.some((category) => {
                    return category._id === selectedCategory;
                })
            }));
        } else {
            setProducts(dummyData);
        }
    }, [selectedCategory]);

    return (
        <div className="flex flex-col gap-4">
            <ProductListHeader
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            {products.map((product) => (
                <ProductListItem
                    key={product._id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default ProductList;