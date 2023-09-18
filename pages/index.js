import VideoBg from '../components/backgroundVideo/bgvideo';
import Card from '../components/Card/card';
import GlitchText from '../components/glitchEffect/glitch';
import Side from '../components/Sidebyside/sidebyside';
import Volunteer from '../components/Volunteer/volunteer';
import Position from '../components/PositionOfResponsibility/position';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
  });

  document.addEventListener('click', e => {
      cursor.classList.add("expand");
      setTimeout(() => {
          cursor.classList.remove("expand");
      }, 500);
});

  })
  return (
    <div>
      <Navbar />
      <VideoBg></VideoBg>
      <div className="cursor">
        <div className='dot'></div>
      </div>
      <GlitchText></GlitchText>
      <Card marginLeft="5%" />
      <Side />
      {/* <Skills /> */}
      <Volunteer />
      <Position />
      <Footer />
    </div>
  )
}
