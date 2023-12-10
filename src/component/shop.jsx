import React ,{useState,useEffect} from "react";
import { Route, Link, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaSitemap } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { RiEqualizerFill } from "react-icons/ri";
import "../styles/shop.css";
import {db} from "./firebase";
import {getDocs,collection,addDoc} from "firebase/firestore";
import img from "./image/yellowroyco.png"
import Stock from "./stock";
import View from "./view";
const Shop = ()=>{
  const StockCollectionRef = collection(db, "Stock");
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(Stock);
  const [search, setSearch] = useState("");
  let navigate = useNavigate();
  useEffect(()=>{
    const fetchdata = async () =>{
      const take = await getDocs(StockCollectionRef);
      const filteredData = take.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
    }
    fetchdata();
  });
  useEffect(()=>{
    setFilter(Stock.filter(function (e) {
    return e.item_name.toLowerCase().includes(search.toLowerCase());
}));
    
  });
  
  
  return(
    
    <div className="main">
    <header className="head">
    <div style={{display:"flex"}}>  
    <FaRegUserCircle size={30} color ="blue"/>
    <h3 className="tagname">Shopify</h3></div>
    <div>    <h3 className="user">John Doe</h3></div>
       <div style={{marginLeft:30}} onClick={()=>navigate("/AddStock")}> <FaSitemap color="red" size={32}/></div>
    <div style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",width:100}} >
    <IoCartSharp size={30} color="yellow" className="cart" onClick={()=>navigate("/View",{state:{values:data}})}/>
    <h3 style={{color:"blue"}}>{data.length}</h3>
    </div>
    </header>
    <div className="put">
    <RiEqualizerFill color="yellow" size={24} style={{marginLeft:12}}/>
    <input type="text" placeholder="Such now for any product or items" className="input" value={search} onChange={(e)=>setSearch(e.target.value)}/>
    <IoIosSearch color="#9b9fa7" size={24} style={{marginRight:20}}/> 
    </div>
    <p>products</p>

    <div className="items">
    {filter.map((stock,index)=>
        <div  className="box" onClick={() => setData(current=>[...current,index])} key={index} >
         <h4 className="item_title">{stock.item_name}</h4>
        <img src={stock.thumb} className="thumb" />
       <FaStar  size={20} color="rgba(16,68,37,6.341)" className="stats" />
    </div>
    )}

        
    </div>
    
       
    
    </div>
    );
  
}

export default Shop;
