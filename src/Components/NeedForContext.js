// let name = "Abhishek"
let name = "Abhishek"

const Happy =()=>{
    // Abhishek
  return(
    <div> {name} is Happy </div>
    )
}

const Smile =()=>{
    // Abhishek
  return(
    <div> 
          Smile 
         <Happy/>
        
    </div>
    )
}

const Cry =()=>{
     // Abhishek
  return(
    <div> 
         Cry 
        <Smile />
       
    </div>
    )
}


const App =()=>{
  
  return(
    <div> <Cry /> </div>
    )
}


export default App























// const Happy =({hname})=>{
//     // Abhishek
//   return(
//     <div>{hname} is Happy </div>
//     )
// }

// const Smile =({sname})=>{
//     // Abhishek
//   return(
//     <div> 
//           Smile 
//          <Happy hname={sname}/>
        
//     </div>
//     )
// }

// const Cry =({cname})=>{
//      // Abhishek
//   return(
//     <div> 
//          Cry 
//         <Smile sname={cname}/>
       
//     </div>
//     )
// }


// const App =()=>{
  
//   return(
//     <div> <Cry  cname="Abhishek"/> </div>
//     )
// }


// export default App