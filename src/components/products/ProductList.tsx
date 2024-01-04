"use client";

import { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import ProductListHeader from "./ProductListHeader";
import { useProduct } from "@/context/product";

const ProductList = () => {
    const product = useProduct()
    const [products, setProducts] = useState<GlobalProduct[]>([]); //TODO: Replace with API call
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    console.log(product, products)
    useEffect(() => {
        if(selectedCategory) {
            setProducts(product.products.filter((product) => {
                return product.categories.some((category) => {
                    return category._id === selectedCategory;
                })
            }));
        } else {
            setProducts(product.products);
        }
    }, [selectedCategory, product.products]);
    console.log(selectedCategory, products)
    return (
        <div className="flex flex-col gap-4">
            <ProductListHeader
                categories={product.categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            {products.map((product) => (
                <ProductListItem
                    key={product._id}
                    product={product}
                />
            ))}
            <hr className="border-gray-400"/>
        </div>
    );
}

export default ProductList;