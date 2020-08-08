import * as React from "react";
import {FlipContainer} from './_style';
import gsap, { Sine,Linear,Power4 } from 'gsap';

// https://codepen.io/colloque/pen/NxwmQE
// https://stackoverflow.com/questions/30362883/sorting-a-document-getelementsbyclassname
const Flip = ({
    page,
    })=>{
    const tl = gsap.timeline();
    const text = "HELLO WORLD";
    const textLengthCenter = text.length/2;

    const onclick = () =>{
        const cardElement = document.getElementsByClassName("card");
        var convertedArr = [].slice.call(cardElement);
        convertedArr.sort(function(){return 0.5-Math.random()});

		tl.to(convertedArr, 0.8, {
			rotationY: "+=360",
            transformOrigin: 'center',
			ease: Sine.easeIn,
			stagger: 0.2,	
		}).to('#left', 1, {
            rotation: '+=180', 
            transformOrigin: '0% 120%'
        }).to('#right', 1, {
            rotation: '+=180', 
            transformOrigin: '120% 0%'
        }, "-=1").play();
    };
    
        
	return (
		<FlipContainer onClick={onclick}>
         {
           [...text].map((char,i) => 
           <div className="card" id={i<textLengthCenter?"left":"right"}>{char}</div>)                       
         }
        </FlipContainer>
	);
}

export default Flip;