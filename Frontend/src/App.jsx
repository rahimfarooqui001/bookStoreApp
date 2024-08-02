import SignUp from "./components/SignUp"
import Courses from "./courses/Courses"
import Home from "./home/Home"
import { Navigate, Route, Routes } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./contaxt/AuthProvider";

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser)
  return (
   <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/course" element={authUser ? <Courses/> : <Navigate to='/Signup'/>}/>
     <Route path="/Signup" element={<SignUp/>}/>
    </Routes>
    <Toaster />
   </div>
  )
}

export default App
