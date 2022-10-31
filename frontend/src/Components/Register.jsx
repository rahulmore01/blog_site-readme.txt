import React from 'react'
const style={
    backg:'h-screen w-screen bg-gradient-to-r from-pink-500 to-purple-500',
    login_button:'text-white text-center mt-5  bg-sky-500 px-8 py-1 ml-[1240px] rounded-md ',
    regis_button:'text-white text-center w-[217px] mt-5  bg-sky-500 px-8 py-1 rounded-md'
}
// whole component is a copy of login component
const Login = () => {
    return (
        <>
        <div className={style.backg} >
            <div>
                <button className={style.login_button} type='Submit'>Login</button>
            </div>

            <div className='text-center '>

                <h1 className='font-serif text-6xl mb-5'>Register</h1>

            <div className=' space-y-3'>
            <label className='font-semibold text-2xl' htmlFor="Username">Username</label><br />
                <input className='h-10 px-5' id ='Username' type="text" placeholder='Enter Your Username'></input><br />
                
                <label className='font-semibold text-2xl' htmlFor="email">Email</label><br />
                <input className='h-10 px-5' id ='email' type="text" placeholder='Enter Your Email'></input>
<br />
                <label className=' font-semibold text-2xl ' htmlFor="pass">Password</label><br />
                <input className='h-10 px-5' id ='pass' type="password" placeholder='Enter Your Password'></input>
                </div>

                <button className={style.regis_button}type='submit'>Register</button>
            </div>
            </div>
        </>
    )
}

export default Login
