import React from 'react'
import { Link } from 'react-router-dom'


const style={
    backg:'h-screen w-screen bg-gradient-to-r pt-[25px] from-pink-500 to-purple-500',
    reg_button:'text-white text-center mt-5  bg-sky-500 px-5 py-2 ml-[1240px] rounded-md ',
    log_button:'text-white text-center w-[217px] mt-5  bg-sky-500 px-8 py-1 rounded-md'
}

const Login = () => {
    return (
        <>
        <div className={style.backg} >
            <div>
                {/* <button className={style.reg_button} type='Submit'>Register</button> */}
                <Link className={style.reg_button} to='/register'>Register</Link>
               
            </div>

            <div className='text-center '>

                <h1 className='font-serif text-6xl mb-5'>Login</h1>

            <div className=' space-y-3'>
                <label className='font-semibold text-2xl' htmlFor="email">Email</label><br />
                <input className='h-10 px-5' id ='email' type="text" placeholder='Enter Your Email'></input>
<br />
                <label className=' font-semibold text-2xl ' htmlFor="pass">Password</label><br />
                <input className='h-10 px-5' id ='pass' type="password" placeholder='Enter Your Password'></input>
                </div>
                <button className={style.log_button}type='submit'>Login</button>
                {/* <Link>Login</Link> */}
            </div>
            </div>
        </>
    )
}

export default Login
