import React from 'react'
import timerLine from "../../assets/images/timerLine.png"

const Timer = () => {
  return (
    <>
    <div className='launchTimer'>
        <h2>NEXT LAUNCH:</h2>
        <div className='timerMain'>
          <div className='part days'>
            <div className='line'><img src={timerLine} /></div>
            5
          </div>
          <div className='sepretor'>:</div>
          <div className='part hours'>
            <div className='line'><img src={timerLine} /></div>
            20
          </div>
          <div className='sepretor'>:</div>
          <div className='part minutes'>
            <div className='line'><img src={timerLine} /></div>
            12
          </div>
          <div className='sepretor'>:</div>
          <div className='part seconds'>
            <div className='line'><img src={timerLine} /></div>
            39
          </div>
        </div>
    </div>
    </>
  )
}

export default Timer