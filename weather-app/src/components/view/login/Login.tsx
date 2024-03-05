import image1 from '../../../assets/images/7xm2_1v9x_230103-removebg-preview.png'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

function Login() {
  return (
    <>
     <div className="bg-white-800  h-screen flex  justify-center items-start">
      <div className="w-1/7 h-1/3 mt-25"></div>
        <img alt='logo' src={image1} className='mt-12 w-1/3 h-2/3 '></img>
        

        <div className='w-2/5 h-3/4 mt-40'>
          
        <h1 className='text-black font-bold text-2xl justify-center item-center border border-
        [#1075e9]  rounded-xl shadow-2xl '>"Embark on a celestial voyage with 
        <p className='text-[#5197e7] font-bold'>SkyWatch,</p>
          <div>
             your premier navigator through the ever-changing tapestry 
             of the skies,
             </div> where each forecast is a journey into atmospheric wonderment."</h1>

              <div className='h-1/5  flex justify-center items-center'></div>
             <h3 className='mt-5 text-[#1075e9] item-center justify-center'>Login With Your Google Account </h3>
             <div className='mt-4'></div>
               <GoogleOAuthProvider  clientId="4398339
               73834-e1inhrr6q80nvv8kmtr0i3m9lpbh54nn.apps.googleusercontent.com">
                  <GoogleLogin
                      size='large'
                      onSuccess={(credentialResponse) => {
                        if (credentialResponse?.credential) {
                          console.log(credentialResponse.credential);

                        
                          const cd = credentialResponse.credential;
                           // console.log(jwtDecode(cd));
                           
                       }else {
                           console.log('Credential not available');
                        }
                       }}
                        onError={() => {
                        console.log('Login Failed');
                       }}
                       useOneTap
                    />
               </GoogleOAuthProvider>

             <p className='text-[#646464] mt-10'><i>@LeadInnovationz</i></p>
          </div>
        </div>
  
    </>
    
  )
}

export default Login