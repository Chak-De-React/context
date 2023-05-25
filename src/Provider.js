
import PackageContext from "./Context"
import { useState } from "react"

const Provider = (props) => {
   let [cricketer, setCricketer] = useState({
        name: "Sachin Tendulkar",
        age: 47,
        country: "India",
        highestScore: 248
   })

    return(
        <PackageContext.Provider
         value={
            {
               data : cricketer, 
               updateAge: (newAge)=>setCricketer({...cricketer, age: newAge})
            }
         }
        >
            {props.children}
        </PackageContext.Provider>
    )


}

export default Provider;