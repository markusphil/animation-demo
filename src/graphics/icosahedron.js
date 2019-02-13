import React from "react";

export const Icosahedron = ({width})=>

(     
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={width}
  viewBox= "0 0 700 700"
  >
  
    <g id="Seckseck">
      <polygon display="none" fill="darkgrey" stroke="#000000" strokeMiterlimit="10"
       points="560,450 300,600 40,450 40,150 300,0 560,150"/>
    </g>
    <g id="Back" strokeWidth="3">
      <polygon className="draw" id="bleft" fill="red" stroke="#000000" strokeMiterlimit="10"
       points="400,100 400,250 270,475 140,550 140,250"/>
      <polygon className="draw" id="bbottom" fill="green" stroke="#000000" strokeMiterlimit="10"
       points="140,550 270,475 530,475 660,550 400,700"/>
      <polygon className="draw" id="brigth" fill="blue" stroke="#000000" strokeMiterlimit="10"
       points="660,550 530,475 400,250 400,100 660,250"/>
      <polygon className="draw" id="btriangle" fill="none" stroke="#000000" strokeMiterlimit="10"
       points="660,250 400,700 140,250"/>
      </g>
    <g id="Front">
      <polygon className="draw" id="fright" fill="aqua" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10"
       points="400,700 400,550 530,325 660,250 660,550"/>
      <polygon className="draw" id="ftop" fill="purple" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10"
       points="660,250 530,325 270,325 140,250 400,100"/>
      <polygon className="draw" id="fleft" fill="yellow" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10"
       points="140,250 270,325 400,550 400,700 140,550"/>
      <polygon className="draw" id="ftriangle" fill="none" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10"
       points="140,550 400,100 660,550 "/>
    </g>
</svg >
 

);
