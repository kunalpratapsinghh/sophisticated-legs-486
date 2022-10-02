
import React ,{useState,useEffect,useRef}from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import styles from "./Navbar.module.css";
// import Userdetail from "../pages/login/Userdetail";
import Email from "../pages/login/Email"
import Otp from "../pages/login/Otp";
import Signup from "../pages/login/Signup"


const Navbar_modal = ({sh}) => {
  const [text, settext] = useState("");
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [state, setstate] = useState(false);


  const {name,email} = useSelector((state)=>state.auth)
   console.log(name,"topnavbar")
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggle = () => {
    setstate(true);
  };
  let handleclose =()=>{
    onClose()
    sh(false);
  }

  useEffect(()=>{
    onOpen()

  },[])
  return (
    <div>
      <>
        <Modal isOpen={isOpen}  onClose={handleclose}>
          <ModalOverlay />
          <ModalContent
            style={{
              maxWidth: "715px",
              height: "510px",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <ModalCloseButton
              marginTop="30px"
              marginRight="50px"
              borderRadius="50%"
              backgroundColor="grey"
            />
            <div className={styles.flexbox}>
              <div className={styles.leftbox}>
                {show && show1 ? (
                  <Email setShow={setShow} text={text} settext={settext} />
                ) : null}
                {!show && show1 ? (
                  <Otp
                    login={toggle}
                    setShow={setShow}
                    text={text}
                    isOpen={onClose}
                    setShow1={setShow1}
                  />
                 ) : null}
                {!show && !show1 ? (
                  <Signup close={onClose} login={toggle}></Signup>
                ) : null}
              </div>
              <div className={styles.rightbox}>
                {/* <Rightbox></Rightbox> */}
              </div>
            </div>
          </ModalContent>
        </Modal>
      </>
    </div>
  )
}

export default Navbar_modal