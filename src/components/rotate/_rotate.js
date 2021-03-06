import * as React from "react";
import {RotateContainer,Sector} from './_style';
import './st.css'

// https://codepen.io/Shaikat/pen/PapGpr
const Rotate = ({})=>{

	return (
		<div>
            <div className="RotateText">
				<svg 
					version="1.1" 
					xmlns="http://www.w3.org/2000/svg" 
					xmlnsXlink="http://www.w3.org/1999/xlink" 
					viewBox="0 0 150 150" 
					xmlSpace="preserve"
				>
					<defs>
					<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
						fill="#000000" stroke="none">
						
						<path id="circlePath" d=" M 75, 75 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
					</g>
					</defs>
					<g>
						<text fill="#000">
							<textPath xlinkHref="#circlePath">
								Text rotating around a circle path with SVG!
							</textPath>
						</text>
					</g>
				</svg>
			</div>	
			
        </div>
	);
}

export default Rotate;