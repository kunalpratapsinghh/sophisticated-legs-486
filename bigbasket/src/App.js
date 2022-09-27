import './App.css';
import {useSelector } from "react-redux";
import{Box,Heading} from "@chakra-ui/react"
function App() {
  const {name}= useSelector((state) => state.reducer1);
  return (
    <div className="App">
     <Box>{name}</Box>
     <Heading>MASAI</Heading>
    </div>
  );
}

export default App;