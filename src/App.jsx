import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './Components/Form'
import Block from './Components/Blocks'
function App() {
  const [blocks,setBlocks] = useState([])
  
  return (
    <>
    <Form handleBlock={setBlocks}></Form>
    <div className="container d-flex flex-wrap">
    {blocks.map((cube,i) => 
      {
        console.log(cube);
        console.log(i);
        return(
        <Block key={i} color={cube.color} width={cube.width} height={cube.height}>{i}</Block>
        );
      }
    )}
    </div>
    </>
  );
}

export default App;
