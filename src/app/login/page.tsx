import { AuthButtonServer } from '@/app/components/auth-button-server'

export default function Login () {
  return (
    <section className="grid place-content-center min-h-screen text-center">
      <h1 className='text-xl font-bold mb-4'>Inicia sesion en Clone Twitter</h1>
      <AuthButtonServer />
    </section>
  )
}
