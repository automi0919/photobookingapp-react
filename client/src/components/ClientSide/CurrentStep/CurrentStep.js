import React from 'react';
import "./styles.css";

export function CurrentStep(props) {
    return (
        <div className="current-step-wrapper">
            <div className="step active">1</div>
            <div className="step">2</div>
            <div className="step">3</div>
            <div className="step">4</div>
            <div className="step">5</div>
            <div className="step">6</div>
        </div>
    )
}