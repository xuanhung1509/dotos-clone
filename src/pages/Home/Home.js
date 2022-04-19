import './Home.style.scss';
import Showcase from './components/Showcase/Showcase';
import Features from './components/Features/Features';
import About from './components/About/About';
import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';
import Donate from './components/Donate/Donate';

function Home() {
  return (
    <>
      {/* <Header /> */}
      <Showcase />
      <Features />
      <About />
      <Team />
      <FAQ />
      <Donate />
    </>
  );
}

export default Home;
