import { RouteMain } from './routes/RouteMain'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const AppTask = () => {
  return (
    <div className="font-oswald">
      <RouteMain />
      <ToastContainer />
    </div>
  )
}
