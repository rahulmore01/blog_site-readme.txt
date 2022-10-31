import { Link } from "react-router-dom";
import eth from '../Assets/eth.jpeg'

const style = {
  // main working css for container
  // container: "w-[385px] ml-[0px] mt-[25px] mr-[40px] mb-[25px]",
  // container old -->flex justify-center flex-wrap px-10 py-7 space-x-20,
  container: "w-[47.1%] ml-[0px] mt-[25px] mr-[40px] mb-[25px]",
  leftBox: "rounded-2xl h-[350px]",
  rightBox: "rounded-2xl",
  text: "flex justify-center space-x-5 pt-2",
  title: 'text-xl font-bold text-center pt-3',
  time: 'text-center pt-3 pb-5',
  preview: 'text-center pb-10',
}

function SingleHomePost({singleHomePost}) {

  // const PF = "http://localhost:8000/images/"; 
  return (
    <>
      {/* <img src={eth} alt="image not loaded" /> */}

      {/* flexbox */}
      <div className={style.container}>
      {/* {singleHomePost.photo && */}
         {/* <div> */}
          {/* <img className={style.leftBox} src={PF + singleHomePost.photo} alt="image not loaded" /> } */}
          <img className={style.leftBox} src={eth} alt="image not loaded" /> 
          {/* } */}

          {/* <div className={style.text}>
            {singleHomePost.categories.map((c)=>(
            <span>{c.name}</span>
            ))}
          </div> */}
          <div className={style.text}>
            <span>Music</span>
          </div>

          {/* <Link to={`/singleHomePost/${singleHomePost._id}`}>
          <h1 className={style.title} >{singleHomePost.title}</h1>
          </Link> */}
          
          {/* <Link to={`/singleHomePost/${singleHomePost._id}`}> */}
          <h1 className={style.title} >{singleHomePost.title}</h1>
          {/* </Link> */}
          <h3 className={style.time} >{new Date(singleHomePost.createdAt).toDateString()}</h3>
          <span className={style.preview}>
          {singleHomePost.desc}
        </span>
        </div>
        {/* </div> */}

        {/* <div>
          <img className={style.leftBox} src={eth} alt="image not loaded" />
          <div className={style.text}><span>Music</span><span>Life</span>
          </div>
          <h1 className={style.title} >Lorem Ipsom Dolar Sit</h1>
          <h3 className={style.time} >{new Date(singleHomePost.createdAt).toDateString}</h3>
          <span className={style.preview}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione */}
        {/* atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </span>
        </div> */}

      
    </>
  );
}

export default SingleHomePost
