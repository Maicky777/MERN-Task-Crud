import { createContext, useReducer } from 'react'
import { tareasReducer } from '../reducers/tareasReducer'
import { types } from '../types/types'

export const TareasContext = createContext()

// eslint-disable-next-line react/prop-types
export const TareasProvider = ({ children }) => {
  const initialState = {
    tareas: [
      {
        id: '1',
        nombre: 'Elegir Plataforma',
        estado: true,
        proyectoId: '1',
      },
      {
        id: '2',
        nombre: 'Elegir Colores',
        estado: false,
        proyectoId: '2',
      },
      {
        id: '3',
        nombre: 'Elegir Hosting',
        estado: true,
        proyectoId: '3',
      },
      {
        id: '4',
        nombre: 'Elegir Arroz',
        estado: true,
        proyectoId: '3',
      },
      {
        id: '5',
        nombre: 'Elegir Fideo',
        estado: false,
        proyectoId: '2',
      },
      {
        id: '6',
        nombre: 'Elegir carne',
        estado: true,
        proyectoId: '1',
      },
      {
        id: '7',
        nombre: 'Elegir Papa',
        estado: true,
        proyectoId: '2',
      },
      {
        id: '8',
        nombre: 'Elegir Chuño',
        estado: false,
        proyectoId: '2',
      },
      {
        id: '9',
        nombre: 'Elegir Tunta',
        estado: true,
        proyectoId: '3',
      },
    ],
    tareasProyectoActual: null,
    tareaSeleccionada: null,
  }

  const [state, dispatch] = useReducer(tareasReducer, initialState)

  // Funciones
  const adicionarTarea = (tarea) => {
    dispatch({
      type: types.adicionar_tarea,
      payload: tarea,
    })
  }

  // Funcion para elimnar tarea
  const eliminarTarea = (id) => {
    dispatch({
      type: types.eliminar_tarea,
      payload: id,
    })
  }

  // Funcion para cambiar de estado de tarea
  const cambiarEstado = (tareaId) => {
    dispatch({
      type: types.cambiar_estado_tarea,
      payload: tareaId,
    })
  }

  // funcion para seleccionar la tarea
  const guardarTarea = (tarea) => {
    dispatch({
      type: types.guardar_tarea,
      payload: tarea,
    })
  }

  // Funcion actualizar tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: types.actualizar_tarea,
      payload: tarea,
    })
  }

  // obtener las tareas de un proyecto
  const obtnerTareas = (proyectoId) => {
    dispatch({
      type: types.obtener_tareas,
      payload: proyectoId,
    })
  }

  return (
    <TareasContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyectoActual: state.tareasProyectoActual,
        tareaSeleccionada: state.tareaSeleccionada,

        obtnerTareas,
        adicionarTarea,
        eliminarTarea,
        cambiarEstado,
        guardarTarea,
        actualizarTarea,
      }}
    >
      {children}
    </TareasContext.Provider>
  )
}
