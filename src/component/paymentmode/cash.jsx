import React from "react";

const Cash = ()=>{
  return(
    
     <div>
     <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
      <div className="mp">  
      <h3 className="h">Enter customer Name:</h3>
      <input type="text" className="textarea" placeholder="Enter name"/>
      </div>
            <div className="mp">  
      <h3 className="h" style={{marginRight:16}}>Enter total Amount:</h3>
      <input type="number" className="textarea" placeholder="Enter Amount" style={{marginLeft:12}}/>
      </div>
      </div>
<input type="button" className="add" value="Submit" style={{marginLeft:15,marginTop:18,marginBottom:16}}/> 
    </div>
    
    
    );
  
};


export default Cash;