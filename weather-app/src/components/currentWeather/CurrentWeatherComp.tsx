// import { useState } from 'react';
// import FullLoadScreen from '../../components/FullLoadScreen';
import backImg from '../../assets/images/8504201-removebg-preview.png'
import icon1 from '../../assets/images/8504201-removebg-preview.png'
import icon2 from '../../assets/icons/icons8-partly-cloudy-day-48.png'


// import { useEffect, useState } from 'react';
// 



// interface Location {
    // latitude: number;
    // longitude: number;
    // address: string; // Address is optional
  // }
// 
  
function CurrentWeatherComp() {
    // const [userLocation, setUserLocation] = useState<Location | undefined>();
    // const [weatherData, setWeatherData] = useState<UserWeatherDTO>();
    // const [usernName, setUserName] = useState();
    // const [loading, setLoading] = useState(false);
    // const navigate = useNavigate(); // Initialize useNavigate hook
    // 
    // useEffect(() => {
      // const user = JSON.parse(localStorage.getItem('user') || '{}');
      // setUserName(user.given_name);
// 
      // Fetch weather data when userLocation changes
      // if (userLocation) {
        // setLoading(true);
        // console.log(userLocation.latitude, userLocation.longitude)
        // // axios.get(`http://localhost:9596/api/weather/current-data?lat=${userLocation.latitude}&lon=${userLocation.longitude}`)
          // .then(response => {
            // const resweatherData = response.data.data; 
// 
            // const userWeatherDTO = new UserWeatherDTO(
              // resweatherData.description,
              // resweatherData.temperature,
              // resweatherData.feelsLike,
              // resweatherData.minTemperature,
              // resweatherData.maxTemperature,
              // resweatherData.windSpeed,
              // resweatherData.cloudiness,
              // resweatherData.pressure,
              // resweatherData.humidity,
              // resweatherData.seaLevelPressure,
              // resweatherData.imageCode,
              // resweatherData.location,
              // resweatherData.main
            // );
// 
// 
          // setWeatherData(userWeatherDTO);
          // console.log(userWeatherDTO.toString());
// 
          // })
          // .catch(error => {
            // console.error('Error fetching weather data:', error);
          // })
          // .finally(() => {
            // setLoading(false);
          // });
      // }
    // }, [userLocation]);
// 
    // const getUserLocation = (data: any) => {
        // setUserLocation(data);
      // };
// 
// 
      // const LogoutBtnClicked = (): void => {
        // Perform logout actions here
        // navigate('/'); // Navigate to '/' route on logout button click
      // };
// 
  return (
    <>
      {/* loading component */}
      {/* {loading && <FullLoadScreen loadingTime={5}/>} */}

      <div
      className='flex justify-center flex-col items-center h-screen  bg-blue-400/> '
    >
     
      
      <div className='flex flex-row justify-center align-middle items-center'>
      {/* <img src={backImg} alt="Logo" className="h-10" /> */}
      <h1 className='text-[#3c8ed1] text-lg  font-semibold ml-3'>SkyWatch </h1>
      </div>
      
      <br></br>
      <div className='border-2 border-[#4D6DE3] rounded-xl shadow-2xl md:w-11/12 md:h-[600px] bg-white md:rounded-2xl 
       flex md:flex-row flex-col md:justify-center md:items-center h-screen w-screen'
       
      >
        {/* LSide */}
        <div className='md:w-4/12 md:h-[560px] flex justify-center items-center md:ml-4 w-full '>
            {/* Map */}
            <div className='w-11/12 h-[380px]  mt-5 md:h-full'>
                <search className='border border-blue-500 mt-5'> Search Your Location </search>
                <div className='mt-10 '>
                <img src={icon1} alt="Logo" className='h-2/5 w-3/5' />
                <div> Today : 05th March 2024</div>
                <div> 03.40 a.m</div>
                <div className='mt-5'>Partly Cloud</div>
                <div className='mt-2 font-bold text-2xl'>30 C</div>
                </div>
                <div className='mt-10'><button className=' border border-red-400 md:rounded'>Logout</button></div>
            </div>
        </div>

        {/* RSide */}
        <div className='md:w-8/12 md:h-[540px] w-full  flex flex-col justify-center items-center space-y-5'>
            {/* First Row */}
            <div className='md:w-11/12 md:h-[150px] h-96 w-full flex md:flex-row flex-col space-x-3 mt-5 '>
                {/* first card */}
                <div className='md:w-5/15 md:h-ful w-full h-full border-2
                 border-[#4D6DE3] rounded-xl shadow-2xl flex row justify-center items-center'>
                  <img src={backImg} alt="Logo" className="h-10" />
                  <div className=' '> Rainy</div>
                  
                
               
               
               
               
               
               
               
                </div>

                {/* second card */}
                <div className='md:w-5/15 md:h-[150px]  w-full h-full border-2 border-[#4D6DE3] rounded-xl 
                shadow-2xl flex justify-center items-center'>
               
               <img src={icon2} alt="Logo" className="h-10" />
                  <div className=' '> Partly Cloudy</div>
               
               
               
               
               
               
               
               
               
               
               
                </div>
                    {/* third card */}
                   <div className='md:w-5/15 md:h-[150px]  w-full h-full border-2
                                          border-[#4D6DE3] rounded-xl
                                         shadow-2xl flex justify-center items-center'>
   
                           <img src={backImg} alt="Logo" className="h-10" />
                                        <div className=' '> Rainy</div>
   
   
   
   
   
   
   
   
   
   
   
                     </div>
                </div>

            {/* Second Row */}
         
            <div className='w-11/12 h-96  rounded-xl shadow-2xl flex flex-col'>
              <br></br>
              <h1 className='mt-2'>
                      📙Description       : </h1>
                  <h1>🔥Feels Like        : </h1>
                   <h1>🕒Min Temperature  :</h1>
                   <h1>🕘Max Temperature  : </h1>
                   <h1>🍃 Wind Speed      : </h1>
                   <h1>☁️Cloudiness       : </h1>
                    <h1>⏏Pressure         : </h1>
                    <h1>💦Humidity        : </h1>
                    <h1>🌊Sea Level Pressure: </h1>
            
                   
           
              <h1 className='mt-10 text-sm mb-5 text-[#4D6DE3]'>Developed by | Sachini Vinodya @Lead Innovationz - All Right Reserved 2024</h1>
             
            </div>
            
        </div>
        
      </div>
    </div>
    </>
  )
}

export default CurrentWeatherComp