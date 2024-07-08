import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { GithubIcon } from '@/components/icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../../public/images/projects/DigiNotes.png";
import project3 from "../../public/images/projects/Green-Grocery-Store.png";
import project4 from "../../public/images/projects/Ecommerce.png";
import project5 from "../../public/images/projects/Shopmart-Admin-Dashboard.png";
import project6 from "../../public/images/projects/speechtotextgenerator.png";
import project7 from "../../public/images/projects/Weather-website.png";
import project8 from "../../public/images/projects/Tolist.png";
import {motion} from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);


const FeaturedProject=({type,title,summary,img,link,github})=>{
    return(
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl  dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
    
        <Link href={link} target="_blank" 
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' 
        >
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
        />
        </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2 ' >
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>

            </Link>
             <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
             <div className='mt-2 flex items-center'>
             <Link href={github} target="_blank" className='w-10' ><GithubIcon /></Link>
             <Link href={link} target="_blank"
             className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
             >Visit Project</Link>
             </div>
        </div>
        </article>
    )
}

const Project =({title,type,img,link,github,summary}) =>{
    return(
      <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 '>

         <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>

         <Link href={link} target="_blank" 
        className='w-full cursor-pointer overflow-hidden rounded-lg' 
        >
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          priority 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2 ' >
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>

            </Link>
                          <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

             <div className='w-full mt-2 flex items-center justify-between'>
             <Link href={link} target="_blank"
             className='text-lg font-semibold underline md:text-base'
             >Visit</Link>
             <Link href={github} target="_blank" className='w-8 md:w-6' >
                
                <GithubIcon />{" "}
                </Link>
             
             </div>
        </div>
      </article>
    )
}

const Projects = () => {
  return (
   <>
    <Head>
        <title>Projects Page</title>
        <meta name="description" content="any description" />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light '>
    <Layout className='pt-16'>
    <AnimatedText text="Imagination Trumps Knowledge!"
    className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
    />  
    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>
        <div className='col-span-12'>
            <FeaturedProject
            title="E-Commerce Store"
            img={project4}
            summary="It is dynamic E Commerce Website developed using ReactJS, ExpressJS, NodeJS, MongoDB with Stripe Payment Integration and Admin Control Panel,Order Receipt Generation through email using NodeMailer,amazing product search filters and many more"
            link="https://ecommerce-gold-chi-50.vercel.app/"
            github="https://github.com/Praniket-Utturkar/ecommerce"
            type="ReactJS, ExpressJS, NodeJS, MongoDB, Stripe"
            />
        </div>
       
        <div className='col-span-6 sm:col-span-12'>
        <Project
            title="Green Grocery Store - An E-Commerce Website"
            img={project3}
            summary="It is the online grocery selling website.It is the static website developed using HTML and CSS. 
"
            link="https://github.com/Praniket-Utturkar/Green-Grocery-Store/tree/master"
            github="https://github.com/Praniket-Utturkar/Green-Grocery-Store/tree/master"
            type="HTML , CSS"
            />
        </div>

        {/* <div className='col-span-12'>
        <FeaturedProject
            title="Crypto Screener Application"
            img={project1}
            summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
            link="/"
            github="/"
            type="Featured Project"
            />
        </div> */}
        <div className='col-span-6 sm:col-span-12'>
        <Project
            title="ShopMart Admin Dashboard"
            img={project5}
            summary="It is admin Panel which includes one Dashboard, 3 Pages, 4 Apps, and 7 fully functional charts.It is developed using React.js and Syncfusion - UI Component Suite"
            link="https://github.com/Praniket-Utturkar/Admin_Dashboard"
            github="https://github.com/Praniket-Utturkar/Admin_Dashboard"
            type="ReactJS, Syncfusion"
            />
        </div>
        <div className='col-span-6 sm:col-span-12'>
        <Project
            title="DigiNotes - Android App"
            img={project2}
            summary="It contains email authentication and email verification with realtime database.Notes can be accessed from any device.It is developed using Java, XML with Firebase as a database. "
            link="/DigiNotes.apk"  
            github="https://github.com/Praniket-Utturkar/DigiNotes"
            type="Java, XML, Firebase"
            />
        </div>
        <div className='col-span-6 sm:col-span-12'>
        <Project
            title="Speech to Text Generator"
            img={project6}
            summary="This website converts speech from the microphone to text with copy to clipboard function using Clipboard API.It is developed using React.js."
            link="https://github.com/Praniket-Utturkar/SpeechToTextGenerator"
            github="https://github.com/Praniket-Utturkar/SpeechToTextGenerator"
            type="ReactJS"
            /> 
        </div>
        <div className='col-span-6 sm:col-span-12'>

        <Project
            title="Weather Website"
            img={project7}
            summary="This website shows the day, date and time and current temperature in °C of Pune City, Maharashtra, India.It is developed using HTML, CSS, JavaScript and Node.js"
            link="https://github.com/Praniket-Utturkar/Weather_Website"
            github="https://github.com/Praniket-Utturkar/Weather_Website"
            type="HTML, CSS, JavaScript,Node.js"
            /> 
        </div>
        <div className='col-span-6 sm:col-span-12'>
        <Project
            title="To-Do List"
            img={project8}
            summary="This project is a simple to-do list application built with ReactJS. The application allows users to add, edit, delete, and filter tasks. Tasks are saved to local storage to persist across page reloads."
            link="https://github.com/Praniket-Utturkar/todo-list"
            github="https://github.com/Praniket-Utturkar/todo-list"
            type="ReactJS"
            /> 
            </div>
        
        
    </div>  
    </Layout>    
    </main>
   </>
  )
}

export default Projects
