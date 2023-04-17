import React from "react";
import "./main.css";
import SearchBar from "../layout/searchBar";
import Fare from "../layout/fare";
import Scroller from "../common/scroller";
import Filter from "../layout/filter";
import FlightDetail from "../layout/flightDetail";
import { FD } from "../util/data";
import Ad from "../layout/ad";
import Header from "../layout/header";

export default function Main() {
  return (
    <div>
      <Header/>
      <div className="bar">


      <SearchBar />

      <Fare />
      </div>
      <div className="mmtBody"></div>

      <div className="mmt-container flex x">
        <div className="mmt-filter">
          <Filter />
        </div>
        <div className="mmt-res">
          <h1 className="res-title">Fligts New Delhi To Bombay</h1>
          <div className="container shadow">
            <Scroller />
            <div className="sort">
              <div className="sort-Section" id="sorting-togglers">
                <div className="sort-label">
                  <span className="sort-text">Sorted By:</span>
                  <div
                    className="sortby-dom-sctn "
                    style={{display: 'none'}}
                  >
                    <span className="pointer">
                      <span>Popularity</span>
                    </span>
                  </div>
                </div>
                <div className="sort-item">
                  <div
                    className="sortby-dom-sctn departure_sorter "
                    style={{flex: '1 1 0%', textAlign: 'left'}}
                  >
                    <span className="pointer">
                      <span>Departure</span>
                    </span>
                  </div>
                  <div
                    className="sortby-dom-sctn duration_sorter "
                    style={{flex: '1 1 0%', textAlign: 'center'}}
                  >
                    <span className="pointer">
                      <span>Duration</span>
                    </span>
                  </div>
                  <div
                    className="sortby-dom-sctn arrival_sorter "
                    style={{flex: '1 1 0%' ,position: 'relative', textIndent: '55px'}}
                  >
                    <span className="pointer">
                      <span>Arrival</span>
                    </span>
                  </div>
                </div>
                <div className="flexOne"></div>
                <div className="make-flex sort-price">
                  <div className="sortby-dom-sctn price_sorter  blackFont">
                    <span className="pointer">
                      <span>Price</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {FD.map((item,index)=>{return(
            <>
            <FlightDetail img={item.img} flightName={item.flighName} FlightDetails={item.flightDetail}
            dep={item.dep} arr={item.arr} price={item.price}/>
            {index === index%2 && <Ad/>}
            </>
            )}) }
          </div>
        </div>
      </div>
    </div>
  );
}
