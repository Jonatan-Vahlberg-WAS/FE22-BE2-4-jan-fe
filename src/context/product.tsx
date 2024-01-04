"use client";

import AxiosInstance from "@/utils/axios";
import { createContext, useContext, useEffect, useState } from "react";


interface ProductContextType {
    products: GlobalProduct[];
    categories: Category[];
    createProduct: (product: GlobalProduct) => void;
}

const ProductContext = createContext<ProductContextType>({
    products: [],
    categories: [],
    createProduct: () => {},
});

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<GlobalProduct[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchProducts = () => {
        AxiosInstance.get<ProductsResponse>("/products")
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err, err.response);
            });
    };

    const createProduct = (product: GlobalProduct) => {
        AxiosInstance.post<ProductResponse>("/products", product)
            .then((res) => {
                setProducts([...products, res.data.product]);
            })
            .catch((err) => {
                console.log(err, err.response);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        AxiosInstance.get<CategoryResponse>("/products/categories")
            .then((res) => {
                setCategories(res.data.categories);
            })
            .catch((err) => {
                console.log(err, err.response);
            });
    }, []);

    return (
        <ProductContext.Provider value={{ products, categories, createProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

const useProduct = () => {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error("useProduct must be used within a ProductProvider");
    }
    return context;
}

export { ProductContext, ProductProvider, useProduct };