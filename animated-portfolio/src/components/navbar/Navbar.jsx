import React, { useState } from "react";
import { GoHome, GoPerson } from "react-icons/go";
import { CgBriefcase } from "react-icons/cg";
import { LiaStreamSolid, LiaShapesSolid, LiaGripVerticalSolid, LiaCommentSolid } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import './navbar.scss';

const Navbar = (props) => {
    const [activeIcon, setActiveIcon] = useState('home');

    const handleClick = (icon) => {
        setActiveIcon(icon);
    };

    return (
        <div className="navbar">
            <ul className="dmenu scroll-nav d-flex">
                <li>
                    <a
                        className="scroll-to active"
                        href="#home"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Home"
                        data-tooltip-place="left"
                        onClick={() => handleClick('home')}>
                        <GoHome style={{ color: activeIcon === 'home' ? '#ff99cc' : '#999999' }} />
                    </a>
                </li>
                <li>
                    <a className="scroll-to" href="#about"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="About"
                        data-tooltip-place="left"
                        onClick={() => handleClick('about')}>
                        <GoPerson style={{ color: activeIcon === 'about' ? '#ff99cc' : '#999999' }} />
                    </a>
                </li>
                <li>
                    <a className="scroll-to" href="#resume"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Resume"
                        data-tooltip-place="left"
                        onClick={() => handleClick('resume')}>
                        <CgBriefcase style={{ color: activeIcon === 'resume' ? '#ff99cc' : '#999999' }} />
                    </a>
                </li>
                <li>
                    <a className="scroll-to" href="#services"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Services"
                        data-tooltip-place="left"
                        onClick={() => handleClick('services')}>
                        <LiaStreamSolid style={{ color: activeIcon === 'services' ? '#ff99cc' : '#999999' }} />
                    </a>
                </li>
                <li>
                    <a className="scroll-to" href="#skills"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Skills"
                        data-tooltip-place="left"
                        onClick={() => handleClick('skills')}>
                        <LiaShapesSolid style={{ color: activeIcon === 'skills' ? '#ff99cc' : '#999999' }} />

                    </a>
                </li>
                <li>
                    <a className="scroll-to" href="#portfolio"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Portfolio"
                        data-tooltip-place="left"
                        onClick={() => handleClick('portfolio')}>
                        <LiaGripVerticalSolid style={{ color: activeIcon === 'portfolio' ? '#ff99cc' : '#999999' }} />
                    </a>
                </li>
                <li>
                    <a className="scroll-to"
                        href="#testimonial"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Testimonial"
                        data-tooltip-place="left"
                        onClick={() => handleClick('testimonial')}>
                        <LiaCommentSolid style={{ color: activeIcon === 'testimonial' ? '#ff99cc' : '#999999' }} />
                    </a>
                </li>
                <li>
                    <a className="scroll-to"
                        href="#contact"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Contact"
                        data-tooltip-place="left"
                        onClick={() => handleClick('contact')}>
                        <TfiEmail style={{ color: activeIcon === 'contact' ? '#ff99cc' : '#999999' }} />
                    </a>
                </li>
            </ul>
            <Tooltip id="my-tooltip" />

        </div >
    );
};

export default Navbar;