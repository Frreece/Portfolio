'use client';
import { App } from './Technologies'
import { Reveal } from './Reveal';

const About = () => {
    return ( 
    <div id="About" className="w-screen h-auto section-transition">
<div className="text-red-700">
  <div>
    
    <div className="flex pb-11 pl-5">
      <Reveal>
        <span className="text-red-900 text-[2.88rem] font-bold">/ about me</span>
      </Reveal>
      
    </div>
    <Reveal>

    <div className="flex lg:pl-24 lg:pr-64 md:pl-16 md:pr-56 sm:pl-10 sm:pr-10 Iphone:pl-2 Iphone:pr-2">
      <div className="text-red-300 text-[1.38rem] text-justify">
        <p className="mb-4">
          I am an aspiring <b className="text-[1.31rem] font-bold">Software Engineer</b> based in Philadelphia.
          I currently enrolled at the           
          <a href="https://www.college.upenn.edu/" className="text-red-600 cursor-pointer text-[1.31rem] font-bold"> University of Pennsylvania </a>
          pursuing a 
          <b className="text-[1.31rem] font-bold"> Bachelor of Arts</b> in
          <b className="text-[1.31rem] font-bold"> General Mathematics and Computer Science </b>.
        </p>
        <p className="mb-4">
          Here are some technologies I have been working with:
        </p>
        <App />
        
        <p className="mb-4">
        Outside of work, I&apos;m interested in studying Philosophy. I also like to watch and analyze TV shows, anime, books, and more. I also like to play games and dance.
        </p>
        
        
      </div>
    </div>
    </Reveal>
  </div>
</div>


    </div>
 );
}
 
export default About;