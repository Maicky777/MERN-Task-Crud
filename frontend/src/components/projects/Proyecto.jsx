import { useContext } from 'react'
import { ProyectoContext } from '../../context/ProyectoContext'
import { TareasContext } from '../../context/TareasContext'

/* eslint-disable react/prop-types */
export const Proyecto = ({ proyecto }) => {
  const { selectProyecto } = useContext(ProyectoContext)
  const { obtnerTareas } = useContext(TareasContext)

  return (
    <li className="w-full mb-2">
      <button
        onClick={() => {
          selectProyecto(proyecto.id), obtnerTareas(proyecto.id)
        }}
        className="w-full px-1 py-2 text-start hover:bg-zinc-200"
      >
        {proyecto.nombre}
      </button>
    </li>
  )
}
