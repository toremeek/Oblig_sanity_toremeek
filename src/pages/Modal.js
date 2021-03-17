
import { motion } from "framer-motion";


const Modal = ({modal, closeModal, video}) => {
return (
<>
{modal? (<section className="modal" onClick={closeModal}>

<motion.section 
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
</motion.section>

</section>): null}

</>
)
}

export default Modal;