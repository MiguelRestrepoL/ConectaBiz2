import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#1f3b5b] p-6 md:p-10">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
