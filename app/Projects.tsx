'use client';
import Image from "next/image";
import { Reveal } from "./Reveal"

const Projects = () => {
    return ( 
    <div id="Projects" className="h-auto section-transition2">


        <div className="w-auto flex pb-11 pl-5 pt-12">
            <Reveal>
                <span className="text-red-900 text-[2.88rem] font-bold">/ Projects <br/></span>
            </Reveal>
        </div>

        <Reveal>
        <div className="card-container lg:pl-24 lg:pr-64 md:pl-16 md:pr-56 sm:pl-10 sm:pr-10 Iphone:pl-2 Iphone:pr-2">
            <div className="card bg-gray-400">
                <a href="https://github.com/Frreece/2048"><Image width={48} height={48} src="iconmonstr-github-1.svg" alt="" className="cursor-pointer" /></a>
                
                <h2 className="text-red-900 text-4xl mb-5"> 
                    <br />
                    2048 Game
                </h2>
                <p>A replica of the popular swiper game 2048!</p>

                <p className="text-s techUsed"> Java </p>
                
                
            </div>
            
            <div className="card bg-gray-400">
            <Image width={48} height={48} src="iconmonstr-github-1.svg" alt="" className="cursor-pointer" />
                <h2 className="text-red-900 text-4xl mb-5">
                    <br />
                    Calculator
                </h2>
                <p> I developed a versatile grade calculator for dynamically calculating grades.

                </p>
                <p className="text-s techUsed shadow-xl"> Html, CSS, Javascript </p>
            </div>


            <div className="card bg-gray-400">
            <Image width={48} height={48} src="iconmonstr-github-1.svg" alt="" className="cursor-pointer" />
                <h2 className="text-red-900 text-4xl mb-5">
                    <br />
                    Calendar
                </h2>
                <p> Developed a public website to plan a 4 year schedule of classes for the University of Pennsylvania

                </p>
                <p className="text-s techUsed shadow-xl"> Html, CSS, Javascript, Python, Spyder,  </p>
            </div>
        </div>
        </Reveal>

    </div> 

    );
}
 
export default Projects;