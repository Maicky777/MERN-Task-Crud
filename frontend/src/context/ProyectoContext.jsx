import { createContext, useReducer } from 'react'
import { proyectoReducer } from '../reducers/proyectoReducer'
import { types } from '../types/types'

export const ProyectoContext = createContext()

// eslint-disable-next-line react/prop-types
export const ProyectoProvider = ({ children }) => {
  const listProyectos = [
    {
      id: '1',
      nombre: 'Tienda Virtual',
    },
    {
      id: '2',
      nombre: 'Intranet',
    },
    {
      id: '3',
      nombre: 'Diseño de Sitio Web',
    },
  ]

  const initialState = {
    nuevoProyecto: null,
    proyectos: [],
    proyectoActual: null,
  }
  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState)

  // Funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: types.formulario_proyecto,
    })
  }

  //  Funcion para cargar listado de Proyectos
  const cargarProyectos = () => {
    dispatch({
      type: types.cargar_proyectos,
      payload: listProyectos,
    })
  }

  // Agregar nuevo proyecto a la lista
  const addProyecto = (proyecto) => {
    dispatch({
      type: types.adicion_proyecto,
      payload: proyecto,
    })
  }

  // Seleccion de Proyecto actual
  const selectProyecto = (proyectoId) => {
    dispatch({
      type: types.seleccion_proyecto,
      payload: proyectoId,
    })
  }

  // Elimina el proyecto actual seleccionado
  const deleteProyecto = (proyectoId) => {
    dispatch({
      type: types.elimina_proyecto,
      payload: proyectoId,
    })
  }
  return (
    <ProyectoContext.Provider
      value={{
        nuevoProyecto: state.nuevoProyecto,
        proyectos: state.proyectos,
        proyectoActual: state.proyectoActual,

        mostrarFormulario,
        cargarProyectos,
        addProyecto,
        selectProyecto,
        deleteProyecto,
      }}
    >
      {children}
    </ProyectoContext.Provider>
  )
}
