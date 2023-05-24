// create context => global state or box 

// add value to context box 

// access or modify  those value in thta box

import React from "react"; 
import  PackageContext from "./Context"
import Provider from "./Provider";


const Smile = () => {
    return(
       <div>
          <PackageContext.Consumer>
              {
                (info) => (
                  <div>
                     <h1>
                      Name of Cricketer:  {info.name}
                     </h1>
                  </div>
                )
              }
          </PackageContext.Consumer>
       </div>
    )
}




const App = () => {

    return(
        <div>
            Hello , I am here
            <Provider>
               <Smile />
            </Provider>
        </div>
    )
}

export default App;

