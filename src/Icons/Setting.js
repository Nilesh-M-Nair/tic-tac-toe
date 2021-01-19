import React from 'react';
import {IconContext} from 'react-icons'
import {MdSettings} from 'react-icons/md'


const customStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius : '50px',
  boxShadow : '1px 1px 10px grey',
  padding: '2px'
};

function Zero({setSize}){
    return(
        <span style={customStyles} >
         <svg width={setSize? setSize :25} height={setSize? setSize :25}>
         ------------------------------- // add linearGradient
        <defs>
          <linearGradient id="settingGradient" gradientTransform="rotate(-40)">
            <stop offset="0%" stopColor="#276cf5" />
            <stop offset="40%"  stopColor="#27e9f7" />
          </linearGradient>
        </defs>
          --------------------------------------- //pass attr to react icon
        <IconContext.Provider value={{ attr: {fill: "url('#settingGradient')"}}}>
          <MdSettings size={setSize? setSize :25} />
        </IconContext.Provider>
      </svg>
        </span>
    )
}

export default Zero;