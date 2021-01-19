import React from 'react';
import {ImCross} from 'react-icons/im'
import {IconContext} from 'react-icons'

const customStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection:'row',
  alignItems: 'center',
  margin: '0px',
  padding: '0px',
};

function Cross({setSize}){
    return(
        <span style={customStyles}>
         <svg width={setSize? setSize :80} height={setSize? setSize :80}>
         ------------------------------- // add linearGradient
        <defs>
          <linearGradient id="crossGradient" gradientTransform="rotate(-40)">
            <stop offset="0%" stopColor="#276cf5" />
            <stop offset="40%"  stopColor="#27e9f7" />
          </linearGradient>
        </defs>
          --------------------------------------- //pass attr to react icon
        <IconContext.Provider value={{ attr: {fill: "url('#crossGradient')"}}}>
          <ImCross size={setSize? setSize :80} />
        </IconContext.Provider>
      </svg>
        </span  >
    )
}

export default Cross;