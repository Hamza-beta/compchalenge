import About from './About';
import './App.css';
import Contact from './contact';
import Footer from './footer';
import Navbar from './navbar';
import Projects from './Projects';

function App() {
  const projm=[{projtitle:'Project 1',pimg:'/project1.jpg',descript:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.`},
  {projtitle:'Project 2',pimg:'/project2.jpg',descript:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.`},
  {projtitle:'Project 3',pimg:'/project3.jpg',descript:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.`},
  {projtitle:'Project 4',pimg:'/project4.jpg',descript:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.`}]
  return (
  <div className="App">
  <header className="App-header"> </header>
  <Navbar className="navmenu" ></Navbar>
     <body>
    <About name='Jhon Doe' img='/pic.jpg'></About>
    <Projects projm={projm} ></Projects>
    <Contact></Contact>
    <Footer  signiture='GOMYCODE 2020'></Footer>
      </body>
    </div>
  )
}
export default App;
