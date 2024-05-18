import React from 'react'
import './Programs3.css'
import inventor1 from '../../assets/Ellipse 10.svg'
import inventor2 from '../../assets/Ellipse 11.svg'
import inventor3 from '../../assets/Ellipse 12.svg'
import inventor4 from '../../assets/Ellipse 13.svg'
import desimg from '../../assets/lstarl.svg'

const Programs3 = () => {
  return (
    <div className='third-sec'>
        <div className="text-th">
            <h1>Inventor Name with their Creations</h1>
        </div>
            <div className="sec-img">
             <img src={inventor1} alt="" />
             <h3>Thomas Edison</h3>
             <img src={desimg} alt="" className='imggg' />
             <p className='pra-graph'>- Electric Light Bulb: Edison's improvements on the incandescent light bulb made it practical for widespread use, contributing significantly to the electrification of cities.

              - Phonograph: Invented in 1877, the phonograph was the first device capable of recording and reproducing sound.

            - Motion Picture Camera: Edison's kinetograph and kinetoscope were early devices for recording and viewing moving pictures.</p>
            </div>
            <div className="sec-img">
             <img src={inventor2} alt="" />
             <h3>Alexander Graham Bell</h3>
             <img src={desimg} alt="" className='imggg' />
             <p className='pra-graph'>
            - Telephone: Bell is credited with inventing the first practical telephone in 1876, revolutionizing communication.

            -Alexander Graham Bell was a Scottish-born Canadian-American inventor, scientist and engineer who is credited with patenting the first practical telephone. He also co-founded the American Telephone and Telegraph Company in 1885.
            </p>
            </div>
            <div className="sec-img">
             <img src={inventor3} alt="" />
             <h3>Nikola Tesla</h3>
             <img src={desimg} alt="" className='imggg'/>
             <p className='pra-graph'>
             - Alternating Current (AC) Electrical System: Tesla's development of alternating current (AC) power transmission paved the way for modern electrical distribution systems.

            - Tesla Coil: This high-voltage transformer circuit is still used today in various applications, including radio transmission and entertainment displays.
            </p>
            </div>
            <div className="sec-img">
             <img src={inventor4} alt="" />
             <h3>Johannes Gutenberg</h3>
             <img src={desimg} alt=""className='imggg' />
             <p className='pra-graph'>
             Printing Press with Movable Type: Gutenberg's invention in the 15th century enabled the mass production of books, revolutionizing communication and education in Europe.
             
             -Johannes Gensfleisch zur Laden zum Gutenberg was a German inventor and craftsman who invented the movable-type printing press. Though movable type was already in use in East Asia, Gutenberg's invention of the printing press enabled a much faster rate of printing. 
             
            </p>
            </div>
            </div>
  )
}

export default Programs3
