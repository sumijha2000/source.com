
import React from 'react'
import './Programs2.css'
import programimg from '../../assets/Rectangle 22.svg'
import programimg2 from '../../assets/Frame 8.svg'
import programimg3 from '../../assets/Frame 9.svg'
import programimg4 from '../../assets/Frame 10.svg'


const Programs2 = () => {
  return (
    <div className='promgms-container'>
        <div className="program">
            <div className="sidebar">
            <h2>Sidebar</h2>
        <ul>
            <li>Business & Economy</li>
            <li>Food & Cuisine</li>
            <li>Science</li>
            <li>Communication</li>
            <li>FashionTrends</li>
            <li>HealthWellness</li>
            <li>Sports</li>
            <li>Politics</li>
            <li>Environment</li>
            <li>CultureEntertainment</li>
        </ul>
        </div>
            </div>
       
         <div className="program">
            <img src={programimg} alt="technology" />
            <button className='btn-1'>View More</button>
            <p className='sub-title'><b>Technology:</b>
             Welcome to our digital time capsule! Explore the highlights of technological innovation from 2024.</p>
        </div>

        <div className="program">
            <img src={programimg2} alt="img2" />
            <button className='btn-1'>View More</button>
            <p className='sub-title'><b>Fashion & Trends:</b>
             Fashion and trends are fascinating reflections of culture, creativity, and self-expression. </p>
        </div>

        <div className="program">
            <img src={programimg3} alt="img3" />
            <button className='btn-1'>View More</button>
            <p className='sub-title'><b>Transportation:</b>
             Transportation is an essential part of modern life, shaping how we move, interact, and experience the world around us.</p>
        </div>

        <div className="program">
            <img src={programimg4} alt="img4" />
            <button className='btn-1'>View More</button>
            <p className='sub-title'><b>Medicine:</b>
             Medicine is a dynamic field dedicated to improving human health and well-being through research, innovation, and patient care.
            </p>
        </div> 
        
    </div>
  )
}

export default Programs2