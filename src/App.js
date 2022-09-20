


import { AuthContextProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import Signup from './pages/Signup';
import Todo from "./pages/todo";


function App() {
  return (
    <>
    <AuthContextProvider>
    <Routes>
   
    <Route path='/' element={<Signup/> }/>
    <Route path='todo' element={<Todo/>}/>
    
   
    
   
   </Routes>
   
      

   
     </AuthContextProvider>
    </>
  );
}

export default App;
