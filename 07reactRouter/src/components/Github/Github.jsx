import React , { useEffect , useState} from 'react'
import { useLinkClickHandler, useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    // const [data , setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/bharatkatariya1706')
    //     .then(res=>res.json())
    //     .then((data)=>setData(data))
        
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers :{data.followers} 
    <img src={data.avatar_url} alt="profile img" width={300} /></div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/bharatkatariya1706');
    return response.json();
}