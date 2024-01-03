import AuthContainer from "@/components/auth/AuthContainer";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-65px)] flex-col p-4">
      <AuthContainer/>
    </main>
  )
}
