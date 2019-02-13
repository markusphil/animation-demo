import React from 'react';
import {CloseIcon} from '../graphics/close';


export const InfoBox = (props) => (
    <div className="info-box">
        <div className="info-head">
            <h3>Move your cursor over the objects to trigger animations.</h3>
            <button className="close-btn" onClick={props.close}>
                <CloseIcon width="20px"/>
            </button> 
        </div>
        <div className="info-body">
        <p><strong>Attention:</strong>This Demo is developed for desktop mouse-hover-events so it won't work properly on touchscreen devices, sorry!</p>
        </div>
        
           
    </div>
    
    )
    

