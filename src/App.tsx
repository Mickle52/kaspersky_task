import './css/App.css'
import {data} from '../src/data'
import {Card} from './components/Card/Card'


function App() {

  return (
    <>
      <Card data={data} />
    </>
  )
}

export default App
