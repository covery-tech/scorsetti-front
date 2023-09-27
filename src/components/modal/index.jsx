import {useEffect,useRef} from 'react'
import "./style.css"
import ReactDOM from "react-dom"


export const Modal = ({children,onClose}) => {
  const menuRef = useRef(null)
  useEffect(()=>{
    let handle = (e)=>{
        if(!menuRef?.current?.contains(e?.target)){
            onClose(false)
        }
    }
    document.addEventListener("mousedown",handle)
    return()=>{
        document.removeEventListener("mousedown",handle)
    }
})

useEffect(() => {
  const element = document.getElementById('modal-cls-btn');
  if (element) {
    element.addEventListener('click', handleClick);
  }
  return () => {
    if (element) {
      element.removeEventListener('click', handleClick);
    }
  };
}, []);

const handleClick = () => {
  onClose()
};

  return (
    <div className='modal-background'>
        <div className='modal w-80-l w-90 mw8' ref={menuRef}>
            <button className='button main-button mb2' id='modal-cls-btn'>✖</button>
            {children} 
        </div>
    </div>
  )
}
const div = document.getElementById("modal-root") 
export default function ModalPortal({children,onClose}){
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>
            {children}
        </Modal>,
        div
    )
  }