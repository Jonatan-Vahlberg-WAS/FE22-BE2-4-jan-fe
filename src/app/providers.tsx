
import { ProductProvider } from "@/context/product";
import { UserProvider } from "@/context/user";
// exports different providers
export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <UserProvider>
            <ProductProvider>
                {children}
            </ProductProvider>
        </UserProvider>
    );
}