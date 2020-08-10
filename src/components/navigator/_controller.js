import * as React from "react";
import {ControllerContainer} from './_style';
import gsap, { Elastic,Linear,Power4 } from 'gsap';

const Controller = ({
    page,
    pageLength,
    onClickController
    })=>{
 
        
	return (
		<ControllerContainer onClick={onClickController}>
            
                <div className="controller">
                    <div>←</div> 
                    <div>{page}/{pageLength}</div>
                    <div>→</div> 
                </div>
                <div className="shopnow">
                    Shop Now
                </div>
            
        </ControllerContainer>
	);
}

export default Controller;