import React, { useEffect } from 'react';
import '../styles/Services.css';
import { Link } from 'react-router-dom';
import { FaCode, FaMobileScreen } from "react-icons/fa6";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";


const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='services'>
        <div className='services-container'>
            <div className='services-box'>
                <h3>Development</h3>
                <FaCode className='services-icon'/>
                <p>" A development service is not only about creating technological solutions, but also involves understanding the customers' needs and analyzing their challenges, providing continuous support to ensure the continued growth and development of the provided solutions"</p>
            </div>
            <div className='services-box'>
                <h3>Clean Code</h3>
                <BsCheckCircle className='services-icon'/>
                <p>"Writing clean code is a journey, not a destination. It requires discipline, patience, and constant effort to ensure that your code is readable, maintainable, and scalable. By adopting best practices, reducing complexity, and emphasizing clarity, you can create code that not"</p>
            </div>
            <div className='services-box'>
                <h3>Responsive</h3>
                <FaMobileScreen className='services-icon'/>
                <p>"Response design is a crucial factor in determining the quality of user experience on a website, and it requires attention to different elements such as color schemes, icons, fonts, and element arrangement to improve usability and enable effective interaction with the website"</p>
            </div>
            <div className='services-box'>
                <h3>Maintenance</h3>
                <IoIosSettings className='services-icon'/>
                <p>"User interface maintenance is essential for maintaining the safety and attractiveness of applications and websites. This maintenance includes many activities such as fixing errors and defects, updating content, and improving the overall user experience. Therefore, focusing on user interfaces"</p>
            </div>
        </div>
        <Link className='services-link' to='/projects'>view projects</Link>
    </div>
  )
}

export default Services;