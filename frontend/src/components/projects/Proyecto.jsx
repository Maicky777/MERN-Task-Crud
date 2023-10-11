/* eslint-disable react/prop-types */
export const Proyecto = ({ proyecto }) => {
  return (
    <li className="w-full mb-2">
      <button className="w-full px-1 py-2 text-start hover:bg-zinc-200">
        {proyecto.nombre}
      </button>
    </li>
  )
}
