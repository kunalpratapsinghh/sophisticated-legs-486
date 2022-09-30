import "./App.css";
import { Footer } from "./component/Footer";
import { Topnavbar } from "./component/Topnavbar";
// import {useSelector } from "react-redux";
// import{Box,Heading} from "@chakra-ui/react"
import Router from "./pages/Allroutes";
function App() {
  // const {name}= useSelector((state) => state.reducer1);
  return (
    <div className="App">
      <Topnavbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
