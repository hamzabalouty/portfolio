import React, { useEffect } from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';
import Image from '../assets/Picsart_23-04-28_18-36-02-526.28877b63ef734c74d21f.png'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='about'>
        <div className='about-container'>
            <div className='about-image'>
                <img src={Image} alt='image'/>
            </div>
            <div className='about-content'>
                <h3>About Me</h3>
                <p>I am a Front-end Developer and I have the necessary skills to convert designs into dynamic and attractive web pages that add value to the user experience. Using modern design and development tools and technologies, I can improve and simplify user interfaces and make them easy to use with an engaging user experience. With my expertise and knowledge of modern programming languages, I am capable of developing dynamic web applications using modern frameworks and API technologies while ensuring compatibility with different browsers.</p>
                <Link to='/contact' className='about-btn'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default About;