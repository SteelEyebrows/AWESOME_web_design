import * as React from "react";
import {FlipContainer} from './_style';
import gsap, { Sine,Linear,Power4 } from 'gsap';

// https://codepen.io/colloque/pen/NxwmQE
// https://stackoverflow.com/questions/30362883/sorting-a-document-getelementsbyclassname
const Flip = ({
    page,
    titleprop
    })=>{

    const [title,setTitle] = React.useState(titleprop)
    const tl = gsap.timeline();


    React.useEffect(
		() => {
            const cardElement = document.getElementsByClassName("card");
            var convertedArr = [].slice.call(cardElement);
            convertedArr.sort(function(){return 0.5-Math.random()});

           

            if(page!==0){
                tl
                .to('#left', 1, {
                    rotation: '+=180', 
                    transformOrigin: '0% 120%'
                })
                .to('#right', 1, {
                    rotation: '+=180', 
                    transformOrigin: '120% 0%'
                }, "-=1")
                .add(function(){setTitle(titleprop)})
                .to('#left', 1, {
                    rotation: '+=180', 
                    transformOrigin: '0% 120%',
                    delay:1
                })
                .to('#right', 1, {
                    rotation: '+=180', 
                    transformOrigin: '120% 0%'
                }, "-=1");
            }

             tl.to(convertedArr, 0.8, {
                rotationY: "+=360",
                transformOrigin: 'center',
                ease: Sine.easeIn,
                stagger: 0.2,	
            });
		},
		[page],
    );    
        
	return (
        <FlipContainer onClick={onclick}>
            <div className="flip">
            {
            [...title].map((char,i) => 
            <div className="card" id={i<(title.length/2)?"left":"right"}>{char}</div>)                       
            }
            </div>
        </FlipContainer>

	);
}

export default Flip;

