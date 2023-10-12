import { useContext } from 'react'
import { Tarea } from './Tarea'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { ProyectoContext } from '../../context/ProyectoContext'
import { TareasContext } from '../../context/TareasContext'

export const ListadoTareas = () => {
  const { proyectoActual, deleteProyecto } = useContext(ProyectoContext)
  const { tareasProyectoActual: tareas } = useContext(TareasContext)

  if (!proyectoActual) {
    return (
      <h2 className="my-3 text-lg font-semibold text-center">
        No tienes un proyecto seleccionado
      </h2>
    )
  }

  return (
    <div className="p-5">
      <h2 className="mb-3 text-lg font-semibold text-center">
        Proyecto: <span>{proyectoActual.nombre}</span>
      </h2>

      <ul>
        {tareas.length === 0 ? (
          <p className="font-bold text-center text-red-700">No existe tareas</p>
        ) : (
          tareas.map((tarea) => (
            <Tarea
              key={tarea.nombre}
              tarea={tarea}
            />
          ))
        )}
      </ul>

      <button
        onClick={() => deleteProyecto(proyectoActual.id)}
        className="flex text-sm items-center tracking-wide py-1.5 px-2 border-2 border-zinc-500 rounded-md  hover:opacity-90"
      >
        Eliminar Proyecto <RiDeleteBin2Line className="ml-2" />
      </button>
    </div>
  )
}
