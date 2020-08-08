import * as React from "react";
import {CircleContainer} from './_style';
import gsap, { Sine,Linear,Power4 } from 'gsap';
// https://stackoverflow.com/questions/55004822/css-animation-not-in-60fps
const Circle = ({
    page,
    })=>{
    const tl = gsap.timeline();

    const onclick = () =>{
        tl
        .to(['.first','.second'], 0.3, {
            opacity:1,
			scale:100,
			ease: Sine.easeIn,	
            stagger: 0.5,	
		})
        .to('.first', 1, {
            scale:1,
			ease: Sine.easeIn,	
		})
        .to('.second', 1, {
            scale:1,
            opacity:0,
			ease: Sine.easeIn,	
		})
        .to('.first', 0.3, {
            opacity:1,
			scale:10,
			ease: Sine.easeIn,	
		})
        // .to('.third', 0.3, {
        //     opacity:1,
        //     scale:10,
		// 	ease: Sine.easeIn,	
		// })
        
    };
    
    React.useEffect(
		() => {
		tl
        .to('.first', 0.3, {
            opacity:1,
			scale:10,
			ease: Sine.easeIn,	
		})
		},
		[ ],
    );
        
	return (
		<CircleContainer onClick={onclick}>
            <div className="circle first"></div>
            <div className="circle second"></div>
            <div className="circle third"></div>
        </CircleContainer>
	);
}

export default Circle;