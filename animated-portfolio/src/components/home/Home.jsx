import React from "react"
import "./home.scss"
import { motion } from "framer-motion";
import scrollImage from "./scroll.png"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 30,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const Home = () => {
    return (
        <div className="home">
            <div className="intro">
                <h1>Hi, I'm <span>Laura </span><br /> Computer Science <br /> Student and Developer</h1>
                <p>I design and code beautifully simple things and i love what i do. <br /> Just simple like that!
                </p>

                <motion.img variants={textVariants} animate="scrollButton" src={scrollImage} alt="" />

            </div>

        </div>
    )
};

export default Home;
