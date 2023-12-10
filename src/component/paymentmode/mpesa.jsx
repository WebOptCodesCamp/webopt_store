import React from "react";

const Mpesa = ()=>{
  return(
    
     <div>
      <div className="mp">  
      <h3 className="h">Enter customer Number:</h3>
      <input type="number" className="textarea" placeholder="Enter Phone No"/>
      </div>
<input type="button" className="add" value="Submit" style={{marginLeft:15,marginTop:18,marginBottom:16}}/> 
    </div>
    
    
    );
  
};


export default Mpesa;