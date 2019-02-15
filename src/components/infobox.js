import React from 'react';
import {CloseIcon} from '../graphics/close';


export const InfoBox = (props) => (
    <div className="info-box">
        <div className="info-head">
            <h3>Move your cursor over the objects.</h3>
            <button className="close-btn" onClick={props.close}>
                <CloseIcon width="20px"/>
            </button> 
        </div>
        <div className="info-body">
        <p><strong>Attention:</strong> This demo is developed for desktop mouse-events and won't work properly with touchscreen input!</p>
        </div>
        
           
    </div>
    
    )
    

