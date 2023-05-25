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
             // info = cricketer
            (info) => (
                <div>
                  <h2>Name: {info.data.name}</h2>
                  <h4>Age: {info.data.age}</h4>

                  <button
                  onClick={()=>info.updateAge(80)}
                  >Update Sachin Age</button>

                  <h4>Country: {info.data.country}</h4>
                  <h4>Highest Score: {info.data.highestScore}</h4>
                  
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




/*
create Context hook =>
  1) Provider = value
  2) Consumer = access value
// all child component of provider can access value
*/


/* 



*/
