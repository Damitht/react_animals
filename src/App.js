import { useState } from "react";

function useState(defaultValue){
    return {
        yourState: defaultValue,
        yourSetter: () => {}
    };
}

function App(){

//////////////////////////////////////////////
    // function makeArray() {
    //     return [1, 10, 32, 40];
    // }

    // const myArray = makeArray();
    // const firstElement = myArray[0];
    // const secondElement = myArray[2];
    // console.log(firstElement, secondElement);

    // //Array destructuring
    // const [firstEle, secondEle] = makeArray();
    // console.log(firstElement, secondElement);

 ////////////////////////////////////////////////   
    //const handleMouseMove = () => {
    //    console.log('Button was clicked!');
    //}

    //const handleClick = () => {
    //    console.log('Button was clicked!');
    //}

/////////////////////////////////////////////////


const{ yourSetter} = useState(0);


/////////////////////////////////////////////////
    //const [count, setCount] = useState(0);
    // const handleClick = () => {
    //     setCount(count + 1);
    // };

    // return (
    //     <div>
    //         <button onClick={handleClick}>Add Animal Click</button>
    //         <div>Number of Animals : {count}</div>
    //        {/*<button onMouseMove={handleMouseMove}>Add Animal Move</button>*/}
    //     </div>
    // );
}

export default App;