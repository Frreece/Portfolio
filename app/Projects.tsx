'use client';
import Image from "next/image";
import { Reveal } from "./Reveal"

const Projects = () => {
    const color1 = "rgb(100, 255, 218)"
    return ( 
    <div id="Projects" className="h-auto section-transition2 pb-16">


        <div className="w-auto flex pb-11 pl-5 pt-12">
            <Reveal>
                <span className="text-red-900 text-[2.88rem] font-bold">/ Projects <br/></span>
            </Reveal>
        </div>

        <Reveal>
        <div className="card-container pt-4 pb-4 lg:pl-24 lg:pr-64 md:pl-16 md:pr-56 sm:pl-10 sm:pr-10 Iphone:pl-2 Iphone:pr-2">
            <div className="card hover:scale-105 bg-slate-800 bg-slate-800">
                <a href="https://github.com/Frreece/2048"><Image width={48} height={48} src="iconmonstr-github-1.svg" alt="" className="cursor-pointer github" /> <span className="float-right translate-y-[-30px] text-white"> Complete </span></a>
                
                <h2 className="text-white text-4xl mb-5 projectName"> 
                    <br />
                    <a href="https://github.com/Frreece/2048" className="hover:underline">2048 Game</a> 
                </h2>
                <p className="text-white">A replica of the popular swiper game 2048!</p>

                <p className="text-s techUsed"> Java </p>
                
                
            </div>
            
            <div className="card hover:scale-105 bg-slate-800">
            <a href="https://github.com/Frreece/Calculators"> <span><Image width={48} height={48} src="iconmonstr-github-1.svg" alt="" className="cursor-pointer github " /> </span> <span className="float-right translate-y-[-30px] text-white"> Complete </span> </a>
                <h2 className="text-white text-4xl mb-5 projectName">
                    <br />
                    <a href="https://github.com/Frreece/Calculators" className="hover:underline">Calculator</a> 
                </h2>
                <p className="text-white"> I developed a versatile grade calculator website for dynamically calculating school grades.

                </p>
                <p className="text-s techUsed shadow-xl "> Html, CSS, Javascript </p>
            </div>


            <div className="card hover:scale-105 bg-slate-800">
            <a href="https://github.com/Frreece/2048"><Image width={48} height={48} src="iconmonstr-github-1.svg" alt="" className="cursor-pointer github" /> <span className="float-right translate-y-[-30px] text-white"> Work In Progress </span></a>
                <h2 className="text-red-900 text-4xl mb-5 projectName ">
                    <br />
                    <a href="" className="hover:underline text-white">Calendar</a> 
                </h2>
                <p className="text-white"> Developed a public website to plan a 4 year schedule of classes for the University of Pennsylvania

                </p>
                <p className="text-s techUsed shadow-xl"> Html, CSS, Javascript, Python, Spyder, Pandas, Scrapy, PCX API   </p>
            </div>

            <div className="card hover:scale-105 bg-slate-800">
            <a href="https://github.com/Frreece/Tetris"><Image width={48} height={48} src="iconmonstr-github-1.svg" alt="" className="cursor-pointer github" /> <span className="float-right translate-y-[-30px] text-white"> Completed </span></a>
                <h2 className="text-red-900 text-4xl mb-5 projectName ">
                    <br />
                    <a href="" className="hover:underline text-white">Tetris</a> 
                </h2>
                <p className="text-white"> Created a replica of Tetris using PyGame!

                </p>
                <p className="text-s techUsed shadow-xl"> Python, Pygame   </p>
            </div>


            <div className="card hover:scale-105 bg-slate-800">
            <a href=""><Image width={48} height={48} src="iconmonstr-github-1.svg" alt="" className="github" /> <span className="float-right translate-y-[-30px] text-white"> Completed </span></a>
                <h2 className="text-red-900 text-4xl mb-5 projectName ">
                    <br />
                    <a href="" className="hover:underline text-white"> Personal A.I. </a> 
                </h2>
                <p className="text-white"> Integrated Google Bard API with python voice recognition libraries to create my own version of Jarvis

                </p>
                <p className="text-s techUsed shadow-xl"> Python, Google Cloud   </p>
            </div>
        </div>
        </Reveal>

    </div> 

    );
}
 
export default Projects;