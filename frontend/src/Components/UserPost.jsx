import React, { useEffect } from 'react'
import React, { useLocation } from 'react-router'
import eth from '../Assets/eth.jpeg'
import { MdOutlineDeleteForever } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import axios from 'axios';
// this page is for the admin so that he can see his pages only and edit them
const style = {
  img: 'w-screen h-[500px] p-5 rounded-[32px] object-cover',
  delete: 'cursor-pointer  text-[32px] p text-red-500',
  edit: 'cursor-pointer  text-3xl text-green-500'
}
const UserPost = () => {

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(()=>{
    const getPost = async ()=>{
      const res = await axios.get("/homePosts/" +path);
      console.log(res)
    };
    getPost()
  },[path]);

  return (
    <div>
      <h1 className='font-semibold text-2xl uppercase text-center pt-5'>add title here</h1>

      <img className={style.img} src={eth} alt="cant load img" />

      <div className='flex fle-row space-x-5 float-right mr-20'>
        <span className={style.edit}><FiEdit /></span>
        <span className={style.delete}><MdOutlineDeleteForever /></span>
      </div>

      <div className='ml-5 mt-1 flex fle-row space-x-[990px]'>
        <span> Author : <b>Rahul</b></span>
        <span>Last Edit 1 Hour Ago</span>
      </div>
      

      <p className='mt-5 px-5 first-letter:ml-10 first-letter:text-3xl first-letter:font-semibold' >
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, consequatur dolorum? Sed veniam consequatur sapiente nihil quasi ad, tempore vitae fugit. A minima voluptate unde distinctio iste quia esse commodi.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, atibus mollitia molestias asperiores!
        </span><br />
        <span>
        </span><br />

        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, consequatur dolorum? Sed veniam consequatur sapiente nihil quasi ad, tempore vitae fugit. A minima voluptate unde distinctio iste quia esse commodi.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, corrupti! Commodi, tempora. Ducimus molestias fugit quod, reprehenderit excepturi totam blanditiis eveniet autem aut obcaecati ea veritatis, laudantium ab exercitationem? Reprehenderit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae cum tempora commodi doloribus, sit voluptatibus quae! Consequatur iste ex quaerat unde libero aperiam eum dolor, debitis voluptatibus mollitia molestias asperiores!
        </span>
      </p>
    </div>
  )
}

export default UserPost
