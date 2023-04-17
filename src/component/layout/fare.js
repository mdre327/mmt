import React from "react";

function Fare() {
  return (
    <div className="fare">
      <div className="fareTypeWrapper">
        <div className=" farefContainer">
          <span className="fare-text">
            Fare Type:
          </span>
          <ul className="fare-list">
            <li className="fare-list--item">
            <label class="radio">
                <input type="radio" name="fare"/>
                <span class="radio-btn"></span>
                Option 1
                </label>
            </li>
            <li className="fare-list--item">
            <label class="radio">
                <input type="radio" name="fare"/>
                <span class="radio-btn"></span>
                Option 2
                </label>
            </li>
            <li className="fare-list--item">
            <label class="radio">
                <input type="radio" name="fare"/>
                <span class="radio-btn"></span>
                Option 3
                </label>
            </li>
            <li className="fare-list--item">
            <label class="radio">
                <input type="radio" name="fare"/>
                <span class="radio-btn"></span>
                Option 4
                </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Fare;
