import React,{useState} from 'react';
import Modal from 'react-modal';
import Setting from '../../Icons/Setting';

Modal.setAppElement('#root')

const customStyles = {
    content : {
      top         : '50%',
      left        : '50%',
      right       : 'auto',
      bottom      : 'auto',
      marginRight : '-50%',
      transform   : 'translate(-50%, -50%)',
      width       : '70vw',
      height      : '70vh',
      border      : 'none',
    }
  };

  const spanStyle ={
    margin: '10px 0',
    padding: '10px 30px',
    textAlign: 'center',
    width: '150px',
    boxShadow: '1px 1px 10px gray',
    borderRadius: '30px'
}

  function GameSetting(){

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        return setIsOpen(true);
      }
    
    const closeModal = () => {
        return setIsOpen(false);
    }

      return(
          <span>
              <span onClick={openModal}><Setting setSize={25}/></span>
        <Modal
          closeTimeoutMS={200}
          isOpen={modalIsOpen}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Setting options"
        >
        <span className='model__container'>
            <span style={spanStyle}>New Game</span>
            <span style={spanStyle}>Change play mode</span>
            <span style={spanStyle}>Delete User data</span>
            <span style={{padding:'20px 0'}} onClick={closeModal}><Setting/></span> 
        </span>
        </Modal>
          </span>
      )
  }

  export default GameSetting;