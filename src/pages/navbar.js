import React, { useEffect, useRef, useState } from "react";  
import { Spring } from "react-spring";  
import './Navbar.css';

const Navbar = () => { 
    const [show, setShow] = useState(true)
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        var lasstScrollTop = 0;
        const navbar = document.querySelector('.nav')
        window.addEventListener("scroll", function () {
            var srollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;

            if (srollTop > lasstScrollTop) {
                navbar.style.top = '-133px';
            }else{
                navbar.style.top = '0';
            }
            lasstScrollTop = srollTop;
        });
        const navLinks = document.querySelectorAll(".nav_content-item");
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navItemFade ease forwards 0.5s  ${index / 7 + 0.5}s`;
            }
            console.log(link.style.animation)
        });
    },)

    const openBurger = event => {
        setIsActive(current => !current);
    };

    return (
        <div className={` ${show && 'nav'}`}>
            <div className="logo">
                <a href="#">
                    <img src="./assets/images/favio.png" alt="" />
                </a>
            </div>
            <ul id="nav" className={isActive ? 'nav_content-list nav-active' : 'nav_content-list'} onClick={openBurger}>
                <li className="nav_content-item">
                    <a href="#about">About</a>
                </li>
                <li className="nav_content-item">
                    <a href="#photos">Photos</a>
                </li>
                <li className="nav_content-item">
                    <a href="#services">Services</a>
                </li>
                <li className="nav_content-item">
                    <a href="#blogs">Blogs</a>
                </li>
                <li className="nav_content-item">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div id="burger" className={isActive ? 'burger toggle' : 'burger'} onClick={openBurger}>
                <div className="line1" />
                <div className="line2" />
                <div className="line3" />
            </div>
        </div>
        
    );
}

export default Navbar;