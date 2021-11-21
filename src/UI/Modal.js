import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ children, handleOutsideClick }) => {
    return <>
        <div className="modal-bg" onClick={handleOutsideClick}></div>
        {ReactDOM.createPortal(children, document.getElementById('modal'))}
    </>
}

export default Modal;