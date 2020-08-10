import * as React from "react";
import {ImageContainer} from './_style';
import gsap, { Sine,Linear,Power4 } from 'gsap';




const Images = ({
    page,
    imageprop
    })=>{
    const tl = gsap.timeline();
    const [images,setImages] = React.useState(imageprop)

    React.useEffect(
		() => {
            if(page!==0){
                tl.to(['.imageA','.imageB'], 0.5, {
                    height:0,
                    ease: Sine.easeIn,	
                })
                .add(function(){setImages(imageprop)})
                .to(['.imageA','.imageB'], 0.5, {
                    height:'45%',
                    delay:1,
                    ease: Sine.easeIn,	
                })
            }else{
                tl.to(['.imageA','.imageB'], 0.5, {
                    height:'45%',
                    delay:1,
                    ease: Sine.easeIn,	
                },"-=0.3")
            }
		},
		[page],
    );
        const onMouseEnterHandlerA =()=>{
            tl.to('.bannerA', 0.3, {
                    clipPath:'circle(100%)',
                    ease: Sine.easeIn,	
                })
        }

         const onMouseLeaveHandlerA =()=>{
            tl.to('.bannerA', 0.3, {
                    clipPath:'circle(0px)',
                    ease: Sine.easeIn,	
                })
        }

         const onMouseEnterHandlerB =()=>{
            tl.to('.bannerB', 0.3, {
                    clipPath:'circle(100%)',
                    ease: Sine.easeIn,	
                })
        }

         const onMouseLeaveHandlerB =()=>{
            tl.to('.bannerB', 0.3, {
                    clipPath:'circle(0px)',
                    ease: Sine.easeIn,	
                })
        }
	return (
		<ImageContainer  
            backgroundA={images[0]} 
            backgroundB={images[1]} 
        >
            <div 
                onMouseEnter={onMouseEnterHandlerA} 
                onMouseLeave={onMouseLeaveHandlerA} 
                className="imageA"
                >
                <div className="bannerA"/>
                
            </div>
            <div 
                onMouseEnter={onMouseEnterHandlerB} 
                onMouseLeave={onMouseLeaveHandlerB} 
                className="imageB"
            >
                <div className="bannerB"/>
               
            </div>
        </ImageContainer>
	);
}



export default Images;