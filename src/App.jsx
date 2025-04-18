import './css/App.css';
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {
  return (
    <>
    <div>
      <NavBar />
      <div>
        <main className="main-content">
          <Routes>
            <Route path ="/"  element={<Home />}/>
            <Route path ="/favorites"  element={<Favorites />}/>
          </Routes>
        </main>
      </div>
    </div>
   </>
  )
}
export default App
