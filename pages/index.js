import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Icons from '../components/Icons'
import CmdTick from '../components/CmdTick'
import { useState } from 'react'
import { urlObjectKeys } from 'next/dist/shared/lib/utils'


export default function Home() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  let textGradient = 'text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-red-500 to-orange-500'
  const [toasts, setToasts] = useState("")
  const toast = (t) => {
    setToasts(t)
    setTimeout(() => {
      setToasts("copied ")
      setTimeout(() => {
        setToasts("")
      }, 200)
    }, 1000)
  }
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' />
      </Head>
      <div className='bg-[#111827] min-h-screen ' id='home'>
        <div className='min-h-screen flex flex-col justify-between'>
          {/* naslovna */}
          <NavBar />
          <div >
            <h1 className='xl:pt-20 -pt-10 py-4 xl:text-8xl text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-blue-600'>Full-stack developer<br />for everything you need!</h1>
            <p className='text-white xl:text-6xl text-3xl p-5 xl:pt-20 text-center'>This is my portfolio!</p>
            <div className='flex justify-center items-center p-3 h-20'>
              <motion.a href="https://www.upwork.com/freelancers/~01d673aff1549f3713" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer h-full mx-2 flex items-center justify-center rounded-md select-none bg-gradient-to-r from-red-500 to-blue-600  text-white font-semibold px-5 py-3 text-xl xl:text-3xl">UpWork</motion.a>
              <motion.a href="https://www.instagram.com/frankosolomun/" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer h-full mx-2 flex items-center justify-center rounded-md select-none bg-gradient-to-r from-red-500 to-blue-600  text-white font-semibold px-3 py-3 text-xl xl:text-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                Instagram</motion.a>
            </div>
          </div>
          <div className='flex flex-col items-center pb-14 xl:pt-20'>
            <p className='text-white text-center text-xl xl:text-3xl font-bold pb-6'>Has mastered</p>
            <Icons />
          </div>
        </div>
        <div className='p-5 h-[65vh] xl:h-[50vh] flex flex-col xl:flex-row justify-center overflow-hidden'>
          {/* full stack development */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 40 }
            }}
            className='xl:p-10 px-10 flex flex-col justify-center'>
            <p className='xl:text-6xl text-3xl text-white font-semibold'>Full Stack <span className=' font-semibold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-blue-600'>Development</span></p>
            <p className='pt-5 text-left text-xl text-gray-400'>Next Js, Prisma, Tailwind, Framer Motion. The perfect blend of tools.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }} className='rounded-t-md p-5 ' >
            <img className='rounded-lg w-full max-w-2xl max-h-max ' src='https://www.freemockupworld.com/wp-content/uploads/2019/10/iPhone-on-a-Table-Mockup-1500x1000.jpg' />
          </motion.div>

        </div>
        {/* framer moving icon */}
        <div className='min-h-screen bg-white flex flex-col' >
          <div className='xl:py-28 pt-28 pb-5 text-gray-900 flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <motion.path style={{ pathLength: scale }} d="M6 15h12l-12 -12h12v6h-12v6l6 6v-6" />
            </svg>

          </div>
          {/* framer naslov */}
          <motion.p
          
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }} className='xl:text-6xl text-3xl font-semibold text-center'> Animated With <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-blue-600'>Framer Motion</span></motion.p>
          <div id='work'>
            <motion.p
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }} className='xltext-2xl text-lg p-5 text-gray-600 text-center'>Every site looks like a work of art</motion.p>
            {/* framer motion copy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }} className='flex justify-center'></motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }} className='flex justify-center'>
              <div className='rounded-md bg-gray-800 p-3 flex items-center'>
                <p className='text-red-400'><span className='text-gray-400 opacity-50'>1 | </span>npm <span className='text-gray-300'>i framer-motion</span></p>
                <div className='text-gray-400 opacity-75 pl-3 cursor-pointer hover:opacity-100'>
                  <div className='absolute'><motion.p initial={{ y: 20 }} animate={toasts === "" ? { y: 20, opacity: 0 } : toasts === "copied " ? { y: 40, opacity: 0 } : { y: 40, opacity: 1 }}>{toasts}</motion.p></div>
                  <svg onClick={() => { navigator.clipboard.writeText("npm i framer-motion"); toast("copied") }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="2" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 }
            }}>
            <div className='px-2 xl:px-20'>
              <p className='text-gray-900 xl:text-5xl text-2xl font-semibold p-5 pb-6'>Some of my<span className='font-semibold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-blue-600'> work</span></p>
              <p className='text-gray-900 xl:text-3xl text-xl font-semibold p-5 pt-2 pb-2'>My Portfolio</p>
              <div className='p-5 pt-0 pb-3 flex flex-col xl:flex-row items-center '>
                <img className='rounded-lg w-full max-w-2xl max-h-max ' src='/slike/My Portfolio.png' />
                <p className='text-gray-900 xl:text-6xl text-xl font-semibold p-5 pt-3 pl-20'>More work to come...</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='min-h-screen xl:p-10 p-5 xl:pt-24 pt-20 xl:px-24 flex flex-col'>
          {/* konzola */}
          <div className='w-full flex-1 rounded-md bg-gradient-to-tr from-gray-900 to-black shadow-2xl flex flex-col max-w-4xl pb-32  '>
            <div className='flex p-5'>
              <div className='rounded-full w-4 h-4 mx-1.5 bg-gray-600 opacity-50'></div>
              <div className='rounded-full w-4 h-4 mx-1.5 bg-gray-600 opacity-50'></div>
              <div className='rounded-full w-4 h-4 mx-1.5 bg-gray-600 opacity-50'></div>
            </div>
            <p className='xl:text-xl text-sm text-white px-5 py-1'>{`Windows PowerShell`}</p>
            <p className='xl:text-xl text-sm text-white px-5'>{`Copyright (C) Microsoft Corporation. All rights reserved.`}</p><br />
            <p className='xl:text-xl text-sm text-white px-5'>{`Try the new cross-platform PowerShell https://aka.ms/pscore6`}</p><br />
            <p className='xl:text-xl text-sm text-white px-5 py-px opacity-95'>{`PS C:\\Users\\Franko>`}<CmdTick /></p>
          </div>
          <div className='flex xl:p-10 p-5 flex-col xl:flex-row overflow-hidden' id="yoe">
            {/* iskustvo */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className='flex-1 flex flex-col justify-center xl:px-10 px-2 text-green-500'>
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
              <p className='xl:text-xl text-green-500 font-mono pt-2'>I code lots, true story</p>
              <p className='xl:text-4xl text-2xl text-white font-semibold py-4'>2 Years Experience</p>
              <p className='xl:text-xl text-gray-400'>I have 2 Years of Experience in React and Web App development, real Full Stack experience and a drive to constantly learn more. With broad experiences from startups to established tech companies. I love design and try to make the website look best as possible for my clients.</p>
              <a className='text-sexy py-2 ' href="https://www.upwork.com/freelancers/~01d673aff1549f3713">Find Me On Upwork</a>
            </motion.div>
            <div className='flex xl:w-1/2 w-full  xl:h-[80vh] h-[40vh]'>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, ease: 'easeOut' }} className='flex-1 flex flex-col justify-center xl:p-32 p-10 bg-contain bg-no-repeat' style={{ backgroundImage: `url(/slike/bg-1.png)` }}>
                <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className='rounded-md shadow-2xl w-full h-full bg-gradient-to-tr from-gray-900 to-black bg-center bg-cover' style={{ backgroundImage: `url(/slike/portfolio6.jpg)` }}>
                </motion.div>
              </motion.div>
            </div>

          </div>

          {/* damn good code */}
        </div>
      </div>
      <div className='h-screen bg-white'>
        <div className='pt-20'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 }
            }} className='flex-1 flex justify-center items-center flex-col'>
            <p className='py-5 text-gray-400'>{'//'} 136 hours of leetcode </p>
            <p className='xl:text-5xl text-3xl text-gray-900 font-semibold text-center'>Damn <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-blue-600'>Good Code</span></p>
            <p className='py-4 text-xl text-gray-400 text-center'>Created with lots of LeetCode practice</p>
            <div className='my-5 rounded-md border-blue-500 text-blue-500 border items-center font-semibold text-xl px-5 py-3 flex cursor-pointer'>
              <a href="https://www.upwork.com/freelancers/~01d673aff1549f3713" className='pr-2'>Seen Enough</a>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </div>
          </motion.div>
        </div>
        {/* Hire me */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.9 }
          }}>
          <div className='justify-center flex items-center p-5 pt-20 '>
            <div className='py-14 p-10 xl:w-1/4 rounded-md text-white shadow-2xl flex flex-col justify-center pl-14 pr-14 items-center bg-gradient-to-br from-red-600 to-blue-600'>
              <p className='text-gray-300 font-mono xl:text-xl text-center'>{`//`} A decision you wont regret</p>
              <p className='py-4 xl:text-5xl text-2xl font-semibold'>Hire Me</p>
              <div className='p-3 flex flex-col xl:flex-row'>
                <motion.a href="https://www.upwork.com/freelancers/~01d673aff1549f3713" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-2 py-2 cursor-pointer mx-2 flex items-center justify-center rounded-md select-none border bg-white text-gray-900 font-semibold px-5 xl:text-xl text-xl">UpWork</motion.a>
                <motion.a href="/contacts"><motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-2 py-2 cursor-pointer mx-2 flex items-center justify-center rounded-md select-none border border-white  text-white font-semibold px-5 xl:text-xl text-xl">Contact Me</motion.a></motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>


  )
}
