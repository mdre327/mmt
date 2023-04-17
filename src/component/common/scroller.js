import React from 'react'

function Scroller({data}) {
  const scrollLeft=()=>{
    let el= document.getElementById('scroll')
sideScroll(el,"left",30,100,10)
  }
  const scrollRight=()=>{
    let el= document.getElementById('scroll')
sideScroll(el,"right",10,100,10)
  }
  function sideScroll(element,direction,speed,distance,step){
    let scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}
  return (
    <div className='scroll'>
        <button onClick={scrollLeft} className='scroll-left'></button>
            <div className='scroll-rateContainer' id='scroll'>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, Aede16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, Apsdr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, Aprsd 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, Aepr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, fAdpr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, cApr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, nApr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, wApr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, kApr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, lpr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, xApr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, zApr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, aApr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, qrApr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>
                <div className='scroller-item'>
                <p class="scroll-item--font">Sun, rApr 16</p>
                <p className='scroll-item--font-nobold'>₹ 21,145</p>
                </div>

            </div>
            <button onClick={scrollRight} className='scroll-right'></button>
    </div>
  ) 
}

export default Scroller