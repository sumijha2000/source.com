import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Blog.css';
import blogimg from '../../assets/unsplash_8-0VfQfdbws.svg';
import blogimg1 from '../../assets/unsplash_8-0VfQfdbws (1).svg';
import blogimg2 from '../../assets/unsplash_8-0VfQfdbws (2).svg';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className='blogs-news'>
        <div className="blogimg">
          <img src={blogimg} alt="" />
          <h4>Solar-Powered Water Desalination Device by <b>Dr. Maria Fernandez</b></h4>
          <p>Published on May 3, 2024 Dr. Maria Fernandez, a renowned environmental scientist, has developed a revolutionary solar-powered water desalination device. This device utilizes sunlight to convert seawater into fresh water, offering a sustainable solution to water scarcity in coastal regions.</p>
          <button className='blog-btn'>Archive</button>
        </div>
      <div className="blogimg">
      <img src={blogimg1} alt="" />
      <h4>Solar-Powered Water Desalination Device by
          <b>Dr. David Chen</b></h4>
          <p>Published on April 25, 2024</p>
           <p> Dr. David Chen, a leading expert in biomechatronics, has unveiled an innovative AI-powered prosthetic limb.</p>
            <p>This prosthetic limb is equipped with advanced sensors and machine learning algorithms that enable it to adapt to the user's movements in real-time.</p>
            <button className='blog-btn'>Archive</button>
      </div>
       <div className="blogimg">
      <img src={blogimg2} alt="" />
      <h4>Biodegradable Plastic Alternative by
          <b>Dr. Emily Johnson</b></h4>
          <p>Published on April 30, 2024</p>
           <p> Dr. Emily Johnson, a materials scientist, has developed a groundbreaking biodegradable plastic alternative derived from plant-based materials.</p>
            <p>This eco-friendly alternative to traditional plastics offers similar performance properties while being fully compostable.</p>
            <button className='blog-btn'>Archive</button>
      </div>
      <div className="blogimg">
      <img src={blogimg2} alt="" />
      <h4>Biodegradable Plastic Alternative by
          <b>Dr. Emily Johnson</b></h4>
          <p>Published on April 30, 2024</p>
           <p> Dr. Emily Johnson, a materials scientist, has developed a groundbreaking biodegradable plastic alternative derived from plant-based materials.</p>
            <p>This eco-friendly alternative to traditional plastics offers similar performance properties while being fully compostable.</p>
            <button className='blog-btn'>Archive</button>
      </div>
      <div className="blogimg">
      <img src={blogimg2} alt="" />
      <h4>Biodegradable Plastic Alternative by
          <b>Dr. Emily Johnson</b></h4>
          <p>Published on April 30, 2024</p>
           <p> Dr. Emily Johnson, a materials scientist, has developed a groundbreaking biodegradable plastic alternative derived from plant-based materials.</p>
            <p>This eco-friendly alternative to traditional plastics offers similar performance properties while being fully compostable.</p>
            <button className='blog-btn'>Archive</button>
      </div>
      <div className="blogimg">
      <img src={blogimg2} alt="" />
      <h4>Biodegradable Plastic Alternative by
          <b>Dr. Emily Johnson</b></h4>
          <p>Published on April 30, 2024</p>
           <p> Dr. Emily Johnson, a materials scientist, has developed a groundbreaking biodegradable plastic alternative derived from plant-based materials.</p>
            <p>This eco-friendly alternative to traditional plastics offers similar performance properties while being fully compostable.</p>
            <button className='blog-btn'>Archive</button>
      </div>
      <div className="blogimg">
      <img src={blogimg2} alt="" />
      <h4>Biodegradable Plastic Alternative by
          <b>Dr. Emily Johnson</b></h4>
          <p>Published on April 30, 2024</p>
           <p> Dr. Emily Johnson, a materials scientist, has developed a groundbreaking biodegradable plastic alternative derived from plant-based materials.</p>
            <p>This eco-friendly alternative to traditional plastics offers similar performance properties while being fully compostable.</p>
            <button className='blog-btn'>Archive</button>
      </div>
      <div className="blogimg">
      <img src={blogimg2} alt="" />
      <h4>Biodegradable Plastic Alternative by
          <b>Dr. Emily Johnson</b></h4>
          <p>Published on April 30, 2024</p>
           <p> Dr. Emily Johnson, a materials scientist, has developed a groundbreaking biodegradable plastic alternative derived from plant-based materials.</p>
            <p>This eco-friendly alternative to traditional plastics offers similar performance properties while being fully compostable.</p>
            <button className='blog-btn'>Archive</button>
      </div>
      <div className="blogimg">
      <img src={blogimg2} alt="" />
      <h4>Biodegradable Plastic Alternative by
          <b>Dr. Emily Johnson</b></h4>
          <p>Published on April 30, 2024</p>
           <p> Dr. Emily Johnson, a materials scientist, has developed a groundbreaking biodegradable plastic alternative derived from plant-based materials.</p>
            <p>This eco-friendly alternative to traditional plastics offers similar performance properties while being fully compostable.</p>
            <button className='blog-btn'>Archive</button>
      </div>
      <div className="blogimg">
          <img src={blogimg} alt="" />
          <h4>Solar-Powered Water Desalination Device by <b>Dr. Maria Fernandez</b></h4>
          <p>Published on May 3, 2024 Dr. Maria Fernandez, a renowned environmental scientist, has developed a revolutionary solar-powered water desalination device. This device utilizes sunlight to convert seawater into fresh water, offering a sustainable solution to water scarcity in coastal regions.</p>
          <button className='blog-btn'>Archive</button>
        </div>
      </div>
       <Footer></Footer>
    </div>
  )
}

export default Blog