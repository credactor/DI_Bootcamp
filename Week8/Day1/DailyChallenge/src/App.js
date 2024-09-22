// Build A React Carousel
import './App.css';
import CarouselDemo from "./components/Carousel"
import "./components/Carousel.css"

const items = [
  {name: 'Hong Kong', url: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'},
  {name: 'Macao', url: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp'},
  {name: 'Japan', url: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp'},
  {name: 'Las Vegas', url: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp'}
];

function App() {
  return (
    <div className="App">
      { CarouselDemo (items) }
    </div>
  );
}

export default App;
