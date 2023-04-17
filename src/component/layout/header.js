import React, { useEffect, useRef,useState } from "react";
import "./heade.css";
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';


function Header() {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (
        anchorRef.current &&
        anchorRef.current.contains(event.target)
      ) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
  return (
    <>
      <div class="commonHeader">
        <div data-cy="landingContainer" class="singleHeader eng">
          <div class="headerOuter">
            <span class="headerModuleFedTest2"></span>
            <div class="chHeaderWrapper">
              <div class="chHeaderContainer">
                <span class="logoContainer">
                  <a class="chMmtLogo" href="https://www.makemytrip.com/">
                    <img
                      src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
                      alt="MMT's LOGO"
                    />
                  </a>
                </span>
                <nav class="">
                  <ul class="makeFlex font12 mt0">
                    <li data-cy="menu_Flights" class="menu_Flights">
                      <div>
                        <a
                          href="https://www.makemytrip.com/flights/"
                          class="makeFlex hrtlCenter column active"
                        >
                          <span class="chNavIcon appendBottom2 chSprite chFlights active"></span>
                          <span class="chNavText darkGreyText"> Flights </span>
                        </a>
                      </div>
                    </li>
                    <li data-cy="menu_Hotels" class="menu_Hotels">
                      <div>
                        <a
                          href="https://www.makemytrip.com/hotels/"
                          class="makeFlex hrtlCenter column"
                        >
                          <span class="chNavIcon appendBottom2 chSprite chHotels"></span>
                          <span class="chNavText darkGreyText"> Hotels </span>
                        </a>
                      </div>
                    </li>
                    <li data-cy="menu_Homestays" class="menu_Homestays">
                      <div>
                        <a
                          href="https://www.makemytrip.com/homestays/"
                          class="makeFlex hrtlCenter column"
                        >
                          <span class="chNavIcon appendBottom2 chSprite chHomestays"></span>
                          <span class="chNavText darkGreyText">
                            {" "}
                            Homestays{" "}
                          </span>
                        </a>
                      </div>
                    </li>
                    <li
                      data-cy="menu_Holidays"
                      class="menu_Holidays removeItemMargin"
                    >
                      <div>
                        <a
                          href="https://www.makemytrip.com/holidays-india/"
                          class="makeFlex hrtlCenter column"
                        >
                          <span class="chNavIcon appendBottom2 chSprite chHolidays"></span>
                          <span class="chNavText darkGreyText">
                            {" "}
                            Holiday Packages{" "}
                          </span>
                        </a>
                      </div>
                    </li>
                    <li data-cy="menu_Trains" class="menu_Trains">
                      <div>
                        <a
                          href="https://www.makemytrip.com/railways/"
                          class="makeFlex hrtlCenter column"
                        >
                          <span class="chNavIcon appendBottom2 chSprite chTrains"></span>
                          <span class="chNavText darkGreyText"> Trains </span>
                        </a>
                      </div>
                    </li>
                    <li data-cy="menu_Buses" class="menu_Buses">
                      <div>
                        <a
                          href="https://www.makemytrip.com/bus-tickets/"
                          class="makeFlex hrtlCenter column"
                        >
                          <span class="chNavIcon appendBottom2 chSprite chBuses"></span>
                          <span class="chNavText darkGreyText"> Buses </span>
                        </a>
                      </div>
                    </li>
                    <li data-cy="menu_Cabs" class="menu_Cabs">
                      <div>
                        <a
                          href="https://www.makemytrip.com/cabs/"
                          class="makeFlex hrtlCenter column"
                        >
                          <span class="chNavIcon appendBottom2 chSprite chCabs"></span>
                          <span class="chNavText darkGreyText"> Cabs </span>
                        </a>
                      </div>
                    </li>
                    <li data-cy="menu_Forex" class="menu_Forex">
                      <div>
                        <a
                          href="https://www.makemytrip.com/forex/"
                          class="makeFlex hrtlCenter column"
                        >
                          <span class="chNavIcon appendBottom2 chSprite chForex"></span>
                          <span class="chNavText darkGreyText"> Forex </span>
                        </a>
                      </div>
                    </li>
                    <li data-cy="menu_More" class="menu_More moreItem"        
                       ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}>
                      <span class="itemWrapper makeFlex hrtlCenter column moreWrapper">
                        <span class="chNavIcon appendBottom2 chSprite chMore"></span>
                        <span class="chNavText">
                          <span class="darkGreyText"> More </span>
                          <span class="arrow arrowDown"></span>
                        </span>
                      </span>
                      {/* <div class="moreOption font16 latoBold">
                        <a
                          data-cy="submenu_Charters"
                          class="appendBottom5 blackText"
                          href="https://www.makemytrip.com/charter-flights/"
                        >
                          {" "}
                          Charter Flights
                        </a>
                        <a
                          data-cy="submenu_ActivitiesTours"
                          class="appendBottom5 blackText"
                          href="https://www.makemytrip.com/activities/"
                        >
                          {" "}
                          Activities
                        </a>
                        <a
                          data-cy="submenu_TripIdeas"
                          target="_blank"
                          class="appendBottom5 blackText"
                          href="https://www.makemytrip.com/tripideas"
                        >
                          {" "}
                          Where2Go
                        </a>
                        <a
                          data-cy="submenu_Giftcards"
                          class="appendBottom5 blackText"
                          href="https://www.makemytrip.com/gift-cards/"
                        >
                          {" "}
                          Giftcards
                        </a>
                        <a
                          data-cy="submenu_NearbyGetaways"
                          target="_blank"
                          class="appendBottom5 blackText"
                          href="https://www.makemytrip.com/hotels/hotel-listing/?funnelType=getaway&amp;checkin=date_0&amp;checkout=date_1"
                        >
                          {" "}
                          Nearby Getaways
                        </a>
                        <a
                          data-cy="submenu_TripMoney"
                          target="_blank"
                          class="appendBottom5 blackText"
                          href="https://www.bookmyforex.com/?utm_source=makemytrip&amp;utm_medium=activities&amp;utm_campaign=gommt-landing&amp;utm_id=gommt-landing"
                        >
                          {" "}
                          Trip Money
                        </a>
                      </div> */}
                      <div>
                      <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Charter Flights</MenuItem>
                    <MenuItem onClick={handleClose}>Activities</MenuItem>
                    <MenuItem onClick={handleClose}>Where2Go</MenuItem>
                    <MenuItem onClick={handleClose}>Giftcards</MenuItem>
                    <MenuItem onClick={handleClose}>Nearby Getaways</MenuItem>
                    <MenuItem onClick={handleClose}>Trip Money</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
                      </div>

      
     </li>
                  </ul>
                </nav>
                <ul class="makeFlex hrtlCenter font10 blackText">
                  <li class="font12 makeRelative">
                    <div id="loginTrigger" class="makeFlex cursorPointer">
                      <span class="userInfoBoxLabel whiteText appendRight10 font10 latoBlack textCenter">
                        <span class="chSprite chLoggedOutLogo chMy"></span>
                      </span>
                      <div class="makeFlex hrtlCenter">
                        <div
                          data-cy="account"
                          class="makeFlex spaceBetween column"
                        >
                          <span class="latoBold appendBottom2"> Login or </span>
                          <span class="latoBold"> Create Account </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
