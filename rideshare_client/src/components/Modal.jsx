import bootsrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Children, useEffect, useState } from 'react';
const Modal = (props) =>{
    const [show,setShow] = useState(props.visible)

    useEffect(()=>{
        if(props.visible){
            setShow(true)
        }
    },[props.visible])

    function closeModal(){
        setShow(false)
        props.onClose()
    }
    return (
        <div class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display:show?"block":"none"}}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{props.title}</h5>
                        <button type="button" class="btn-close" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {props.children}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default Modal