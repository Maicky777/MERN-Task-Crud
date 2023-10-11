import { useForm } from '../../hooks/useForm'

export const FormularioProyecto = () => {
  const [formValues, handleInput, reset] = useForm({
    nombre: '',
  })
  const { nombre } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()

    // validamos

    // envio de form

    // reset
    reset()
  }

  return (
    <div className="px-5">
      <button className="text-white rounded-md bg-zinc-950 py-1.5 w-full my-4 hover:opacity-80">
        Nuevo Proyecto
      </button>

      <form onSubmit={handleSubmit}>
        <input
          autoComplete="off"
          className="w-full px-2 py-1.5 border-b-[1px] rounded-md focus:outline-none border-zinc-700"
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre proyecto"
          value={nombre}
          onChange={handleInput}
        />

        <button className="text-white rounded-md bg-zinc-950 py-1.5 w-full my-4 hover:opacity-80">
          Agregar Proyecto
        </button>
      </form>
    </div>
  )
}
