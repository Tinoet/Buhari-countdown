import React, { useEffect, useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  
  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('2023-05-20').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000*60*60*24));
      const hours = Math.floor((distance % (1000*60*60*24) / (1000*60*60)));
      const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      const seconds = Math.floor((distance % (1000*60))/1000);

      if(distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }

    }, 1000)
  }

  useEffect(() => {
    startTimer();
    return() => {
      clearInterval(interval.current)
    }
  })
  
  return (
    <div className="container">
      <div className='row mt-3 text-center'>
        {/* First Section */}
        <div className='text-center m-3'>
          <h4 className='text-center'><span className='text-danger'>BUHARI</span> COUNTDOWN</h4>
          <p className='mt-5'>We count down to the worst leadership that this great nation Nigeria has ever had.</p>
          <p>We count down to <span className='text-warning font-weight-bold'>Thursday, 24 February 2023</span>, when we hope h hands over power, so we can rest, from arson, killings, tyranny, marginalization, bad policies, injustice, and corruption of this government. We hope and pray that his kind never return anymore</p>
          <p className=''>Nigeria deserves better!</p>
        </div>
        <div>

        </div>
      </div>

      <div className='row justify-content-center text-center m-4'>

        <div className='col-sm-2 border m-2 p-2'>
          <h4>{timerDays}</h4>
          <h6><small>Days</small></h6>
        </div>

        <div className='col-sm-2 border m-2 p-2'>
          <h4>{timerHours}</h4>
          <h6><small>Hours</small></h6>
        </div>

        <div className='col-sm-2 border m-2 p-2'>
          <h4>{timerMinutes}</h4>
          <h6><small>Minutes</small></h6>
        </div>

        <div className='col-sm-2 border m-2 p-2'>
          <h4>{timerSeconds}</h4>
          <h6><small>Second</small></h6>
        </div>
      </div>
    </div>
  );
}

export default App;
