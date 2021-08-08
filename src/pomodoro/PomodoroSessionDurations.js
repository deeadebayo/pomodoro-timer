import React from 'react';
import { minutesToDuration } from "../utils/duration";

const PomodoroSessionDurations = ({ session, focusDuration, breakDuration, handleTimerAdjust }) => (
    <div className="row">
        <div className="col">
            <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-focus">
                    Focus Duration: {minutesToDuration(focusDuration)}
                </span>
                <div className="input-group-append">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-testid="decrease-focus"
                        onClick={() => !session ? handleTimerAdjust('focus', 'decrease') : null}
                    >
                        <span className="oi oi-minus" />
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-testid="increase-focus"
                        onClick={() => !session ? handleTimerAdjust('focus', 'increase') : null}
                    >
                        <span className="oi oi-plus" />
                    </button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="float-right">
                <div className="input-group input-group-lg mb-2">
                    <span className="input-group-text" data-testid="duration-break">
                        Break Duration: {minutesToDuration(breakDuration)}
                    </span>
                    <div className="input-group-append">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-testid="decrease-break"
                            onClick={() => !session ? handleTimerAdjust('break', 'decrease') : null}
                        >
                            <span className="oi oi-minus" />
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-testid="increase-break"
                            onClick={() => !session ? handleTimerAdjust('break', 'increase') : null}
                        >
                            <span className="oi oi-plus" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default PomodoroSessionDurations