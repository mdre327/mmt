import React from "react";
import "./fare.css"
function Fare() {
  return (
    <div className="fareTypeWrapper">
      <div className=" flightsContainer makeFlex hrtlCenter ">
    <span className="lighterGreyText boldFont fontSize12 appendRight10">Fare Type:</span>
    <ul className="fareTypeOptions">
      <li className="active false">
        <span className="radioSelect"></span>
        <span className="appendLeft7">Regular</span>
      </li>
      <li className=" false">
        <span className="radioSelect"></span>
        <span className="appendLeft7">Armed Forces</span>
        <div className="fareOptionTooltip">
          <div className="makeFlex hrtlCenter whiteText boldFont appendBottom5">
            <span
              className="bgProperties icon20 appendRight5"
              style={{backgroundImage:' url("https://imgak.mmtcdn.com/flights/assets/media/dt/fare_type/armedForcesIcon.png")'}}
            ></span>
            Armed Forces Fare
          </div>
          <p>
            Applicable for serving and retired personnel of Armed Forces and
            Paramilitary Forces, their recognised dependants like spouses and
            children, and war widows. It is mandatory to show a valid ID or
            dependant card at the airport, without which boarding might be
            denied.
          </p>
        </div>
      </li>
      <li className=" false">
        <span className="radioSelect"></span>
        <span className="appendLeft7">Student</span>
        <div className="fareOptionTooltip">
          <div className="makeFlex hrtlCenter whiteText boldFont appendBottom5">
            <span
              className="bgProperties icon20 appendRight5"
              style={{backgroundImage: 'url("https://imgak.mmtcdn.com/flights/assets/media/dt/fare_type/studentFareIcon.png")' }}
            ></span>
            Student Fare
          </div>
          <p>
            Only students above 12 years of age are eligible for special fares
            and/or additional baggage allowances. Carrying valid student ID
            cards and student visas (where applicable) is mandatory, else the
            passenger may be denied boarding or asked to pay for extra baggage.{" "}
          </p>
        </div>
      </li>
      <li className=" false">
        <span className="radioSelect"></span>
        <span className="appendLeft7">Senior Citizen</span>
        <div className="fareOptionTooltip">
          <div className="makeFlex hrtlCenter whiteText boldFont appendBottom5">
            <span
              className="bgProperties icon20 appendRight5"
              style={{backgroundImage: 'url("https://imgak.mmtcdn.com/flights/assets/media/dt/fare_type/seniorCitizenIcon.png")'}}
            ></span>
            Senior Citizen Fare
          </div>
          <p>
            Only senior citizens above the age of 60 years can avail this
            special fare. It is mandatory to produce proof of Date of Birth at
            the airport, without which prevailing fares will be charged.
          </p>
        </div>
      </li>
      <li className=" false">
        <span className="radioSelect"></span>
        <span className="appendLeft7">Doctors &amp; Nurses</span>
        <div className="fareOptionTooltip">
          <div className="makeFlex hrtlCenter whiteText boldFont appendBottom5">
            <span className="bgProperties icon20 appendRight5"></span>Doctors &amp;
            Nurses Fare
          </div>
          <p>
            Applicable only for medical personnel. It is mandatory to show a
            valid ID at the airport, without which boarding may be denied.
          </p>
        </div>
      </li>
      <li className=" false">
        <span className="radioSelect"></span>
        <span className="appendLeft7">Double Seat</span>
        <div className="fareOptionTooltip">
          <div className="makeFlex hrtlCenter whiteText boldFont appendBottom5">
            <span
              className="bgProperties icon20 appendRight5"
              style={{backgroundImage:' url("https://imgak.mmtcdn.com/flights/assets/media/dt/fare_type/doubleSeatIcon.png")'}}
            ></span>
            Fly Safer with Double Seat
          </div>
          <p>
            Step up physical distancing by booking two or three adjacent seats
            for one traveller. Opt from ‘Double/ Entire Row’ by Indigo or
            ‘GoMore’ service by GoAir - available only for domestic one-way
            economy class bookings.
          </p>
        </div>
      </li>
    </ul>
    </div>
    </div>
    
  );
}

export default Fare;
