import React from 'react'
import SingleHomePost from './SingleHomePost'

export default function HomePosts({ homePosts })
{  return (
  <>
    <div className='flex flex-wrap m-[20px]'>
      {homePosts.map((p)=>(
        <SingleHomePost singleHomePost={p} />
      ))}
    </div>
    </>
  )
}

