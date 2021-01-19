import React,{useState,useEffect} from 'react';
import Modal from 'react-modal'
import Cross from '../../Icons/Cross'
import Zero from '../../Icons/Zero'
import Radio from '../../Icons/Radio'
import {MdRadioButtonChecked} from 'react-icons/md'
import {MdRadioButtonUnchecked} from 'react-icons/md'
import './select.css'
import GameSetting from './GameSetting';

const customStyles = {
    content : {
      top         : '50%',
      left        : '50%',
      right       : 'auto',
      bottom      : 'auto',
      marginRight : '-50%',
      transform   : 'translate(-50%, -50%)',
      width       : '100vw',
      height      : '100vh',
      border      : 'none'
    }
  };

Modal.setAppElement('#root')

function Select (){

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const [activeOn, setActiveOn] = useState(false);
  // const [playerChoose, setPlayerChoose ] = useState(false);

//   const [inSet,setInSet] = useState(false);

const handleClick = () => {
    setActiveOn(!(activeOn));
    // playerChoose(true);
  }

  useEffect(() => {
    setIsOpen(true)
}, [])
 
  const nextmodal =()=>{
    setIsOpen(false);
    setSelectIsOpen(true);

  }

  const enterGame=()=>{
    setSelectIsOpen(false);

  }

    return(
        <span className='select'>
        <Modal
          closeTimeoutMS={200}
          isOpen={modalIsOpen}
        //   onAfterOpen={afterOpenModal}
        //   onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Select Type"
        >
        <span className='model__container'>
            <span className='model__icon'>
                <Cross/>
                <Zero/>
            </span>
            <span className='model__type'>Choose your play mode</span>
            <span className='model__type1' onClick={nextmodal} >With AI</span>
            <span className='model__type2' onClick={nextmodal} >With a friend</span>
            <span className='model__gamesetting'><GameSetting /></span>  
        </span>
          
        </Modal>
        <span className='pickside'>
        <Modal
          closeTimeoutMS={200}
          isOpen={selectIsOpen}
        //   onAfterOpen={afterOpenModal}
        //   onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Pick side"
        >
        <span className='pickside__container'>
          <span className='pickside__option'>

          <span className='pickside__option1' onClick={handleClick} style={!(activeOn)? {opacity:1}:{opacity:0.5}}>
            <span className='cross__icon'><Cross setSize={80}/></span>
            <span className='option1'>
              {!(activeOn)?<MdRadioButtonChecked style={{color:'aqua'}} size={30}/>:
              <MdRadioButtonUnchecked size={30}/>}</span>
          </span>

          <span className='pickside__option2' onClick={handleClick} style={(activeOn)? {opacity:1}:{opacity:0.5}}>
            <span className='zero__icon'><Zero setSize={100}/></span>
            <span className='option2'>
              {activeOn?<MdRadioButtonChecked style={{color:'aqua'}} size={30}/>:
              <MdRadioButtonUnchecked size={30}/>}</span>
          </span>
          </span>

          <span className='pickside__button' onClick ={enterGame}>Continue</span>
        </span>
        </Modal>
        </span>
        </span>
    )
}

export default Select;