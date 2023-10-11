import { useForm } from '../../hooks/useForm'

export const FormularioTarea = () => {
  const [formValues, handleInput, reset] = useForm({
    tarea: '',
  })
  const { tarea } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()

    // validamos

    // envio de form

    // reset
    reset()
  }
  return (
    <div className="p-5 bg-zinc-900">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto"
      >
        <input
          autoComplete="off"
          className="w-full px-2 py-1.5 border-b-[1px] rounded-md focus:outline-none border-zinc-700"
          type="text"
          name="tarea"
          id="tarea"
          placeholder="Nombre proyecto"
          value={tarea}
          onChange={handleInput}
        />

        <button className="text-white rounded-md bg-zinc-700 py-1.5 w-full my-4 hover:opacity-80">
          Agregar Tarea
        </button>
      </form>
    </div>
  )
}
