import React from 'react';
// import Loadeer from './public/loadeer.gif';

function Loder(props) {
    //50 present component width
    //150 the component at the top GiCity
    //so subtract total of 200 from the window height
 let hi =  window.innerHeight - 205;
//  console.log(hi );
    const loade ={
        // backgroundImage : 'url('+loader+')',
        width: 50,
        height : 50,
        marginTop: hi ,
        // marginLeft: '38%'
      
      };
      


    return (
        <div> 
        <img src={props.loader}  style={loade} />
        </div>
    )
}

export default Loder;
