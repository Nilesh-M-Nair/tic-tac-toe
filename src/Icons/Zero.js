import React from 'react';
import {IconContext} from 'react-icons'
import {RiRecordCircleFill} from 'react-icons/ri'

const customStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection:'row',
  alignItems: 'center',
  margin: '0px',
  padding: '0px',
};

function Zero({setSize}){
    return(
        <span style={customStyles}>
         <svg width={setSize? setSize :100} height={setSize? setSize :100}>
         ------------------------------- // add linearGradient
        <defs>
          <linearGradient id="zeroGradient" gradientTransform="rotate(-40)">
            <stop offset="0%" stopColor="#f16a4b" />
            <stop offset="40%"  stopColor="#f8d849" />
          </linearGradient>
        </defs>
          --------------------------------------- //pass attr to react icon
        <IconContext.Provider value={{ attr: {fill: "url('#zeroGradient')"}}}>
          <RiRecordCircleFill size={setSize? setSize :100} />
        </IconContext.Provider>
      </svg>
                
        </span>
    )
}

export default Zero;