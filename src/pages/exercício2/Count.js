import React, {useState} from "react"

export default function Count() {
    const [count, setCount] = useState(0)

    function minusButton(){
       return setCount(prevCount =>{
            if(prevCount === 0){
                return 0
            }else{
               return prevCount - 1
            }
        })
    }

    function plusButton(){
        return setCount(prevCount => prevCount + 1)
    
    }

    return (
       <>
        <div className="counter">
            <button onClick={minusButton} className="counter--minus">-</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button onClick={plusButton} className="counter--plus">+</button>
        </div>
       </> 
       
    )
}