import './App.css';
import {useSelector } from "react-redux";
import{Box,Heading} from "@chakra-ui/react"
import Allroutes from "./pages/Allroutes"
function App() {
  const {name}= useSelector((state) => state.reducer1);
  return (
    <div className="App">
     <Allroutes />
    </div>
  );
}

export default App;