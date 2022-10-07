import "./App.css";
import { Footer } from "./component/Footer";
import { Topnavbar } from "./component/Topnavbar";
// import {useSelector } from "react-redux";
// import{Box,Heading} from "@chakra-ui/react"


import Router from "./pages/Allroutes";
function App() {
  const url= window.location.href
  console.log(url)
  // const {name}= useSelector((state) => state.reducer1);
  return (
    <div className="App">
    { url!="http://localhost:3000/checkout" && <Topnavbar />}
      
     
        <Router />
      { url!="http://localhost:3000/checkout" && <Footer />}
    </div>
  );
}

export default App;
