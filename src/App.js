
import './App.css';
import Card from "./card";
//import List from "./cartlist"
import { useState } from "react";
function App() {
  var prod = [
    {
      name:"Iphone X",
      price:"₹:80,000"
     },
     {
      name:"Laptop",
      price:"₹:50,000"
     },
     {
      name:"Washing Machine",
      price:"₹:40,000"
     },
     {
      name:"Monitor",
      price:"₹:5,000"
     },
     {
      name:"TV",
      price:"₹:1,00,000"
     },
     {
      name:"Speaker",
      price:"₹:5,000"
     }]
    
  let [li,add] = useState([]);
  function addtocart(itm)
  { 
    li.push(itm);
    add([...li]);
    
  }
  function removefromcart(r)
  {
   var index = li.indexOf(r);
   li.splice(index,1);
   add([...li]);
  }
 
  return (
    <div className="container-fluid">
      <div className="row">
        <div className = "col-lg-2">
           <strong> Cart Item :</strong> 
           <ul class="list-group">
  

            {li.map((i)=>{
               return <li className="list-group-item">{i} <button type="button" className="btn-close" aria-label="Close" onClick={()=>{
                removefromcart(i);
                
               }}></button></li>
            
               }) 
            }
            </ul>
         </div>
         <div className="col-lg-10">
         <div className="row col-lg-12">
         
        
         {
           prod.map((item)=>
             {
               return <Card i={item} fun={addtocart}></Card>
             }
           )
         }
          
          
        </div>
        
        </div>
        </div>
      </div>  
  );
}

export default App;
