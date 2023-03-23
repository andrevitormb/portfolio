import React from 'react'

import '../styles/components/modal.sass'

const Modal = ({isOpen, setModalOpen, children}) => {
    if(isOpen){
        return <div id='modal-container'>
            <div className='modal-content'>
                <div className='close' onClick={(setModalOpen)}>
                    X
                </div>
                <div>
                    {children}
                </div>
                
            </div>
        </div>      
    }
    
    return null

}

export default Modal