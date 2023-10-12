import { useContext, useEffect } from 'react'
import { Proyecto } from './Proyecto'
import { ProyectoContext } from '../../context/ProyectoContext'

export const ListadoProyectos = () => {
  const { proyectos, cargarProyectos } = useContext(ProyectoContext)

  useEffect(() => {
    cargarProyectos()
  }, [])

  if (proyectos.length === 0) {
    return (
      <h2 className="text-lg font-semibold text-center my-3">
        No tienes proyectos creados
      </h2>
    )
  }

  return (
    <div>
      <ul>
        {proyectos.map((proyecto) => (
          <Proyecto
            key={proyecto.id}
            proyecto={proyecto}
          />
        ))}
      </ul>
    </div>
  )
}
