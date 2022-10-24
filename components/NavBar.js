import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const NavBar = () => {
    const [open, setOpen] = useState(false);

    // on scroll set open to false
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setOpen(false);
        });
    }, []);
    return (
        <div className="h-20 p-4.5 w-full">
            <div className="w-full flex px-0 md:px-32 xl:px-64 h-full items-center">
                

                <div className="flex-1"></div>
                <div className="hidden md:flex h-full items-center">
                    <a className="px-5 text-white text-2xl font-bold" onClick={() => document.getElementById("home")?.scrollIntoView()}>Home</a>
                    <a className="px-5 text-white text-2xl font-bold" onClick={() => document.getElementById("work")?.scrollIntoView()}>About Me</a>
                    <a className="px-5 pr-10 text-white text-2xl font-bold" onClick={() => document.getElementById("yoe")?.scrollIntoView()}>Years of Experience</a>
                </div>
                <div className="md:hidden flex" onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="0.75" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>
            </div>
            <div className={`fixed w-full backdrop-blur h-screen top-0 left-0 transition-all flex flex-col ${open?'':'hidden'}`} onClick={() => setOpen(false)} style={{backgroundColor: `rgba(0,0,0,0.5)`}}>
                <div className="h-20 p-4.5 flex justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" strokeWidth="0.75" stroke="#f1f1f1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
                <motion.div initial={{opacity:0, y: 20}} whileInView={{opacity: 1, y:0}} className="w-full py-5 border-b border-white text-center justify-center">
                    <a className="px-5 text-white text-lg font-bold" onClick={() => document.getElementById("home")?.scrollIntoView()}>Home</a>
                </motion.div>
                <motion.div initial={{opacity:0, y: 20}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.1}} className="w-full py-5 border-b border-white text-center justify-center">
                    <a className="px-5 text-white text-lg font-bold" onClick={() => document.getElementById("work")?.scrollIntoView()}>About me</a>
                </motion.div>
                <motion.div initial={{opacity:0, y: 20}} whileInView={{opacity: 1, y:0}} transition={{delay: 0.2}} className="w-full py-5 border-b border-white text-center ">
                    <a className="px-5  text-white text-lg font-bold " onClick={() => document.getElementById("yoe")?.scrollIntoView()}>Years of Experience</a>
                </motion.div>
            </div>
        </div>
    )
}

export default NavBar