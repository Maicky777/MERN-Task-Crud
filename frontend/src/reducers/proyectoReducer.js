import { types } from '../types/types'

export const proyectoReducer = (state = {}, action) => {
  switch (action.type) {
    case types.formulario_proyecto:
      return {
        ...state,
        nuevoProyecto: true,
      }

    case types.cargar_proyectos:
      return {
        ...state,
        proyectos: action.payload,
      }

    case types.adicion_proyecto:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        nuevoProyecto: false,
      }

    case types.seleccion_proyecto:
      return {
        ...state,
        proyectoActual: state.proyectos.find(
          (proyecto) => proyecto.id === action.payload
        ),
      }

    case types.elimina_proyecto:
      return {
        ...state,
        proyectos: state.proyectos.filter(
          (proyecto) => proyecto.id !== action.payload
        ),
        proyectoActual: null,
      }
    default:
      return state
  }
}
