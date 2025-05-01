import React from 'react'

const TabButton = ({ active,selectTab,children}) => {
const buttonClasses = active ? "text-white border-b " : " text-[#ADB7BE] ";
  return (
    <button onClick={selectTab} >
      <p className= {` mr-3 font-semibold hover:text-white hover:scale-115 transition-all duration-200  ${buttonClasses}`} >
        {children}
      </p>
    </button>
)
}

export default TabButton