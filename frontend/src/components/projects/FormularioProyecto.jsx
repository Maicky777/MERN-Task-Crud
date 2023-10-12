import { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
import { ProyectoContext } from '../../context/ProyectoContext'
import { toast } from 'react-toastify'

export const FormularioProyecto = () => {
  const { nuevoProyecto, mostrarFormulario, addProyecto } =
    useContext(ProyectoContext)

  const [formValues, handleInput, reset] = useForm({
    nombre: '',
  })
  const { nombre } = formValues

  // cambio de estado de Formulario
  const handleClickProyecto = () => {
    mostrarFormulario()
  }

  // Envio de Formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    // validacion de Formulario
    if (!nombre) {
      return toast.warning('El nombre del proyecto es obligatorio', {
        autoClose: 1500,
      })
    }

    // envio de form
    formValues.id = new Date().getTime()
    addProyecto(formValues)
    // reset
    reset()
  }

  return (
    <div className="px-5">
      {nuevoProyecto ? (
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
      ) : (
        <button
          onClick={handleClickProyecto}
          className="text-white rounded-md bg-zinc-950 py-1.5 w-full my-4 hover:opacity-80"
        >
          Nuevo Proyecto
        </button>
      )}
    </div>
  )
}
