import React , {useState} from "react";


function CounterIn(){
    const [count , setCount] = useState(0);

    function increment(){
        console.log(`before setStae : ${count}`);

        setCount(count + 1);

        console.log(`after setState : ${count}`);

    }

    return <div onClick = {increment}>{count}</div>;

}

export default CounterIn;