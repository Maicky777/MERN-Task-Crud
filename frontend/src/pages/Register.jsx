import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { BiLockOpen, BiMailSend, BiUserPlus } from 'react-icons/bi'

const initialState = {
  email: '',
  password: '',
  fullname: '',
  confpassword: '',
}

export const Register = () => {
  const [formValues, handleInput, reset] = useForm(initialState)
  const { email, password, fullname, confpassword } = formValues

  const handleSubmit = async (e) => {
    e.preventDefault()

    // validacion de formulario

    // validacion de password minimo 6 caracteres

    // comparacion de password

    // envio de formulario

    // reset
    reset()
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-5 md:p-2">
      <div className="w-full p-5 rounded-md shadow-md md:max-w-[400px] shadow-zinc-400">
        <h2 className="mb-5 text-2xl font-extrabold text-center">
          Obtener una Cuenta
        </h2>

        <form
          className="flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label
              htmlFor="fullname"
              className="block mb-2 font-medium"
            >
              Nombre Completo
            </label>
            <div className="flex items-center border-[1px] border-zinc-500 bg-zinc-50 px-2 py-1 rounded-md">
              <input
                className="flex-1 bg-transparent focus:outline-none py-1.5 md:py-1"
                autoComplete="off"
                autoFocus
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Ej. prueba@gmail.com"
                value={fullname}
                onChange={handleInput}
              />
              <BiUserPlus />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block mb-2 font-medium"
            >
              Ingrese su Email
            </label>
            <div className="flex items-center border-[1px] border-zinc-500 bg-zinc-50 px-2 py-1 rounded-md">
              <input
                className="flex-1 bg-transparent focus:outline-none py-1.5 md:py-1"
                autoComplete="off"
                autoFocus
                type="email"
                name="email"
                id="email"
                placeholder="Ej. prueba@gmail.com"
                value={email}
                onChange={handleInput}
              />
              <BiMailSend />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="block mb-2 font-medium"
            >
              Ingrese su Password
            </label>
            <div className="flex items-center border-[1px] border-zinc-500 bg-zinc-50 px-2 py-1 rounded-md">
              <input
                className="flex-1 bg-transparent focus:outline-none py-1.5 md:py-1"
                autoComplete="off"
                autoFocus
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                value={password}
                onChange={handleInput}
              />
              <BiLockOpen />
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="confpassword"
              className="block mb-2 font-medium"
            >
              Confirmar su Password
            </label>
            <div className="flex items-center border-[1px] border-zinc-500 bg-zinc-50 px-2 py-1 rounded-md">
              <input
                className="flex-1 bg-transparent focus:outline-none py-1.5 md:py-1"
                autoComplete="off"
                autoFocus
                type="password"
                name="confpassword"
                id="confpassword"
                placeholder="*******"
                value={confpassword}
                onChange={handleInput}
              />
              <BiLockOpen />
            </div>
          </div>
          <div>
            <button className="text-white rounded-md bg-zinc-950 py-1.5 w-full my-4 hover:opacity-80">
              Inciar sesión
            </button>
          </div>
        </form>

        <div className="text-end">
          <Link to={'/login'}>
            <p className="text-xs font-semibold">
              Estas registrado?{' '}
              <span className="font-bold uppercase">Iniciar Sesión</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
