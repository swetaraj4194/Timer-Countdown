import React from "react";
import "../components/CountDown.css";

// Can be improved
const Countdown = () => {
  const countdownTitle = "Countdown";
  const days = 23;
  const hours = 10;
  const minutes = 6;
  const seconds = 14;

  //Calculating phone launching days in milliseconds, I want to launch phone after 23 days

  const twentyThreeDaysInSec = 23 * 24 * 60 * 60;
  const twentyThreeDaysInMSec = twentyThreeDaysInSec * 1000;

  const currentTimeInMs = new Date().getTime();

  const phoneLaunchDateInMs = twentyThreeDaysInMSec + currentTimeInMs;

  console.log("phone launch date", phoneLaunchDateInMs);

  return (
    <div className="vfz-countdown__panel">
      <p className="vfz-countdown__title">{countdownTitle}</p>

      <div v-show="days > 0" className="vfz-countdown__date">
        <div className="vfz-countdown__date-number">{days}</div>
        {days === 1 ? (
          <div className="vfz-countdown__date-name">Day</div>
        ) : (
          <div className="vfz-countdown__date-name">Days</div>
        )}
      </div>

      {days > 0 && <div className="vfz-countdown__colon">:</div>}

      <div className="vfz-countdown__date">
        <div className="vfz-countdown__date-number">{hours}</div>
        {hours === 1 ? (
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
        <div className="vfz-countdown__date-number">{seconds}</div>
        <div className="vfz-countdown__date-name">Sec</div>
      </div>
    </div>
  );
};

export default Countdown;
