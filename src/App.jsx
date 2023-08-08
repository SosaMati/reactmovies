import './App.css'
import { MyRoutes } from './routers/routes'
import { BrowserRouter as Router, Link } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <header className='animate__animated animate__fadeIn'>
              <h1 className='title'>🎬 Películas</h1>
            </header>
          </Link>
        <MyRoutes />
      </Router>
    </>
  )
}

export default App
