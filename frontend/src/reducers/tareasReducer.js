import { types } from '../types/types'

export const tareasReducer = (state = {}, action) => {
  switch (action.type) {
    case types.obtener_tareas:
      return {
        ...state,
        tareasProyectoActual: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
      }

    case types.adicionar_tarea:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
      }

    case types.eliminar_tarea:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
        tareaSeleccionada: null,
      }

    case types.cambiar_estado_tarea:
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload
            ? { ...tarea, estado: !tarea.estado }
            : tarea
        ),
      }

    case types.guardar_tarea:
      return {
        ...state,
        tareaSeleccionada: action.payload,
      }

    case types.actualizar_tarea:
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
        tareaSeleccionada: null,
      }
    default:
      return state
  }
}
