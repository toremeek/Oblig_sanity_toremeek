
import { motion } from "framer-motion";
import styled from "styled-components";

const Modal = ({modal, filmer, closeModal, video}) => {

  const Styledmodal = styled(motion.section) `
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.753);
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 0;
  `
  const StyledInnerModal = styled(motion.section)`
      cursor: pointer;
      text-align: left;
      background-color: rgb(255, 255, 255);
      color: black;
      max-width: 100%;
      overflow-y: auto;
      padding: 10px;
  `

  return (
  <>
  {modal? (<Styledmodal onClick={closeModal}>
  <StyledInnerModal 
  className="inner-modal"
  initial={{scale: 0, rotate: 45, opacity: 0}}
  animate={{scale: 1, rotate: 0, opacity: 1}}
  transition={{
      duration: 0.5,
      stiffness: 200,
      damping: 20
    }}
  >
      <iframe title="trailer" width="560" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture: fullscreen" allowfullscreen></iframe>
  </StyledInnerModal>
  </Styledmodal>): null}
  </>
  )
}

  export default Modal;