import BlogCard from "@/Components/Blogs/BlogCard";
import useFetch from "@/Hooks/useFetch";


export default function Blog() {
  const { data, error, loading } = useFetch(
    `${import.meta.env.VITE_APP_URL}/api/blogs?populate=*`
  );

  if (loading) return <h1 className="text-center">Loading...</h1>;
  if (error) return <h1 className="text-center text-red-500">Something went wrong!</h1>;



  return (
    
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
   {
    data?.map((blog)=>(<BlogCard key={blog.id} blog={blog}/>))
   }
      </div>
    </div>
   
  );
}
