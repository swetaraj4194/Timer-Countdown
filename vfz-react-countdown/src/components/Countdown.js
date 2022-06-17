import React from "react";
import "../components/CountDown.css";
import { useEffect, useState } from "react";

// Can be improved
const Countdown = () => {
  const countdownTitle = "Countdown to Launch!!";
  // const days = 23;
  // const hours = 10;
  // const minutes = 6;
  // const seconds = 14;

  //Calculating phone launching days in milliseconds, I want to launch phone after 23 days
  const twentyThreeDaysInSec = 23 * 24 * 60 * 60;
  const twentyThreeDaysInMSec = twentyThreeDaysInSec * 1000;
  const currentTimeInMs = new Date().getTime();
  const phoneLaunchDateInMs = twentyThreeDaysInMSec + currentTimeInMs;
  //console.log("phone launch date in ms", phoneLaunchDateInMs);


  // Caluclating launching time duration
  const [timeDuration, setTimeDuration] = useState(
    phoneLaunchDateInMs - new Date().getTime()
  );
  //console.log("timeDuration", timeDuration);


  //Triggering countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDuration(phoneLaunchDateInMs - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  //Calculating how much time left to launching phone in the form of(days,hours,minutes and seconds)
  const days = Math.floor(timeDuration / (1000 * 60 * 60 * 24));
  //console.log("Days left", days);

  const hours = Math.floor(
    (timeDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  //console.log("Hours left", hours);

  const minutes = Math.floor((timeDuration % (1000 * 60 * 60)) / (1000 * 60));
  //console.log("Minutes left", minutes);

  const seconds = Math.floor((timeDuration % (1000 * 60)) / 1000);
  //console.log("Seconds left", seconds);

  return (
    <div className="container">
      <h1 className="vfz-countdown__title">{countdownTitle}</h1>
      {days + hours + minutes + seconds <= 0 ? (
        <div className="text">No offer!!</div>
      ) : (
        <div className="vfz-countdown__panel">
          <div v-show="days > 0" className="vfz-countdown__date">
            <div className="vfz-countdown__date-number1">{days}</div>
            {days === 1 || days === 0 ? (
              <div className="vfz-countdown__date-name">Day</div>
            ) : (
              <div className="vfz-countdown__date-name">Days</div>
            )}
          </div>

          {days > 0 && <div className="vfz-countdown__colon">:</div>}
          <div className="vfz-countdown__colon">:</div>

          <div className="vfz-countdown__date">
            <div className="vfz-countdown__date-number">{hours}</div>
            {hours === 1 || hours === 0 ? (
              <div className="vfz-countdown-date__name">Hour</div>
            ) : (
              <div className="vfz-countdown__date-name">Hours</div>
            )}
          </div>

          <div className="vfz-countdown__colon">:</div>

          <div className="vfz-countdown__date">
            <div className="vfz-countdown__date-number">{minutes}</div>
            <div className="vfz-countdown__date-name">Min</div>
          </div>

          <div className="vfz-countdown__colon">:</div>

          <div className="vfz-countdown__date">
            <div className="vfz-countdown__date-number2">{seconds}</div>
            <div className="vfz-countdown__date-name">Sec</div>
          </div>
        </div>
      )}
      <p>Are you ready?</p>

      <div>
        <video autoPlay muted loop id="myVideo">
          <source
            src="https://media.istockphoto.com/videos/green-screen-rotating-modern-mobile-smart-phone-mockup-with-video-id1292434403"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Countdown;
