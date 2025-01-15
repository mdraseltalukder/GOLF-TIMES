import { Button } from "../ui/button";


 
export default function BlogCard({blog}) {
 
  
  return (
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
    {/*  <!--  Image --> */}
    
    <figure>
      <img
        src={`http://localhost:1337${blog.Image[0].url}`}
        alt="card image"
        className="aspect-video w-full"
      />
    </figure>
    {/*  <!-- Body--> */}
    <div className="p-6">
      <header className=" flex flex-col gap-2">
        <h3 className="text-xl font-medium text-slate-700">
        {blog.title}
        </h3>
        <p className="text-sm text-slate-400">
          {blog.SortDescription.slice(0,80)}.....
        </p>
        <Button className="">Read More...</Button>
      </header>
    </div>
  </div>
  )
}
