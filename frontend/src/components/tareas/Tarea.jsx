import { useContext } from 'react'
import { TareasContext } from '../../context/TareasContext'
import { ProyectoContext } from '../../context/ProyectoContext'

/* eslint-disable react/prop-types */
export const Tarea = ({ tarea }) => {
  const { proyectoActual } = useContext(ProyectoContext)
  const { eliminarTarea, obtnerTareas, cambiarEstado, guardarTarea } =
    useContext(TareasContext)

  return (
    <li className="max-w-md mx-auto mb-3 shadow-md">
      <div className="flex items-center justify-between px-2 py-2.5">
        <p>{tarea.nombre}</p>
        <div className="flex gap-x-2">
          <button
            onClick={() => {
              cambiarEstado(tarea.id), obtnerTareas(proyectoActual.id)
            }}
            className={`text-[11px] py-1 px-1.5 rounded-md ${
              tarea.estado ? 'bg-green-300' : 'bg-red-300'
            }`}
          >
            {tarea.estado ? 'Completado' : 'Incompleto'}
          </button>

          <button
            onClick={() => guardarTarea(tarea)}
            className="text-[12px] tracking-wide py-1 px-1.5 text-white rounded-md bg-zinc-950 hover:opacity-90"
          >
            Editar
          </button>
          <button
            onClick={() => {
              eliminarTarea(tarea.id), obtnerTareas(proyectoActual.id)
            }}
            className="text-[12px] tracking-wide py-1 px-1.5 text-white rounded-md bg-red-700 hover:opacity-90 animate-rotate-y"
          >
            Eliminar
          </button>
        </div>
      </div>
    </li>
  )
}
