import VideoBg from '../components/backgroundVideo/bgvideo';
import Card from '../components/Card/card';
import GlitchText from '../components/glitchEffect/glitch';
import Side from '../components/Sidebyside/sidebyside';
import Volunteer from '../components/Volunteer/volunteer';
import Skills from '../components/Skills/skills';
import Position from '../components/PositionOfResponsibility/position';
import Footer from '../components/Footer/footer';
import Navbar from '../components/Navbar/navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <VideoBg></VideoBg>
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
