import React, {Suspense, useEffect, useRef, lazy} from 'react';
import '../Style/style.css';
import { BsCodeSlash, BsGithub, BsLinkedin, BsEnvelopeFill, BsFillHeartFill } from 'react-icons/bs';
import {gsap, Power4} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loading from '../Component/Loading';
import Work from '../Component/Work';
import Typed from 'react-typed';
import {Nav, Navbar} from 'react-bootstrap';
import code_up from '../Assets/data/code_up.json';
import code_botton from '../Assets/data/code_botton.json';
import works from '../Assets/data/work.json';
import cv from '../Assets/doc/cv.pdf';

export default function Home() {
    gsap.registerPlugin(ScrollTrigger);
    const didAnimate = useRef(false);
    const containerRef = useRef([])
    const timeline = gsap.timeline({defaults:{opacity:0, x:-50, duration:1, ease: Power4.easeOut}})

    useEffect(() => {
        if (didAnimate.current) {
            return;
        }
        didAnimate.current = true;
        const code__up = document.querySelectorAll(".code__up");
        const code__button = document.querySelectorAll(".code__button");
        timeline
            .from(code__up, {stagger: 0.3})
            .from(code__button, {stagger: 0.3}, "-=2")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const callbackFunction = (entries) => {
        const [ entry ] = entries
        if(entry.isIntersecting){
            const id = '#' + entry.target.id;
            window.history.pushState({}, entry.target.innetText, id);
            const enlaces = document.querySelectorAll('#enlaces a');
            enlaces.forEach(enlace => {
				enlace.classList.remove('activo');

				const href = enlace.attributes.href.nodeValue;
				if(href === id){
					enlace.classList.add('activo');
				}
			});
        }

    }

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        }

        const observer = new IntersectionObserver(callbackFunction, options)
        observer.observe(containerRef.current.home)
        observer.observe(containerRef.current.about)
        observer.observe(containerRef.current.portfolio)
        observer.observe(containerRef.current.contact)

    }, [containerRef])

  return (
    <div className='container-main'>
        <Navbar className='navbar' variant="dark" expand="lg">
                <Navbar.Brand href="/"><BsCodeSlash className='navbar-brand navbar__logo' src='' alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" id='enlaces'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <a className='btn navbar__button' href={cv} target="_blank" rel="noopener noreferrer" download="CV.pdf">Download CV</a>
                </Navbar.Collapse>
        </Navbar>
        <div className='container-body'>
            <div className='section-main'>
                <section ref={ref => containerRef.current.home=ref} className='code' id='home'>
                    {code_up.map((cod, key) => (
                        <div key={key} className={cod.code}>
                            {cod.code_list.map((list, key_list) => (
                                <div key={key_list} className={list.className}></div>
                            ))}
                        </div>
                    ))}
          
                    <div className='code__info'>
                        <h1><Typed
                            strings={['EDWIN ROQUE CERROGRANDE']}
                            typeSpeed={40}/>
                        </h1>
                        <span className='descripcion'><Typed
                            strings={[
                                'Web developer',
                                'Full stack developer']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop >
                        </Typed></span>
                    </div>

                    {code_botton.map((cod, key) => (
                        <div key={key} className={cod.code}>
                            {cod.code_list.map((list, key_list) => (
                                <div key={key_list} className={list.className}></div>
                            ))}
                        </div>
                    ))}
                </section>
                
                <section ref={ref => containerRef.current.about=ref} className='work' id='about'>
                    <div className='work__title'>
                        <div className='rectangle work-red work-100'></div>
                        <h1 className='rectangle'>ABOUT</h1>
                    </div>
                    <div className='row work__list'>
                        <div className='col Information'>
                            <h4>¿Quién soy?</h4>
                            <h5>Soy Edwin Roque Cerrogrande, Desarrollador web</h5>
                            <div>Apasionado por el desarrollador de software y en especial el desarrollo web, que me han convertido en una persona con metas claras. Cada dia me levanto con las ganas de aprender nuevos temas y herramientas, esto hace de mi, una persona constante, curioso y sin miedo de enfrentar nuevos retos</div> 
                        </div>
                        <div className='col skills'>
                            <h4>Habilidades</h4> 
                            <div className='row'>
                                <div className='col'>
                                    <img src={require("../Assets/img/html-5.png")} alt='html-5'/>
                                    <p>HTML</p>
                                </div>
                                <div className='col'>
                                    <img src={require("../Assets/img/css-3.png")} alt='css-3'/>
                                    <p>CSS</p>
                                </div>
                                <div className='col'>
                                    <img src={require("../Assets/img/js.png")} alt='javascrip'/>
                                    <p>JAVASCRIPT</p>
                                </div>
                                <div className='col'>
                                    <img src={require("../Assets/img/science.png")} alt='react'/>
                                    <p>REACT JS</p>
                                </div>
                                <div className='col'>
                                    <img src={require("../Assets/img/java.png")} alt='java'/>
                                    <p>JAVA</p>
                                </div>
                                <div className='col'>
                                    <img src={require("../Assets/img/php.png")} alt='php'/>
                                    <p>PHP</p>
                                </div>
                                <div className='col'>
                                    <img src={require("../Assets/img/mysql.png")} alt='mysql'/>
                                    <p>MYSQL</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </section>
                <section ref={ref => containerRef.current.portfolio=ref} className='work' id='portfolio'>
                    <div className='work__title'>
                        <div className='rectangle work-red work-100'></div>
                        <h1 className='rectangle'>PORTFOLIO</h1>
                    </div>
                    <div className='work__list'>
                        <div className='row'>
                           {works.map((work, key) => (
                                <Work work={work} key={key}/>
                           ))}
                        </div>
                    </div>
                </section>
                <section ref={ref => containerRef.current.contact=ref} className='work' id='contact'>
                    <div className='work__title'>
                        <div className='rectangle work-red work-100'></div>
                        <h1 className='rectangle'>CONTACT</h1>
                    </div>
                    <div className='work__list'>
                        <ul>
                            <li>
                                <a href='http://www.github.com/EdwinGit0' target="_blank" rel="noreferrer"><BsGithub /><p>GitHub</p></a>
                            </li>
                            <li>
                                <a href='http://www.linkedin.com/in/edwin-roque' target="_blank" rel="noreferrer"><BsLinkedin /><p>LinkedIn</p></a>
                            </li>
                            <li>
                                <a href={"mailto:edwin.roquecd@gmail.com"} target="_blank" rel="noreferrer"><BsEnvelopeFill /><p>Gmail</p></a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='footer'>
                    <ul>
                        <li>
                            <a href='http://www.github.com/EdwinGit0' target="_blank" rel="noreferrer"><BsGithub /></a>
                        </li>
                        <li>
                            <a href='http://www.linkedin.com/in/edwin-roque' target="_blank" rel="noreferrer"><BsLinkedin /></a>
                        </li>
                        <li>
                            <a href={"mailto:edwin.roquecd@gmail.com"} target="_blank" rel="noreferrer"><BsEnvelopeFill /></a>
                        </li>
                    </ul>
               
                </section>
                <aside>
                    <p className='attribution'>
                        Copyright 2022 all rights reserved this website is made with <BsFillHeartFill /> by Edwin Roque
                    </p>
                </aside>
            </div>
        </div>
    </div>
  )
}
