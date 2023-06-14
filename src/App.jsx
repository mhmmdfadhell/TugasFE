import { useState } from "react";
import SignIn from "./pages/login";
import SignUp from "./pages/register";


function App(){
  return (
    <div className="flex justify-center items-center w-full bg-white gap-x-52">
    <SignIn/>
    <SignUp/>
    </div>
    
  )
 
}
export default App 