
import PackageContext from "./Context"
import { useState } from "react"

const Provider = ({children}) => {
   let [cricketer, setCricketer] = useState({
        name: "Sachin Tendulkar",
        age: 47,
        country: "India",
        highestScore: 248
   })

    return(
        <PackageContext.Provider
         value={
            cricketer
         }
        >
            {children}
        </PackageContext.Provider>
    )


}

export default Provider;