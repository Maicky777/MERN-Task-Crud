import { FormularioProyecto } from './FormularioProyecto'
import { ListadoProyectos } from './ListadoProyectos'

export const Sidebar = () => {
  return (
    <aside className="w-1/5 min-h-full text-center">
      <h1 className="my-5 text-3xl font-extrabold">
        MERN-<span className="font-medium">Tareas</span>
      </h1>

      <FormularioProyecto />

      <div className="p-5">
        <h2 className="mb-5 text-lg font-semibold">Tus Proyectos</h2>
        <ListadoProyectos />
      </div>
    </aside>
  )
}
