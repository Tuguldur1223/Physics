import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneHeader from '../components/Header/phoneHeader'
function Physics() {
    const links=[
        { id: "1", category: "6-р анги", link: "/physic/6" },
        { id: "2", category: "7-р анги", link: "/physic/7" },
        { id: "3", category: "8-р анги", link: "/physic/8" },
        { id: "4", category: "9-р анги", link: "/physic/9" },
        { id: "5", category: "10-р анги", link: "/physic/10" },
        { id: "6", category: "11-р анги", link: "/physic/11" },
        { id: "7", category: "ЭЕШ бэлтгэл", link: "/physic/EYSH_beltgel" }
    ]
  return (
   <div className=' flex flex-wrap justify-center gap-5 items-center'>
        <PhoneHeader/>
        {links.map(data =>(
            <Link key={data.id} to={data.link}>
                <div className='w-40 h-40 text-xl text-center flex justify-center items-center text-white border-2 border-solid border-green-500 hover:bg-[#08472B] border-opacity-30 rounded-lg'>
                    <p>
                        {data.category}
                    </p>
                </div>
            </Link>
        ))
        
        }
   </div>
  )
}

export default Physics;
