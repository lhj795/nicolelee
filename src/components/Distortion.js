import React from 'react';
import { DistortionText } from 'react-text-fun';
import './../App.css'

export default function Distortion(props) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'ABCArizonaPlusVariable', backgroundColor: 'black'}}>
            <DistortionText
                text={props.text}
                fill='white'
                speed={0.5}
                rotation={45.0}
                distortX={1}
                distortY={1}
                noiseAmplitude={0.05}
            />
        </div>
    )
}