/* eslint-disable react/prop-types */
export const Tarea = ({ tarea }) => {
  return (
    <li className="max-w-md mx-auto mb-3 shadow-md">
      <div className="flex items-center justify-between px-2 py-2.5">
        <p>{tarea.nombre}</p>
        <div className="flex gap-x-2">
          {tarea.estado ? (
            <button className="text-[11px] bg-teal-500 py-1 px-1.5 rounded-md">
              Completado
            </button>
          ) : (
            <button className="text-[11px] bg-red-300 py-1 px-1.5 rounded-md">
              Incompleto
            </button>
          )}

          <button className="text-[12px] tracking-wide py-1 px-1.5 text-white rounded-md bg-zinc-950 hover:opacity-90">
            Editar
          </button>
          <button className="text-[12px] tracking-wide py-1 px-1.5 text-white rounded-md bg-red-700 hover:opacity-90">
            Eliminar
          </button>
        </div>
      </div>
    </li>
  )
}
