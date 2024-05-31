// import {useEffect, useState} from 'react'

import { useLoaderData } from 'react-router-dom'
 
function Github(){
//  const [data, setData] =useState([])
 const data=useLoaderData()
 
//    useEffect(()=>{

//     fetch('https://api.github.com/users/ravi9559')
//     .then(response => response.json())
//     .then(data=>{
//         console.log(data)
//         setData(data)
//     })


//    },[])

    return (

        
        // <div className="flex max-w-2xl flex-col justify-center items-center rounded-md border md:flex-row">

        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">

  <div className="h-full w-full md:h-[200px] md:w-[300px]">
    <img
      src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
      alt="Laptop"
      className="h-full w-full rounded-md object-cover"
    />
  </div>
  <div>
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
      {data.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 h-4 w-4"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </h1>
      <p className="mt-3 text-sm text-gray-600">
       { data.bio}
      </p>
      <div className="mt-4">
        <a href='https://github.com/ravi9559' className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Github
        </a>
        <a href='https://www.linkedin.com/in/ravi-chaudhary-2012/' className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Linkedin
        </a>
        <a href='https://codepen.io/ravi9559' className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Codepen
        </a>
        <a href='https://www.freecodecamp.org/certification/ravichaudhary/responsive-web-design' className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
          #Freecodecamp
        </a>
        
      </div>
      <div className="mt-3 flex items-center space-x-2">
        <img
          className="inline-block h-8 w-8 rounded-full"
          src={data?.avatar_url}
          alt={data?.name}
        />
        <span className="flex flex-col">
          <span className="text-[10px] font-medium text-gray-900">{data?.name}</span>
          <span className="text-[8px] font-medium text-gray-500">{data?.login}</span>
        </span>
      </div>
    </div>
  </div>
</div>

    
    )
}
export default Github

export const githubInfoLoader = async () => {
    
    const response = await fetch('https://api.github.com/users/ravi9559')
    return response.json()
}



