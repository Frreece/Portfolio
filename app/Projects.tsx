'use client';
import Image from "next/image";
import { Reveal } from "./Reveal"

const Projects = () => {
    return ( 
    <div id="Projects" className="h-auto section-transition2 pb-16">


        <div className="w-auto flex pb-11 pl-5 pt-12">
            <Reveal>
                <span className="text-red-900 text-[2.88rem] font-bold">/ Projects <br/></span>
            </Reveal>
        </div>

        <Reveal>
        <div className="card-container pt-4 pb-4 lg:pl-24 lg:pr-64 md:pl-16 md:pr-56 sm:pl-10 sm:pr-10 Iphone:pl-2 Iphone:pr-2">
            <div className="card hover:scale-105">
                <a href="https://github.com/Frreece/2048"><Image width={48} height={48} src="iconmonstr-github-1.svg" alt="" className="cursor-pointer github" /> <span className="float-right translate-y-[-30px] text-white"> Complete </span></a>
                
                <h2 className="text-red-900 text-4xl mb-5 projectName"> 
                    <br />
                    <a href="https://github.com/Frreece/2048" className="hover:underline">2048 Game</a> 
                </h2>
                <p>A replica of the popular swiper game 2048!</p>

                <p className="text-s techUsed"> <span className="">Tech Used: <br/> </span> Java </p>
                
                
            </div>
            
            <div className="card hover:scale-105">
            <a href="https://github.com/Frreece/Calculators"> <span><Image width={48} height={48} src="iconmonstr-github-1.svg" alt="" className="cursor-pointer github " /> </span> <span className="float-right translate-y-[-30px] text-white"> Complete </span> </a>
                <h2 className="text-red-900 text-4xl mb-5 projectName">
                    <br />
                    <a href="https://github.com/Frreece/Calculators" className="hover:underline">Calculator</a> 
                </h2>
                <p> I developed a versatile grade calculator website for dynamically calculating school grades.

                </p>
                <p className="text-s techUsed shadow-xl"> <span className="">Tech Used: <br/> </span> Html, CSS, Javascript </p>
            </div>


            <div className="card hover:scale-105">
            <a href="https://github.com/Frreece/2048"><Image width={48} height={48} src="iconmonstr-github-1.svg" alt="" className="cursor-pointer github" /> <span className="float-right translate-y-[-30px] text-white"> Work In Progress </span></a>
                <h2 className="text-red-900 text-4xl mb-5 projectName ">
                    <br />
                    <a href="" className="hover:underline">Calendar</a> 
                </h2>
                <p> Developed a public website to plan a 4 year schedule of classes for the University of Pennsylvania

                </p>
                <p className="text-s techUsed shadow-xl"> <span className="">Tech Used: <br/> </span> Html, CSS, Javascript, Python, Spyder, Pandas, Scrapy   </p>
            </div>
        </div>
        </Reveal>

    </div> 

    );
}
 
export default Projects;