import { Button } from "@/components/ui/button";
import hero from '../assets/hero.jpg';
export default function Hero() {
    

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image */}
  <img src={hero} alt=""
  width='100%'
    layout="fill"
      objectFit="cover"
      quality={100}
      className="absolute z-0" />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    
    {/* Content */}
    <div className="relative z-20 text-center text-white px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
        Golf Times
      </h1>
      <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
        Experience the Perfect Swing
      </p>
      <Button 
        size="lg"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        Book a Tee Time
      </Button>
    </div>
  </div>
   
  );
}



