import { Sidebar } from '../components/projects/Sidebar'
import { FormularioTarea } from '../components/tareas/FormularioTarea'
import { ListadoTareas } from '../components/tareas/ListadoTareas'
import { Navbar } from '../components/ui/Navbar'

export const Proyectos = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-4/5 min-h-screen bg-zinc-200">
        <Navbar />
        <main>
          <FormularioTarea />
          <div>
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  )
}
