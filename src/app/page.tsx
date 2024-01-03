import AuthContainer from "@/components/auth/AuthContainer";
import ProductCategoryCreationForm from "@/components/products/ProductCategoryCreationForm";
import ProductCreationForm from "@/components/products/ProductCreationForm";
import ProductList from "@/components/products/ProductList";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col p-4">
      <AuthContainer/>
      <ProductList/>
      <ProductCategoryCreationForm/>
      <ProductCreationForm/>
    </main>
  )
}
