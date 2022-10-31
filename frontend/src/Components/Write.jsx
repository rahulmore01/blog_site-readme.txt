import React from 'react'
import eth from '../Assets/eth.jpeg'

const style={
    title: 'mx-[200px] text-3xl w-[1040px] space-y-5',
    img:'object-center py-5 px-[200px] w-screen  h-[300px] object-cover'
}


const Write = () => {
  return (
   <>
   <div className='w-screen h-screen'>
   <img className={style.img} src={eth} alt="cant load img" />

   <div className={style.title} >
   <input type="file" style={{display:'none'}}></input><br />
   {/* title with publish button*/}
   <div className='flex flex-row space-x-[620px] '><input  type="text" placeholder='Enter The Title' autoFocus={true}></input>
   <button  type="submit">Publish</button><br />
   </div>

   <textarea type="text" placeholder='Tell Your Story'></textarea><br />
   {/* choose image button */}
   </div>
   </div>
   </>
  )
}

export default Write
