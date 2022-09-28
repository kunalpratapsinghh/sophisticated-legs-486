import './App.css';
import {useSelector } from "react-redux";
import{Box,Heading} from "@chakra-ui/react"
import Router from './pages/Allroutes';
function App() {
  const {name}= useSelector((state) => state.reducer1);
  return (
    <div className="App">
     <Router />
    </div>
  );
}

export default App;