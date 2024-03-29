import Link from "next/link";


interface ProductListItemProps {
    product: GlobalProduct;
}

const ProductListItem = ({ product }: ProductListItemProps) => {

    const isBook = (p: GlobalProduct): p is Book => {
        const hasBookCategory =  p.categories.some((category) => {
            return category._id === "65953cabad473a0bc7dab5e5";
        })
        return hasBookCategory;

    }
    return (
        <div className="flex border border-gray-400 rounded-md p-4 gap-4">
            <img src="https://picsum.photos/50" alt="Product" className="rounded-md h-[80px] aspect-square"/>
            <div className="flex flex-col border ">
                <h1 className="text-lg font-semibold">
                    {isBook(product) && "📚 "}
                    {product.name}
                </h1>
                {isBook(product) && <p className="text-sm">By {product.author}</p>}
                <h2 className="font-semibold">${product.price}</h2>
                <p>{product.description}</p>
                <Link href={`/products/${product._id}`}>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-md self-center">View</button>
                </Link>
            </div>
        </div>
    );
}

export default ProductListItem;