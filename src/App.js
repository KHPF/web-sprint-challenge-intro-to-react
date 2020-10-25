import React, {useState, useEffect}from 'react';
import './App.css';
import axios from "axios"
import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  const [character, setCharacter] = useState([]);

  // requesting date with useEffect
  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
    .then(res => {
      
      console.log(res)

      setCharacter(res.data.results)
      
    })
    .catch(err => console.log(err));

  }, [])

  console.log(setCharacter)


  return (
    <div className="App">
      <h1 className="Header"> Star Wars Characters</h1>

        {character.map(character => 
        <Character data={character}/>

      )}


    </div>
  );
}

export default App;
