import React from "react";

function FlightDetail({img,flightName,FlightDetails,arr,dep,price}) {
  return (
    <div className="listingCard">
      <div className="makeFlex-spaceBetween">
        <div className="flexonly">
          <div
            className="lockPriceWrapper"
            style={{backgroundColor: 'rgb(224, 249, 255)',borderColor: 'rgb(138, 205, 255)'}}
          >
            <span
              className="icoFD"
              style={{backgroundImage: 'url("https://imgak.mmtcdn.com/flights/assets/media/dt/common/farelock/fl_small_blue_plain_lock.png")'}}
            ></span>
            <p className="icoText">
              <font color="#000000">Lock This Price</font>
            </p>
            <span className="info">
              i
            </span>
          </div>
        </div>
        <div className="otpTag">
          <span
            className="otpIcon"
            style={{backgroundImage: 'url("https://imgak.mmtcdn.com/flights/assets/media/dt/common/otp/otp_icon.png")'}}
          ></span>
          <span className="otp-text">
            <font color="#9b9b9b"> 93% on time</font>
            <span
              className="otpInfoIcon"
              style={{color: 'rgb(36, 153, 149)', borderColor: 'rgb(36, 153, 149)'}}
            >
              i
            </span>
          </span>
          {/* <div
            className="otpTagTooltip"
            style="background-color: rgb(36, 153, 149);"
          >
            <p className="fontSize16 boldFont appendBottom10">
              <font color="#ffffff">This flight is almost always on time!</font>
            </p>
            <p className="appendBottom15">
              Data from the past 15 days shows that this flight almost always
              runs on schedule.
            </p>
            <p className="fontSize12 lessIntentText">
              We still recommend that you check the latest flight status with
              the airline directly on the day of travel.
            </p>
          </div> */}
        </div>
      </div>
      <div className="flexonly">
        <div
          className="airline-info-wrapper"
          style={{marginTop: "-7px"}}
        >
          <span className="gap">
            <span
              className="arln-logo logo1"
              style={{backgroundImage: `url("${img}")`}}
            ></span>
          </span>
          <div className="m0">
            <p className="airlineName">{flightName}</p>
            <p className="fliCode">{FlightDetails}</p>
          </div>
        </div>
        <div className="timingOptionOuter">
          <label
            className="not-radio checked"
            for="jrnyKey_0_22_RKEY:d6858311-dd0e-405a-beee-b415d8748b98:1_0"
            style={{cursor: 'default'}}
          >
            <div className="timingOption">
              <div className="flexonly">
                <div className="fx gap-x-10">
                  <div className="flexOne timeInfoLeft">
                    <p className="appendBottom2 flightTimeInfo">
                      <span>{dep}</span>
                    </p>
                    <p className="blackText">
                      <font color="#000000">New Delhi</font>
                    </p>
                  </div>
                  <div className="stop-info flexOne">
                    <p>
                      04<font color="#757575"> h </font>45
                      <font color="#757575"> m </font>
                    </p>
                    <div>
                      <div className="relative fliStopsSep">
                        <p
                          className="fliStopsSepLine"
                          style={{borderYop: '3px solid rgb(245, 166, 34)'}}
                        ></p>
                        <span className="fliStopsDisc"></span>
                      </div>
                      <p className="flightsLayoverInfo">1 stop via Amritsar</p>
                    </div>
                  </div>
                  <div className="flexOne timeInfoRight">
                    <p className="appendBottom2 flightTimeInfo">
                      <span>{arr}</span>
                    </p>
                    <p className="blackText">
                      <font color="#000000">Bombay</font>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
        <div className="flexOne"></div>
        <div className="priceSection">
          <div className="fx2 gap-x-10">
            <div className="tr" style={{marginTop: '-5px'}}>
              <p className="tr-text">
                ₹ {price}
              </p>
            </div>
            <button
              id="bookbutton-RKEY:d6858311-dd0e-405a-beee-b415d8748b98:1_0"
              className="ViewFareBtn  text-uppercase "
              style={{marginTop:'0.9rem !important'}}
            >
              <span className="a8">View Prices</span>
              <span className="customArrow arrowDown"></span>
            </button>
          </div>
        </div>
      </div>
      <p
        className="alertMsg appendBottom10 appendTop10"
        style={{backgroundColor: 'rgb(255, 237, 209)', minHeight: "22px"}}
      >
        Get Rs 251 off using MMTSUPER
      </p>
      <div className="makeFlex spaceBtwCenter fontSize12 card-footer-v2">
        <div></div>
        <span className="linkText ctaLink">View Flight Details</span>
      </div>
    </div>
  );
}

export default FlightDetail;
