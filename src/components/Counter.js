import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isLogin, setIsLogin] = useState(true);

    return(
        <div className="counter-container mt-5">
            <h2 className="text-uppercase">Count: {count}</h2>
            <button className="btn btn-primary" onClick={() => {
                setCount(count + 1);
            }}>ADD</button> { }
            <button className="btn btn-secondary" onClick={() => {
                {!count <= 0 && setCount(count - 1)}
                
                // if(count <= 0) {return}
                //setCount(count - 1);
            }}>REMOVE</button>

        </div>
    );
}

export default Counter;