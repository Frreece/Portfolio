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
          Hi there! I&apos;m Jaurice, an aspiring <b className="text-[1.31rem] font-bold">Software Engineer</b> based in Philadelphia. I have a strong passion for problem-solving and creating innovative solutions through coding.
          Currently, I&apos;m pursuing my <b className="text-[1.31rem] font-bold">Bachelor of Arts</b> degree in <b className="text-[1.31rem] font-bold">General Mathematics and Computer Science</b> at the <a href="https://www.college.upenn.edu/" className="text-red-600 cursor-pointer text-[1.31rem] font-bold">University of Pennsylvania</a>.
        </p>
        <p className="mb-4">
          Here are some of the technologies I work with:
        </p>
        <App />
        
        <p className="mb-4">
        When I&apos;m not coding, I dive into the captivating world of philosophy, exploring its profound concepts and ideas. Additionally, I have a strong interest in storytelling, whether it&apos;s analyzing TV shows, books, or anime. In my leisure time, I enjoy immersing myself in the realm of gaming and having fun by listening to music.
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