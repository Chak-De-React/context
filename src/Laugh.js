import React, {useContext} from "react"
import PackageContext from "./Context"

const Laugh=()=>{
    let  {data,updateAge} = useContext(PackageContext) 
           console.log(x) // x = {data: {…}, updateAge: ƒ}


        return(
            <div>
                {/* <h1> Hiii </h1> */}
                <h2>Name: {data.name}</h2>
                <h4>Age: {data.age}</h4>
                <h4>Country: {data.country}</h4>
                <h4>Highest Score: {data.highestScore}</h4>
                <button
                onClick={()=>updateAge(80)}
                >Update Age</button>
            </div>
        )
}

export default Laugh;
