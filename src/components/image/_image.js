import * as React from "react";
import {ImageContainer} from './_style';
import gsap, { Sine,Linear,Power4 } from 'gsap';

const Images = ({
    page,
    })=>{
    const tl = gsap.timeline();

    const onclick = () =>{
        tl.to('.imageA', 0.5, {
			height:0,
			ease: Sine.easeIn,	
		}).to('.imageB', 0.5, {
			height:0,
			ease: Sine.easeIn,	
		},"-=0.3")
    };
    
        
	return (
		<ImageContainer onClick={onclick}>
            <div className="imageA"></div>
            <div className="imageB"></div>
        </ImageContainer>
	);
}

export default Images;