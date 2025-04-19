import './css/App.css';
import Favorites from './Pages/Favorites'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import { MovieProvider } from './context/MovieContext'

function App() {
  return (
    <>
    <MovieProvider>
      <NavBar />
      <div>
        <main className="main-content">
          <Routes>
            <Route path ="/"  element={<Home />}/>
            <Route path ="/favorites"  element={<Favorites />}/>
          </Routes>
        </main>
      </div>
    </MovieProvider>
   </>
  )
}
export default App
