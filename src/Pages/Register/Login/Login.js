import React from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../.../../../../Utility/Google.png'
const Login = () => {



    return (
        <div className='flex justify-center'>
            <div className='max-w-md p-5 my-12 bg-white rounded-sm border shadow-md'>
                <form>
                    <span className='text-[#251D58]  text-3xl'>Login</span>
                    <input className='w-full border-b border-b-[#251D58] mt-4 p-2 text-1xl focus:outline-none focus:border-b-blue-500' type="email" name='email' placeholder='Your Email' required />
                    <input className='w-full border-b border-b-[#251D58] mt-4 p-2 text-1xl focus:outline-none focus:border-b-blue-500' type="password" name='password' placeholder='Your Password' />
                    <input type="submit" className=' rounded-sm bg-[#251D58] hover:shadow-lg hover:bg-blue-800 w-full text-white cursor-pointer mt-7 p-2 text-1xl' value="Sign In" />
                    {/* <span className='text-black mt-4 block'>Forget password ? <button className='text-[#251D58] font-bold'>Forget</button></span> */}
                    <span className='text-black mt-4 block'>Dont't have an account <Link to='/signup' className='text-[#251D58] font-bold'>Register</Link> </span>

                    <div class="divider">OR</div>
                    <button className='flex items-center justify-center gap-5 w-full bg-slate-200 py-2 rounded-sm hover:shadow-md'> <img className='w-[30px]' src={googleLogo} alt="" /> <span>Google Login</span></button>
                </form>

            </div>
        </div>
    );
};

export default Login;