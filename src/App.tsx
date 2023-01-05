import { styled } from 'goober'
import Card from './components/Cards'
import { emittedId } from './events/selected'
import useSelect from './hooks/useSelect'
import Listener from './components/List'
const Container = styled('div')`
background-color: #252628;
height: 100vh;
margin: 0px;
padding:10px 0px;
display: flex;
flex-direction: column;
gap: 15px;
--background-color:#2e2f30;
--font-family:'Gill Sans','Gill Sans MT','Calibri','Trebuchet MS', sans-serif;
`
const App = (): JSX.Element => {
  const {data}=useSelect()
  const handleSelectDefault=()=>emittedId(data[0].title)
  return (
    <Container >
      {
        data.map((v,i)=> <Card key={i} {...v} ></Card>)
      }
     <button onClick={handleSelectDefault}>
      Hola
     </button>
     <Listener/>
    </Container>
  )

}
export default App
