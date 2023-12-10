import React,{useState,useRef} from "react";
import "../styles/shop.css";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { Route, Link, useNavigate,useLocation} from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {db} from "./firebase";
import {getDocs,collection,addDoc} from "firebase/firestore";
import { MdAdd } from "react-icons/md";

const Add = () =>{
  const collectionref = collection(db,"Stock");
  const inputref = useRef(null);
  let navigate = useNavigate();
  const [file , setFile] = useState(null);
  const [stockname , setStockname] = useState("");
  const [thumb , setThumb] = useState("");
const [price , setPrice] = useState(null);
const [quantity , setQuantity] = useState(null);
const [tax , setTax] = useState(null);
const [progress , setProgress] = useState(0);
  const handleupload = () =>{
    inputref.current.click();
    const storage = getStorage();
const storageRef = ref(storage, file.name);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    
    
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setThumb(downloadURL);
      alert('File available at', downloadURL);
    });
  }
);
    
  }
  const addstock = async () =>{
      await addDoc(collectionref,{
        item_name:stockname,
        item_price:price,
        tax_rate:tax,
        item_quantity:quantity,
        url:thumb,
      });
    
  }
  return(
  
     <div className="main">
    <header className="head">
        <IoChevronBackSharp size={30} color="blue"onClick={()=>navigate("/")} />
    <div>    <h3 className="tagname">Shopify</h3></div>
    <div>    <h3 className="user">John Doe</h3></div>
    </header>
    <h3 className="addstoke">Add Stock</h3>
    <input type="text" placeholder="Enter product name" className="inputs" value={stockname} onChange={(e)=>setStockname(e.target.value)}/>
        <input type="number" placeholder="Enter product price" className="inputs" value={price} onChange={(e)=>setPrice(e.target.value)}/>
    <input type="number" placeholder="Enter tax-rate" className="inputs" value={tax} onChange={(e)=>setTax(e.target.value)} />
        <input type="number" placeholder="Enter quantity" className="inputs" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
      <div className="flex" >
      <input type="file" className="file" ref={inputref} style={{display:"none"}} onChange={(event)=>setFile(event.target.files[0])}/>
        <div style={{width:60,height:60,marginRight:18}}>
  <CircularProgressbarWithChildren value={progress} >

  <MdAdd size={30} color="yellow" onClick={handleupload} />
</CircularProgressbarWithChildren>
  </div>
   

  
     
      </div>
        <div className="flext" >
                  <input type="button"  className="add" value="Add" onClick={addstock}/>
            <input type="button" className="cancel" value="Discard"/>
            
          


      </div>  
      </div>
  
    );
}

export default Add;