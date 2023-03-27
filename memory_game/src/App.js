import { useState } from 'react';
//import Tiles from './components/Tiles'
import Tile from './Tile'


function Tiles() {
  const [prev, setPrev] = useState(-1)
  const [turnCheck, setTurn]= useState (0)
  const [turnsCount,setTurnCount] =useState(0);

  const [items, setItem] = useState([
      {id: 1, img: '/img/bark.avif', stat: "", turn: 0},
      {id: 1, img: '/img/bark.avif', stat: "", turn: 0},
      {id: 2, img: '/img/rock.avif', stat: "", turn: 0},
      {id: 2, img: '/img/rock.avif', stat: "", turn: 0},
      {id: 3, img: '/img/dirt.jpg', stat: "", turn: 0},
      {id: 3, img: '/img/dirt.jpg', stat: "", turn: 0},
      {id: 4, img: '/img/grass.jpeg', stat: "", turn: 0},
      {id: 4, img: '/img/grass.jpeg', stat: "", turn: 0},
      {id: 5, img: '/img/sand.jpeg', stat: "", turn: 0},
      {id: 5, img: '/img/sand.jpeg', stat: "", turn: 0},
      {id: 6, img: '/img/water.jpg', stat: "", turn: 0},
      {id: 6, img: '/img/water.jpg', stat: "", turn: 0},
  ].sort(() =>Math.random()- 0.5))

  function newGame(){

    setItem([...items ].sort(() =>Math.random()- 0.5))
    setTurnCount(0)
    
    
    items.forEach(items => { items.stat = " active ";
    items.turn = 0;
    })
   
     setTimeout(()=> {items.forEach(items => {items.stat = " new "})}, 1000)
  }

  function checkWinner()
  {
   let counter = 0;
   for (let i=0; i < items.length; i++)
   {
    if (items[i].stat == " matched ") {
      counter++;
     
   }
    if (counter == 12) {
    setTimeout(()=> {
      alert("You Won!")}, 500)
    }
  }
  
}
  

  function check(current) {
      if ( items [current].id == items[prev].id && items[current].turn ==0 ){
          items[current].stat= " matched "
          items[prev].stat = " matched "
          setItem([...items])
          setPrev(-1)
          setTurn(0)
          checkWinner()
          

      }
      else {
          items[current].stat = " unmatched "
          items[prev].stat = " unmatched "
          setItem([...items])
          setTimeout(()=> {
              items[current].stat =""
              items[prev].stat = ""
              items[prev].turn = 0
              items[current].turn =0
              setItem( [...items])
              setPrev(-1)
              setTurn(0)
        }, 1000)
      }
  }

  function whenClicked(id) {
    if(turnCheck === 1 && items[id].stat != " active " && items[id].stat != " matched "){
      check(id)
      setTurn(2)
      setTurnCount(turnsCount +1)

    }
      else if( prev === -1 && turnCheck === 0 && items[id].stat != " matched "){
          items[id].stat = " active "
          items[id].turn = 1
          setItem([...items])
          setPrev(id)
          setTurn(1) 
      }
      else{
        if(turnCheck === 2){
          setTimeout(
            setTurn(0),1000)
         } 
      } 
  }

  return (
      <div className = "container">
          {
              items.map((item, index)=>(
                  <Tile key ={index} item = {item} id ={index} whenClicked={whenClicked}/>

          ))}
           <p>Turn Count: {turnsCount}</p>

           <button onClick={newGame}>New Game</button>
      
      </div>
      
  )
}



function App() {
 
  return (

    <div className="App">
      <header className="App-header">
      <div>

      <h1>Memory Game</h1>
      <h2> Textures</h2>
      <div id= "target" >
      <Tiles/>
      </div>
      
      </div>
    </header>
    </div>
  );
}

export default App;
