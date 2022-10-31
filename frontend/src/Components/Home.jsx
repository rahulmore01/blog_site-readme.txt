import { useState,useEffect } from "react";
import HomePosts from "./HomePosts";
import axios from "axios";
import { useLocation } from "react-router";
import eth from '../Assets/eth.jpeg'


export default function Home() {
  // const location = useLocation();
  // console.log(location);

    const [homePosts,setHomePosts] =useState([]);
    const { search } = useLocation();

  
    useEffect(()=>{
      const fetchHomePosts = async ()=>{
        const res = await axios.get("/homePosts" + search);
        setHomePosts(res.data)
      }
      fetchHomePosts()
    },[search]);

  return (
    <>
    <img src={eth} alt="image not loaded" />
      <div className="flex">
        <HomePosts homePosts={homePosts} />
      </div>
    </>
  );
}
