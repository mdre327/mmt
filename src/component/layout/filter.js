import React, { useState } from "react";
import "./filter.css";
function Filter() {
  const [show, setShow] = useState(false);
  return (
    <div className="filter">
      <div class="filtersOuter">
        <p class="filtersHeading appendBottom15">Popular Filters</p>
        <div>
          <div class="makeFlex spaceBetween appendBottom12">
            <label class="checkboxContainer ">
              <span class="commonCheckbox sizeSm primaryCheckbox">
                <input
                  id="listingFilterCheckbox"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  value="false"
                />
                <span class="box ">
                  <span class="check"></span>
                </span>
              </span>
              <div class="checkboxContent">
                <p class="checkboxTitle">Afternoon Departure (23) </p>
              </div>
            </label>
            <span class="appendLeft5">₹ 15,732</span>
          </div>
          <div class="makeFlex spaceBetween appendBottom12">
            <label class="checkboxContainer ">
              <span class="commonCheckbox sizeSm primaryCheckbox">
                <input
                  id="listingFilterCheckbox"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  value="false"
                />
                <span class="box ">
                  <span class="check"></span>
                </span>
              </span>
              <div class="checkboxContent">
                <p class="checkboxTitle">IndiGo (30) </p>
              </div>
            </label>
            <span class="appendLeft5">₹ 17,134</span>
          </div>
          <div class="makeFlex spaceBetween appendBottom12">
            <label class="checkboxContainer ">
              <span class="commonCheckbox sizeSm primaryCheckbox">
                <input
                  id="listingFilterCheckbox"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  value="false"
                />
                <span class="box ">
                  <span class="check"></span>
                </span>
              </span>
              <div class="checkboxContent">
                <p class="checkboxTitle">Vistara (1) </p>
              </div>
            </label>
            <span class="appendLeft5">₹ 27,202</span>
          </div>
          <div class="makeFlex spaceBetween appendBottom12">
            <label class="checkboxContainer ">
              <span class="commonCheckbox sizeSm primaryCheckbox">
                <input
                  id="listingFilterCheckbox"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  value="false"
                />
                <span class="box ">
                  <span class="check"></span>
                </span>
              </span>
              <div class="checkboxContent">
                <p class="checkboxTitle">Air India (1) </p>
              </div>
            </label>
            <span class="appendLeft5">₹ 23,245</span>
          </div>
          <div class="collapse show">
            {show && (
              <>
                <div class="makeFlex spaceBetween appendBottom12">
                  <label class="checkboxContainer ">
                    <span class="commonCheckbox sizeSm primaryCheckbox">
                      <input
                        id="listingFilterCheckbox"
                        type="checkbox"
                        name="listingFilterCheckbox"
                        value="false"
                      />
                      <span class="box ">
                        <span class="check"></span>
                      </span>
                    </span>
                    <div class="checkboxContent">
                      <p class="checkboxTitle">SpiceJet (10) </p>
                    </div>
                  </label>
                  <span class="appendLeft5">₹ 15,732</span>
                </div>
                <div class="makeFlex spaceBetween appendBottom12">
                  <label class="checkboxContainer ">
                    <span class="commonCheckbox sizeSm primaryCheckbox">
                      <input
                        id="listingFilterCheckbox"
                        type="checkbox"
                        name="listingFilterCheckbox"
                        value="false"
                      />
                      <span class="box ">
                        <span class="check"></span>
                      </span>
                    </span>
                    <div class="checkboxContent">
                      <p class="checkboxTitle">Go First (9) </p>
                    </div>
                  </label>
                  <span class="appendLeft5">₹ 15,965</span>
                </div>
                <div class="makeFlex spaceBetween appendBottom12">
                  <label class="checkboxContainer ">
                    <span class="commonCheckbox sizeSm primaryCheckbox">
                      <input
                        id="listingFilterCheckbox"
                        type="checkbox"
                        name="listingFilterCheckbox"
                        value="false"
                      />
                      <span class="box ">
                        <span class="check"></span>
                      </span>
                    </span>
                    <div class="checkboxContent">
                      <p class="checkboxTitle">AirAsia (10) </p>
                    </div>
                  </label>
                  <span class="appendLeft5">₹ 15,733</span>
                </div>
                <div class="makeFlex spaceBetween appendBottom12">
                  <label class="checkboxContainer ">
                    <span class="commonCheckbox sizeSm primaryCheckbox">
                      <input
                        id="listingFilterCheckbox"
                        type="checkbox"
                        name="listingFilterCheckbox"
                        value="false"
                      />
                      <span class="box ">
                        <span class="check"></span>
                      </span>
                    </span>
                    <div class="checkboxContent">
                      <p class="checkboxTitle">Late Departures (11) </p>
                    </div>
                  </label>
                  <span class="appendLeft5">₹ 15,733</span>
                </div>
                <div class="makeFlex spaceBetween appendBottom12">
                  <label class="checkboxContainer ">
                    <span class="commonCheckbox sizeSm primaryCheckbox">
                      <input
                        id="listingFilterCheckbox"
                        type="checkbox"
                        name="listingFilterCheckbox"
                        value="false"
                      />
                      <span class="box ">
                        <span class="check"></span>
                      </span>
                    </span>
                    <div class="checkboxContent">
                      <p class="checkboxTitle">1 Stop (52) </p>
                    </div>
                  </label>
                  <span class="appendLeft5">₹ 15,732</span>
                </div>
                <div class="makeFlex spaceBetween appendBottom12">
                  <label class="checkboxContainer ">
                    <span class="commonCheckbox sizeSm primaryCheckbox">
                      <input
                        id="listingFilterCheckbox"
                        type="checkbox"
                        name="listingFilterCheckbox"
                        value="false"
                      />
                      <span class="box ">
                        <span class="check"></span>
                      </span>
                    </span>
                    <div class="checkboxContent">
                      <p class="checkboxTitle">Refundable Fares (61) </p>
                    </div>
                  </label>
                  <span class="appendLeft5">₹ 15,732</span>
                </div>
              </>
            )}
          </div>
          <p class="appendBottom15">
            <span class="linkText pointer" onClick={() => setShow(!show)}>
              {show ? "Show Less" : "+6"} more
            </span>
          </p>
        </div>
      </div>
      <div class="filtersOuter">
        <p class="filtersHeading appendBottom15">One Way Price</p>
        <div>
          <div class="filtersOuter mapSlider">
            <div
              class="rangeslider rangeslider-horizontal"
              aria-valuemin="16000"
              aria-valuemax="37600"
              aria-valuenow="37600"
              aria-orientation="horizontal"
            >
              <div class="rangeslider__fill" style={{width: "253px"}}></div>
              <div
                class="rangeslider__handle"
                tabindex="0"
                style={{left: "253px"}}
              >
                <div class="rangeslider__handle-label"></div>
              </div>
              <ul class="rangeslider__labels"></ul>
            </div>
            <div class="makeFlex spaceBetween darkText">
              <span>₹15,732 </span>
              <span>₹37,600</span>
            </div>
          </div>
        </div>
      </div>
      <div class="filtersOuter">
        <p class="filtersHeading appendBottom15">Select Airline</p>
        <div>
          <div class="makeFlex spaceBetween appendBottom12">
            <label class="checkboxContainer ">
              <span class="commonCheckbox sizeSm primaryCheckbox">
                <input
                  id="listingFilterCheckbox"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  value="false"
                />
                <span class="box ">
                  <span class="check"></span>
                </span>
              </span>
              <div class="checkboxContent">
                <p class="checkboxTitle">1 Stop (52) </p>
              </div>
            </label>
            <span class="appendLeft5">₹ 15,732</span>
          </div>
          <div class="makeFlex spaceBetween appendBottom12">
            <label class="checkboxContainer ">
              <span class="commonCheckbox sizeSm primaryCheckbox">
                <input
                  id="listingFilterCheckbox"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  value="false"
                />
                <span class="box ">
                  <span class="check"></span>
                </span>
              </span>
              <div class="checkboxContent">
                <p class="checkboxTitle">1+ Stop (9) </p>
              </div>
            </label>
            <span class="appendLeft5">₹ 17,066</span>
          </div>
        </div>
      </div>
      <div class="filtersOuter">
        <p class="filtersHeading appendBottom15">Popular Filters</p>
        <div>
          <div class="makeFlex spaceBetween appendBottom12">
            <label class="checkboxContainer ">
              <span class="commonCheckbox sizeSm primaryCheckbox">
                <input
                  id="listingFilterCheckbox"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  value="false"
                />
                <span class="box ">
                  <span class="check"></span>
                </span>
              </span>
              <div class="checkboxContent">
                <p class="checkboxTitle">Afternoon Departure (23) </p>
              </div>
            </label>
            <span class="appendLeft5">₹ 15,732</span>
          </div>
          <div class="makeFlex spaceBetween appendBottom12">
            <label class="checkboxContainer ">
              <span class="commonCheckbox sizeSm primaryCheckbox">
                <input
                  id="listingFilterCheckbox"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  value="false"
                />
                <span class="box ">
                  <span class="check"></span>
                </span>
              </span>
              <div class="checkboxContent">
                <p class="checkboxTitle">IndiGo (30) </p>
              </div>
            </label>
            <span class="appendLeft5">₹ 17,134</span>
          </div>
          <div class="makeFlex spaceBetween appendBottom12">
            <label class="checkboxContainer ">
              <span class="commonCheckbox sizeSm primaryCheckbox">
                <input
                  id="listingFilterCheckbox"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  value="false"
                />
                <span class="box ">
                  <span class="check"></span>
                </span>
              </span>
              <div class="checkboxContent">
                <p class="checkboxTitle">Vistara (1) </p>
              </div>
            </label>
            <span class="appendLeft5">₹ 27,202</span>
          </div>
          <div class="makeFlex spaceBetween appendBottom12">
            <label class="checkboxContainer ">
              <span class="commonCheckbox sizeSm primaryCheckbox">
                <input
                  id="listingFilterCheckbox"
                  type="checkbox"
                  name="listingFilterCheckbox"
                  value="false"
                />
                <span class="box ">
                  <span class="check"></span>
                </span>
              </span>
              <div class="checkboxContent">
                <p class="checkboxTitle">Air India (1) </p>
              </div>
            </label>
            <span class="appendLeft5">₹ 23,245</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
