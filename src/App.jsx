import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Shop from "./component/shop";
import Add from "./component/add";
import View from "./component/view";
import Profile from "./component/profile";
import './App.css'
import { Route,Router, Link ,Routes} from     "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="main">
<Routes>
<Route path="/" element={<Shop/>}/>
<Route path="/View" element={<View/>}/>
<Route path="/AddStock" element={<Add/>}/>
<Route path="/Profile" element={<Profile/>}/>
 </Routes>


</div>
 
  )
}

export default App
