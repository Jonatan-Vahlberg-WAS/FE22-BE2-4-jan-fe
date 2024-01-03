

interface ProductListHeaderProps {
    categories: Category[];
    selectedCategory: string;
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ProductListHeader = ({
    categories,
    selectedCategory,
    setSelectedCategory,
}: ProductListHeaderProps) => {
    return (
        <div className="flex flex-col mb-4 gap-4">
            <div className="flex flex-row gap-4">
                <select
                    className="bg-white border border-gray-300 rounded-md px-2 py-1"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">All</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ProductListHeader;