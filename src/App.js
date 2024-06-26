import'./App.css';
import { useState } from "react";
import AnimalShow from './AnimalShow'

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[(Math.floor(Math.random() * animals.length))];
}

console.log(getRandomAnimal());


function App(){

    const[animals, setAnimals] = useState([]);

     const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
     };

     //map() function iterates and send each element in the array to the function
     const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
     });

     return (
         <div className="app">
            <button onClick={handleClick}>Add Animal Click</button>
            <div className='animal-list'>{renderAnimals}</div>
         </div>
     );
}

export default App;