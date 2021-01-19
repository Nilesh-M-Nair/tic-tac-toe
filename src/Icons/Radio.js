import React from 'react';
import {IconContext} from 'react-icons'
import {MdRadioButtonChecked} from 'react-icons/md'

const customStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection:'row',
  alignItems: 'center',
  margin: '0px',
  padding: '0px',
};

function Radio({setSize}){
    return(
        <span style={customStyles}>
         <svg width={setSize? setSize :40} height={setSize? setSize :40}>
         ------------------------------- // add linearGradient
        <defs>
          <linearGradient id="crossGradient" gradientTransform="rotate(-40)">
            <stop offset="0%" stopColor="#276cf5" />
            <stop offset="40%"  stopColor="#27e9f7" />
          </linearGradient>
        </defs>
          --------------------------------------- //pass attr to react icon
        <IconContext.Provider value={{ attr: {fill: "url('#crossGradient')"}}}>
          <MdRadioButtonChecked size={setSize? setSize :40} />
        </IconContext.Provider>
      </svg>
        </span  >
    )
}

export default Radio;