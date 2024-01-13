import React ,{useEffect,useState} from "react";
import { Route, Link, useNavigate,useLocation} from 'react-router-dom';
import "../styles/shop.css";
import Mpesa from "./paymentmode/mpesa";
import Paypall from "./paymentmode/PayPal";
import Cash from "./paymentmode/cash";
import Stock from "./stock";
import { MdAddBusiness } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
const View = () =>{
  const [select , setSelect] = useState("");
  let navigate = useNavigate();
  const refresh = localStorage.getItem("pass");
  const {state} = useLocation();
  const {values} = state;
  let data = []
  let pass =[];
for(let i=0; i<values.length;i++){
  
  if(!pass.includes(values[i])){
  let size = values.filter(function (e) {
    return e == values[i];
});
data.push({ele:values[i],occ:size.length});
}
pass.push(values[i]);
}

let total_price = 0;
for(let i =0; i < data.length; i++){
  total_price += (Stock[data[i].ele].item_price * data[i].occ);
}
  return(
        <div className="main">
    <header className="head">
    <IoChevronBackSharp size={30} color="blue"onClick={()=>navigate("/")} />
    <div>    <h3 className="tagname">Shopify</h3></div>
    <div>    <h3 className="user">oparero</h3></div>

    <div style={{ paddingLeft:60,display:"flex",justifyContent:"space-between"}}>
   <FaGift size={30} color="yellow" style={{marginLeft:28}}/> <h3 style={{color:"rgba(20,188,92,0.341)",marginLeft:12,textShadow: "red"}}>Gift</h3>
    </div>
    </header>
    <h3 className="data">Customer purchase</h3>
    <table>
    <tr>
    <th>Item-name</th>
    <th>Item-price</th>
<th>Item-quantity</th>
<th>Item-total</th>
    </tr>
    {data.map((value,id)=>
    <tr>
    <td>{Stock[value.ele].item_name}</td>
     <td>{Stock[value.ele].item_price}</td>
 <td>{value.occ}</td>
 <td>{Stock[value.ele].item_price * value.occ}</td>
    </tr>)}
       
    
    </table>
    <div className="flex">
    <div className="total"><span>Total_price:  </span>{total_price} </div>
    </div>
    
    <h4 className="paywith">Payment Method</h4>
    <select className="slt"  onChange={(e)=>setSelect(e.target.value)} value={select} >
    <option>M-pesa</option>
    <option>paypall</option>
<option>Cash-payment</option>
    </select>
    <div>
    
    {
    select === "M-pesa"?  <Mpesa/>:select === "Cash-payment"? <Cash/>:<Paypall/>
    }
   
   
    
    
    
    </div>
    </div>
    );
    
    

  
  
};

export default View;