import React from 'react'
import eth from '../Assets/eth.jpeg'

import { FaRegUserCircle } from 'react-icons/fa';

const style = {
    main: 'mt-8 flex flex-row  text-pink-400 space-x-[970px] rounded-',
    img: ' px-[30px] w-[200px] h-[150px]  p-5  object-cover',
    input:'py-2 shadow appearance-none border border-b-blue-400 focus:outline-none focus:shadow-outline',
    text:'text-lg font-semibold'
}

const Settings = () => {
    return (
        <div className='px-5'>
            <div className={style.main}>
                <h1 className='capitalize text-3xl'>update your acccount</h1>
                <p className='capitalize pt-3 '>delete account</p>
            </div>

            <h2 className='mt-5'>profile picture</h2>
            <div className='flex flex-row space-x-5'>
                <img className={style.img} src={eth} alt="cant load img" />

                {/* when u click on user icon this "file" type of input help that id to open system files */}
                <label htmlFor="uploade_image" className='rounded full pt-14 text-3xl text-red-400' >< FaRegUserCircle /></label>

                <input type="file" id='uploade_image' style={{ display: 'none' }}></input>

            </div>
            
            <ul className='space-y-5 mt-10 ' >
                <li className={style.text}><label htmlFor="Username">Username</label></li>
                <li className={style.input}><input type="text" id='Username' placeholder='Rahul' /></li>

                <li className={style.text} ><label htmlFor="Email">Email Id</label></li>
                <li className={style.input}><input type="text" id='Email ' placeholder='username@mail.com' /></li>

                <li className={style.text} ><label htmlFor="password">Password</label></li>
                <li className={style.input}><input type="password" id='password' placeholder='********' /></li>

            </ul>
            <button className='text-white text-center mt-10 mx-[46%] bg-red-500 px-8 py-1 rounded-md '>update</button>
        </div>
    )
}

export default Settings
