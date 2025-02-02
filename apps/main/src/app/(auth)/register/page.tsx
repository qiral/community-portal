import { RegisterForm } from "../../../components/auth/register-form"

export default function RegisterPage() {
  return (
    <div className="mx-auto mt-20 max-w-md rounded-lg border p-6">
      <h1 className="mb-6 text-2xl font-bold">Hesap Oluştur</h1>
      <RegisterForm />
    </div>
  )
}
