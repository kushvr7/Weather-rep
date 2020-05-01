import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Bod from './Use/Bod';
import GiCity from './Use/GiCity';
// import Loader from 'public/loader';
import Loder from './Loa/Loder';
import Loadeer from './loadeer.gif';
function App() {

  const [state, setstate] = useState({
    temp: ' ',
    wispeed: ' ',
    discri: null,
    longi: ' ',
    lati: ' ',

    load: false
  });

 const cel = 0;

 const getTemperature = (city ) => {
  //weather api 
  // i signed up to get the api key
  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=d98cacde5f72232ab2e91e6253138b81';
   fetch(url).then(response => {
     return response.json();
   }).then(data => {
     console.log(data)
      const kev = data.main.temp;
      const wspeed = data.wind.speed;
      const discrip = data.weather[0].description;
      console.log(discrip);
      const lonm = data.coord.lon;
      const latm = data.coord.lat;
      const cel = Math.ceil(kev - 273.15) ;
      console.log(cel);
       setstate({
        temp : cel ,
        load: true,
        wispeed: wspeed,
        discri: discrip,
        longi: lonm,
        lati: latm,

      });
     
   
   }).catch(error =>{
   console.log(error);
   })
   
  // cel = bool ;
   


 }
const er = Loadeer;

const Tsp ={
   fontSize: 60,
   textShadow: "1px 3px 11px white "
  //  textAlign: 'center',

// #9E9E9E
}

const det ={
  textShadow: "1px 3px 4px   #2F4F4F ",
  fontWeight: 'bold'
}



const pst ={
  textAlign: 'center',
  marginTop : 70
}
// console.log(state.discri);

// marginLeft: '10%'
  return (
    <div className="App">
      {/* <Bod /> */}
       <GiCity getTemp={getTemperature} />
       { state.load === true ?
         <p style={pst}>
         <span style={Tsp}>{state.temp}</span><span>°C</span> <br/><br/>
       <span style={det}>{state.discri}</span><br/><br/>
         <span>Wind :</span><span style={det}> {state.wispeed} km</span><br />
         <span>Latitude : <span style={det}>{state.lati}</span> <b>||</b> longitude : <span style={det}>{state.longi }</span>     </span>
         </p> :
         <Loder loader={er}/> 
      }
  
    </div>
  );
}

export default App;
