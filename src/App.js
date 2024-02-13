
import './App.css';
import Navbar from './component/Navbar';
import Body from './component/Body';
import Testimonial from './component/Testimonials';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
        
        <div className="apps">
        <Navbar/>
        </div>
        
        <Body/>
        <Testimonial/>

        <Footer/>
    </div>
  );
}

export default App;
