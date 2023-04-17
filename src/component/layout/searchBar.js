import React from "react";
import SearchCard from "../common/searchCard";
const cardData=[
    {
        label:"trip type",
        text:"One Way",
        arrow:true,
        w1:'6.5rem'
    },
    {
        label:"From",
        text:"New Delhi, India",
        arrow:false
    },
    {
        label:"To",
        text:"Bombay, India",
        arrow:false
    },
    {
        label:"Depart",
        text:"Sun, Apr 16, 2023",
        arrow:false
    },
    {
        label:"Return",
        text:"Sat, Apr 17, 2023",
        arrow:false
    },
    {
        label:"Passenger & Class",
        text:"1 Adult, Economy",
        arrow:false
    },
]
function SearchBar() {
  return (
    <div className="search">
        <div className="mmt-container" style={{display:"flex"}}>
        {cardData.map((item) =>{
            return <>
            <SearchCard
            label={item.label}
            text= {item.text}
            arrow={item.arrow}
            w1={item?.w1 ? item.w1 : '12rem'}
            />
            {item.label==='From' && <div><div class="swap-icon marR8"></div></div>}
                </>
        })}
            <button className="search-btn">
                Search
            </button>
            </div>
    </div>

  );
}

export default SearchBar;
