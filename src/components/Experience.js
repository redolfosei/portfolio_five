import React, { useRef } from 'react'
import {motion,useScroll} from "framer-motion"
import LiIIcon from './LiIIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    
    <LiIIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} 
            target='_blank' className='text-primary capitalize'>@{company}</a></h3>
            <span className='capatilize font-medium text-dark/75 '>
                {time} | {address}
            </span>
            <p className='font-medium w-full '>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center '>
            Experience
        </h2>
        
        <div ref={ref} className='w-[75%] mx-auto relative'>
        
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
            <ul className='w-full flex flex-col items-start justify-between ml-4 '>
                <Details 
                     position="Website Developer" company="Fiverr"
                     companyLink="www.fiverr.com"
                     time="Dec 2017 - Dec 2022" address="Remote"
                     work="I started freelancing in December 2017. I built a lot of websites for clients from different parts of the world.
                    They included people from the United Kingdom, United States, India, Nigeria, France etc. I built using HTML, CSS, Javascript, Wordpress, Shopify etc.
                    I built more than 100+ websites with over 70 happy customers who left 5 stars rating and some of them a very good tip."   
                />

                <Details 
                     position="Technical/Customer Support" company="MyCointainer"
                     companyLink="www.mycointainer.com"
                     time="Jan 2021 - Present" address="Remote"
                     work="I started freelancing in December 2017. I built a lot of website application for clients from different parts of the world.
                     They included people from the United Kingdom, United States, India, Nigeria, France etc. I built using HTML, CSS, Javascript, Wordpress, Shopify etc.
                     I built more than 150+ websites with over 100 happy customers who left 5 stars rating and some of them a very good tip.."   
                />

                <Details 
                     position="Website Developer" company="AETech / Xtreaminnovations"
                     companyLink="https://xtreaminnovations.com/"
                     time="Dec 2017 - Dec 2022" address="Remote"
                     work="I started freelancing in December 2017. I built a lot of websites for clients from different parts of the world.
                    They included people from the United Kingdom, United States, India, Nigeria, France etc. I built using HTML, CSS, Javascript, Wordpress, Shopify etc.
                    I built more than 100+ websites with over 70 happy customers who left 5 stars rating and some of them a very good tip."   
                />

                <Details 
                     position="Website Developer" company="FlairTech"
                     companyLink="www.fiverr.com"
                     time="Dec 2017 - Dec 2022" address="Remote"
                     work="I started freelancing in December 2017. I built a lot of websites for clients from different parts of the world.
                    They included people from the United Kingdom, United States, India, Nigeria, France etc. I built using HTML, CSS, Javascript, Wordpress, Shopify etc.
                    I built more than 100+ websites with over 70 happy customers who left 5 stars rating and some of them a very good tip."   
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience