import { Button } from "@/components/ui/button";
import heroImg from "../assets/hero.jpg";

export default function About  (){
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          
          
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">About Golf Times</h2>
            <p className="text-gray-600 mb-6">
              Welcome to Golf Times, where passion for the game meets unparalleled excellence. 
              Our meticulously designed 18-hole championship course offers a challenging and 
              rewarding experience for golfers of all skill levels. Nestled in the heart of 
              lush landscapes, our course provides a perfect blend of natural beauty and 
              strategic play.
            </p>
            <ul className="text-gray-600 mb-6 list-disc list-inside">
              <li>Championship 18-hole course</li>
              <li>State-of-the-art practice facilities</li>
              <li>Professional instruction available</li>
              <li>Exquisite clubhouse with dining options</li>
            </ul>
            <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </Button>
          </div>
          <div>
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};



