import { useContext, useEffect, useState } from 'react'
import { ProyectoContext } from '../../context/ProyectoContext'
import { TareasContext } from '../../context/TareasContext'
import { toast } from 'react-toastify'

const initialState = { nombre: '' }

export const FormularioTarea = () => {
  const { proyectoActual } = useContext(ProyectoContext)
  const { obtnerTareas, adicionarTarea, tareaSeleccionada, actualizarTarea } =
    useContext(TareasContext)

  const [formValues, setFormValues] = useState(initialState)
  const { nombre } = formValues

  useEffect(() => {
    if (tareaSeleccionada !== null) {
      setFormValues(tareaSeleccionada)
    }
  }, [tareaSeleccionada])

  const handleInput = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // validacion de Formulario
    if (!nombre) {
      return toast.warning('El nombre de la tarea es obligatorio', {
        autoClose: 1500,
      })
    }

    if (!tareaSeleccionada) {
      // envio de form para la adicion
      formValues.proyectoId = proyectoActual.id
      formValues.estado = false
      formValues.id = new Date().getTime()
      adicionarTarea(formValues)
    } else {
      // actualizando tarea
      actualizarTarea(formValues)
    }

    //Obteniendo las tareas que se agregaron
    obtnerTareas(proyectoActual.id)

    // reset
    setFormValues(initialState)
  }

  if (!proyectoActual) {
    return null
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
          name="nombre"
          id="nombre"
          placeholder="Nombre proyecto"
          value={nombre}
          onChange={handleInput}
        />

        <button className="text-white rounded-md bg-zinc-700 py-1.5 w-full my-4 hover:opacity-80">
          {tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
        </button>
      </form>
    </div>
  )
}
