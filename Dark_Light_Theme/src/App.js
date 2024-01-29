import { useEffect, useState } from "react";
import Navbar from "./Component/navbar/Navbar";

function App() {
  const current_them = localStorage.getItem('current_them')
  const[theme,setTheme]=useState(current_them ?current_them:'light' );
  useEffect(()=>{
    localStorage.setItem('current_them',theme)
  },[theme])

  return (
    <>
    <div className={`container ${theme}`}>
    <Navbar theme={theme} setTheme={setTheme}/>
    </div>
    </>
  );
}

export default App;
