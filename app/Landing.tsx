'use client';
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const Landing = () => {

    function useMouse() {
        const [mousePosition, setMousePosition] = useState({
            x: -100,
            y: -100
        });

        useEffect(() => {
            function handle(e: { pageX: any; pageY: any; }) {
                setMousePosition({
                    x: e.pageX,
                    y: e.pageY
                });
            }
            document.addEventListener("mousemove", handle);
            return () => document.removeEventListener("mousemove", handle);
        })

        return(mousePosition);
    }
    
    const {x, y} = useMouse();

    let xPos = x + 'px';
    let yPos = y + 'px';

    const handleAnimationEnd = () => {
        const secondHeading = document.getElementById('second-heading');
        const thirdHeading = document.getElementById('third-heading')
        const fourthHeading = document.getElementById('fourth-heading')
        secondHeading?.classList.add('animate-wiggle1');
        secondHeading?.classList.remove('invisible');
        thirdHeading?.classList.add('animate-wiggle1');
        thirdHeading?.classList.remove('invisible');
      };

      useEffect(() => {
        const secondHeading = document.getElementById('second-heading');
        secondHeading?.classList.add('invisible');
      }, []);

      const handleScrollToComponent = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const targetElement = document.getElementById('About')!;
        targetElement.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <div
        className="h-screen w-screen flex justify-center items-center no-cursor bg-black  ">
            <div className="cursor shadow-lg absolute top-5 left-5  Iphone:block sm:block md:hidden lg:hidden">
                <MobileNav/>
            </div>   
            <div className="">
                <h1 className=" text-red-900 lg:text-8xl md:text-8xl sm:text-6xl Iphone:text-4xl Robot self-center justify-self-center text-center typing-demo" onAnimationEnd={handleAnimationEnd}>
                Hello Friend
                </h1>
                <h1 id="second-heading" className="text-white lg:text-6xl md:text-6xl sm:text-4xl justify-self-center text-center invisible md:whitespace-normal"> Welcome to my Portfolio</h1>
            </div>

            <div style={{
                position: 'absolute',
                top: yPos,
                left: xPos,
            }} className="background-glow" >
           </div>
        </div>
    
     );
}
 
export default Landing;