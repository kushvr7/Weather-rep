import React , {useState} from 'react';
import Radium from 'radium';

function GiCity(props) {
     const [state, setstate] = useState({
         city: ""
     })

     const handleChange = (event) => {

        setstate({
           city : event.target.value ,
        })
     };

    const style = {
        textAlign : 'center',
        fontSize : '50px',
        height : 150
    }

    const inp={
        border: 'none',
        borderWidth: '0',
        borderRadius : 8,
        width: 290,
        height: 40,
        fontSize : 15,
        paddingLeft : 70
    }


    const bts = {
        border: 'none',
        borderWidth: '0',
        width: 100 ,
        height: 40,
        opacity: 0.5,
        borderRadius: 6,
        backgroundColor: 'black',
        color: 'white',
        ':focus':{
            backgroundColor: 'white',
            color: 'black'
        }
    }

    return (
        <div style={style}>
            <input style={inp} type="text"
             placeholder=" City "
              onChange={handleChange}   />
              <br></br>
            <button style={bts} onClick={() => props.getTemp(state.city )} >FORECAST</button>
        </div>
        
    )
}

export default Radium(GiCity);
