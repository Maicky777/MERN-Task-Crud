import { Proyecto } from './Proyecto'

export const ListadoProyectos = () => {
  const proyectos = [
    {
      id: 1,
      nombre: 'Tienda Virtual',
    },
    {
      id: 2,
      nombre: 'Intranet',
    },
    {
      id: 3,
      nombre: 'Diseño de Sitio Web',
    },
  ]
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
