import { Tarea } from './Tarea'
import { RiDeleteBin2Line } from 'react-icons/ri'

export const ListadoTareas = () => {
  const tareas = [
    {
      nombre: 'Elegir Plataforma',
      estado: true,
    },
    {
      nombre: 'Elegir Colores',
      estado: false,
    },
    {
      nombre: 'Elegir Plataforma de pago',
      estado: false,
    },
    {
      nombre: 'Elegir Hosting',
      estado: true,
    },
  ]

  return (
    <div className="p-5">
      <h2 className="text-lg font-semibold text-center">
        Proyecto: <span>Tienda Virtual</span>
      </h2>

      <ul>
        {tareas.length === 0 ? (
          <p>No existe tareas</p>
        ) : (
          tareas.map((tarea) => (
            <Tarea
              key={tarea.nombre}
              tarea={tarea}
            />
          ))
        )}
      </ul>

      <button className="flex text-sm items-center tracking-wide py-1.5 px-2 border-2 border-zinc-500 rounded-md  hover:opacity-90">
        Eliminar Proyecto <RiDeleteBin2Line className="ml-2" />
      </button>
    </div>
  )
}
