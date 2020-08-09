import * as React from "react";
import {CircleContainer} from './_style';
import gsap, { Elastic,Linear,Power4 } from 'gsap';
// https://stackoverflow.com/questions/55004822/css-animation-not-in-60fps
const Circle = ({
    page,
    })=>{
    const tl = gsap.timeline();
    
    React.useEffect(
		() => {
        if(page!==0){
            tl
            .to(['.first','.second'], 0.3, {
                opacity:1,
                scale:150,
                ease: Elastic.easeIn,	
                stagger: 0.5,	
            })
            .to('.first', 1, {
                scale:1,
                ease: Elastic.easeIn,	
            })
            .to('.second', 1, {
                scale:1,
                opacity:0,
                ease: Elastic.easeIn,	
            })
        }
		tl
        .to('.first', 0.3, {
            opacity:1,
			scale:10,
			ease: Elastic.easeIn,	
		});
		},
		[page],
    );
        
	return (
		<CircleContainer>
            <div className="circle first"></div>
            <div className="circle second"></div>
            <div className="circle third"></div>
        </CircleContainer>
	);
}

export default Circle;