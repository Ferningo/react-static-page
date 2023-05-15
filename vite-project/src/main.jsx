import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import "./index.css"
import FunFactList from './FunFactList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <NavBar/>
    <FunFactList />
  </>
)
