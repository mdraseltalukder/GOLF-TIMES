
import { useEffect, useState } from 'react';
// import { Axios } from 'axios';
import axios from 'axios';

export default function useFetch(url) {

    const [data, setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error, setError]=useState();

    useEffect(()=>{
      const fetchData = async () => {
        try{
         
          const response = await axios.get(url
            , {
            headers:{
              Authorization: "bearer" + import.meta.env.VITE_API_TOKEN
            }
          }
        );
          // const responseData=  response.json();
         console.log(response.data.data);
          setData(response.data.data);
      
         
        }catch(err){
          setError(err);
      }finally{
        setLoading(false);
      }}


      fetchData();
    },[url])

  return {data, error, loading};
}



// useEffect(()=>{
//   fetch('http://localhost:1337/api/blogs?populate=*').then((res)=>res.json()).then((data)=>{
//     console.log(data.data)
//     setBlogs( data.data)
//   })
// },[])
{/* <div className="flex flex-col justify-center items-center inset-0 gap-5">
{ blogs.map ((blog)=>(
  <div key  = {blog.id}>
    <h2>{blog.title}</h2>
   
       <img src={`http://localhost:1337${blog.Image[0].url}`}
          alt=""  height  = "200px" width = "200px"
        />
  </div>
 
 ))
 
 }
</div> */}