import Testimonials from "./components/Testimonials";
import reviews from "./data"; 
import "./index.css";

const App = () => {

  return (
    <div className="body">
      <div className="container">
        <div className="Heading-box">
          <h1>Testimonial</h1>
          <div className="underline"></div>
        </div>
        <div className="testimonial-box">
          <Testimonials data ={reviews}></Testimonials>
        </div>
      </div>
    </div>
  )
};

export default App;
