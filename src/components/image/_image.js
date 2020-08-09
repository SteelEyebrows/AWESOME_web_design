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
        
	return (
		<ImageContainer>
            <img src={images} className="imageA" alt="image1"/>
            <img src={images} className="imageB" alt="image2"/>
        </ImageContainer>
	);
}

export default Images;