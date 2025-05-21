import React, { use, useRef } from 'react'


import {motion,useScroll} from "framer-motion"
import LiIcon from './LiIcon'





const Details = ({position,company,companyLink,time,address,work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
       <LiIcon reference={ref}/>
        <motion.div
           initial={{y:50}}
           whileInView={{y:0}}
           transition={{duration:0.5,type:"spring"}}        
        > 
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} 
            target="_blank" className='text-primary dark:text-primaryDark capitalize' >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
           
            <motion.div 
            style={{scaleY:scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            '/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
               <Details 
                position="Python/AI Developer Intern" company="Tacticone"
                companyLink="https://www.tacticone.co/"
                time="15th Jan 2025 - 15th May 2025"  address="Pune, Maharashtra, India | Onsite"
               work=" Developed AI based full stack web application using CrewAI Framework, FastAPI, Next.js, and Supabase (PostgreSQL).Enhanced SEO strategies by creating AI agents within a full-stack AI-powered web application (Erlin AI) to help clients analyze and optimize their SEO rankings."
                />
                <Details 
                position="ReactJS Summer Intern" company="Celebal Technologies"
                companyLink="https://celebaltech.com/"
                time="20th May 2024 - 20th July 2024"  address="Jaipur, Rajasthan, India | Remote"
               work="                   Developed and launched a comprehensive E-Commerce Store Website using ReactJS and the MERN stack.Integrated secure payment method (Stripe payments), leading to a significant increase in successful transactions. Optimized database queries with Mongoose for sorting and filtering, reducing query response time significantly. Automated email invoice generation and reset password emails, enhancing user engagement effectively."
                />  
                <Details 
                position="Web Developer Intern" company="Oasis Infobyte"
                companyLink="https://oasisinfobyte.com/"
                time="Oct 2023-Nov 2023"  address="New Delhi, India | Remote"
               work="Worked on various projects such as Temperature Convertor Website, Portfolio, Noise Landing Page. "
                />
              
                
              
            </ul>
        </div>
    </div>

  )
}

export default Experience
