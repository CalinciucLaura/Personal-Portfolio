import React from "react"
import "./about.scss"
import { GoPerson } from "react-icons/go";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
    // initial: {
    //     y: 0,
    //     opacity: 0,
    // },

    // animate: {
    //     y: 0,
    //     opacity: 1,
    //     transition: {
    //         type: 'spring',
    //         stiffness: 100,
    //         damping: 15,
    //         mass: 1,
    //         restSpeed: 0.01,
    //         restDelta: 0.01,
    //     },
    // },

    // scrollText: {
    //     opacity: 1,
    //     y: -100,
    //     transition: {
    //         duration: 2
    //     },
    // },

    hidden: { opacity: 0, y: 100 },
    up: { opacity: 1, y: -50, transition: { duration: 0.5 } },
    show: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            mass: 1,
            restSpeed: 0.01,
            restDelta: 0.01,
            duration: 2
        },
    },
};

const parentVariants = {
    initial: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    animate: {
        transition: { staggerChildren: 0.5, delayChildren: 0.2 }
    }
};



const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (
        <motion.div className="about" ref={ref} variants={parentVariants} initial="hidden" animate={inView ? ["up", "show"] : "hidden"}>
            <motion.h4 variants={textVariants}>
                <GoPerson style={{ marginRight: '10px' }} />
                ABOUT
            </motion.h4>
            <motion.h2 variants={textVariants}> Every great design begin with an even <span>better story</span></motion.h2>
            <motion.p variants={textVariants}>Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</motion.p>
        </motion.div>
    )
};

export default About;
