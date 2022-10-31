import React from 'react'
import { Link } from 'react-router-dom'
import eth from '../Assets/eth.jpeg'

const Navbar = () => {
  // if user logged in succesfully then no need to show him register page even if he clicks register.(true means user logged in)
  const user = false;

  return (
    <div className='bg-sky-300 flex flex-row justify-center '>

      <ul className='flex flex-row space-x-10  pt-5 pb-5 ' >
        <li><Link to='/'>Home  </Link></li>
        <li><Link to='/write'>Write  </Link></li>
        <li><Link to='/'>About  </Link></li>
        <li><Link to='/'>Contact  </Link></li>
        {/* logout will not be visible for user who have not loged in  */}
        <li>{user && "Logout"}</li>
      </ul>
      {/* Image of user will not be visible for user who have not loged in ,instead he'll see login or register buttons */}
      {user ?
        (
          <img className='h-12 w-12 mt-2 ml-[800px]  rounded-full' src={eth} alt="unable to load image" />) : (
          <>
            <div className="mt-5 ml-[790px] space-x-4">
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </div>
          </>
)}

    </div>

  )
}

export default Navbar
