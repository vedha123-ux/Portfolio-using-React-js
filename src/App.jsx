import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
const App = () => {
  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </>
  );
};

export default App;

