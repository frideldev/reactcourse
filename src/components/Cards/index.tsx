import { styled } from 'goober'
import { emittedId } from '../../events/selected'
const Container = styled('div') <{ visible: boolean }>`
 width: 25rem;

 display: flex;
 flex-direction: row;
 background-color: var(--background-color);
 border-radius: 10px;
 padding: 20px;
 position: relative;
 .mask{
  position: absolute;
  inset: 0;
  background-color: #0097d940;
  border-radius:10px;
  height: 100%;
  width: 100%;
  display:${props=>props.visible?'block':'none'};
 }
.body{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  
}
.container-image{
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image{
width: 40px;
height: 40px;
}
 .title{
  font-size:16px;
  margin: 0px;
  color:#ececec;
  font-family: var(--font-family);
}

.description{
  font-size: 14px;
  margin: 0px;
  color: #a09e9e;
  font-family: var(--font-family);
}
`
export interface params{
  id:string
  title:string
  description:string
  image:string
  isVisible:boolean
  onClick?:(value:string)=>void  
}
const App = (params:params): JSX.Element => {
 const handleClick=()=>{
  emittedId(params.title)
  //typeof params.onClick ==='function' && params.onClick(params.id)
 
}
 
  return (
    <Container className='container' visible={params.isVisible} onClick={handleClick} >
      <div className='mask'></div>
      <div className='container-image'>
      <img className='image' src={params.image} alt="icons" />
      </div>
      
      <div className='body'>
      <p className='title'>
        {params.title}
      </p>
      <p className='description'>
        {params.description}
      </p>
      </div>
     
    </Container>
  )

}
export default App