import { useState } from "react";

function CounterApp(){

    var [x,setX] = useState(0);

   function Increament(){
    setX(x+1);
   }

   function Decreament(){
    setX(x-1);
   }

    return(
        <div>
            <h1>
                Hello Everyone Let's Create One Counter App : {x}
            </h1>

<li> <button onClick={Increament}> + </button> </li>
<li> <button onClick={Decreament}> - </button> </li>

         
            
          

        </div>
    )
}

export default CounterApp;