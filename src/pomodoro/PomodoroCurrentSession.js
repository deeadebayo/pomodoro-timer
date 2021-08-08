import React from 'react';
import { minutesToDuration, secondsToDuration } from "../utils/duration";
import PropTypes from "prop-types";

const PomodoroCurrentSession = ({ session, focusDuration, breakDuration }) => {
    const progressBarDisplay = session?.label === 'Focusing' ? (100 * (focusDuration * 60 - session?.timeRemaining) / (focusDuration * 60)) : (100 * (breakDuration * 60 - session?.timeRemaining) / (breakDuration * 60))

    if (!session) return null
    return (
        <>
            <div className="row mb-2">
                <div className="col">
                    <h2 data-testid="session-title">
                        {session?.label} for {session.label === 'Focusing' ? minutesToDuration(focusDuration) : minutesToDuration(breakDuration)} minutes
                    </h2>
                    <p className="lead" data-testid="session-sub-title">
                        {session ? secondsToDuration(session?.timeRemaining) + ` remaining` : `Let's get to work. Start the timer!`}
                    </p>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <div className="progress" style={{ height: "20px" }}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow={progressBarDisplay}
                            style={{ width: `${progressBarDisplay}%` }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

PomodoroCurrentSession.propTypes = {
    session: PropTypes.object,
    focusDuration: PropTypes.number,
    breakDuration: PropTypes.number,
}

export default PomodoroCurrentSession