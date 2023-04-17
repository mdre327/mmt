import React from 'react'

function SearchCard({label,arrow,text,w1}) {
  return (
    <>
          <div className={`search-card`}
          style={{width:`${w1 ? w1 : '12rem'}`}}>
        <label
          for="tripType"
          className="search-Cardlabel"
        >
          {" "}
          {label}{" "}
        </label>
        <div className="selectDropdown search-cardDD">
          {arrow && (<span className="search-downArrow"></span>)}
          <div className="search-multiDropDownVal">{text}</div>
        </div>
      </div>
    </>
  )
}

export default SearchCard