import './App.css'
import { Container } from '@mui/material'
import APOD from './components/APOD'

function App() {

  return (
    <>
      <Container className="stars">
        <APOD />
      </Container>
    </>
  )
}

export default App
