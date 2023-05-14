import './App.css';
import Hero from './Components/Hero';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reason from './Components/Reasons/Reason';
import Testimonials from './Components/Testimonials/Testimonials';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reason/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
