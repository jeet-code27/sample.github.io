import { useEffect, useState } from "react";
import Container from "./Container";

//AOS
import AOS from 'aos';
import "aos/dist/aos.css"


  // framer-motion
  import {motion} from "framer-motion";


function App() {
const[rotate, setRotate] = useState(false);
useEffect(()=>{
  AOS.init({duration:1200})
})

  return (
    <div>
      <div className="p-4">
        <Container>
          <div className=" text-center md:text-[50px] text-[25px]">
            Frontend Assignment: Using Animations in React App
          </div>
          <div className="text-[20px] font-bold text-right m-4 ">
            By :- Jeetendra Singh Rathore <br /> 
            (WS Cube Tech) <br />
            <a href="https://www.linkedin.com/in/jeetendra-singh-rathore-8ba5772b6/" className="underline">
              LinkedIn
            </a>{" "}
            <br/>
            <a href="https://jeet-code27.github.io/jeetendra.github.io/" className="underline">Portfolio Website</a>
            <br/>
            <a href="https://github.com/jeet-code27/sample.github.io">My Github</a>
          </div>
<hr />
          <div className="md:text-[30px] text-[20px] fade mt-5 ">
            Types of Animations: <br />
            Type 1: Description: Implement a fade-in animation for a specific
            component. <br /> Requirements: The component should fade in
            smoothly when it enters the screen.
          </div>
          <span className="font-bold md:text-[30px] text-[20px]">
            Explanation : Fade In animation is used in the above text with the
            help of fadeIn animation and key frame property in css
          </span>
        </Container>
      </div>

      <Container className="flex justify-center flex-col items-center mt-5 ">
        <div
          className="border md:h-[400px] md:w-[500px] h-[250px] w-[250px] flex justify-center items-center md:text-[50px] fade bg-white rounded-[36px] mt-5 text-center"
          data-aos="fade-up">
          Fully Responsive Website
        </div>
        <div
          className="border md:h-[400px] md:w-[500px] h-[250px] w-[250px] flex justify-center items-center md:text-[50px] fade bg-white rounded-[36px] mt-5 text-center"
          data-aos="fade-up">
          On Scroll Fade In and up Animation
        </div>
        <div
          className="border md:h-[400px] md:w-[500px] h-[250px] w-[250px] flex justify-center items-center md:text-[50px] fade bg-white rounded-[36px] mt-5 text-center"
          data-aos="fade-up">
          On Scroll Fade In and up Animation
        </div>
        <span className="font-bold md:text-[30px] text-[20px] mt-14 m-4">
          Explanation: In this part, I had used the AOS library for fade-up
          animation. AOS (Animate On Scroll) library provides easy-to-implement,
          smooth scroll animations for web elements.
        </span>
      </Container>

      <Container className="mt-14 p-4 ">
        <div className="md:text-[30px] text-[20px] ">
          Type 2: Description: Implement a slide-in animation for a list of
          items. <br /> Requirements: When the list of items loads, each item
          should slide in from left to right with a slight delay between each
          item.
        </div>
        <span className="font-bold md:text-[30px] text-[20px] mt-14">
          Explanation: In this part, I had also used the AOS library for fade-up
          animation. AOS (Animate On Scroll) library provides easy-to-implement,
          smooth scroll animations for web elements.
        </span>
      </Container>

      <Container>
        <ul className=" w-[150px]  m-6">
          <li
            className="border border-black rounded-3xl bg-white p-4 m-2"
            data-aos="fade-right"
            data-aos-duration="3000">
            Item 1
          </li>
          <li
            className="border border-black rounded-3xl bg-white p-4 m-2"
            data-aos="fade-right"
            data-aos-duration="5000">
            Item 2
          </li>
          <li
            className="border border-black rounded-3xl bg-white p-4 m-2"
            data-aos="fade-right"
            data-aos-duration="9000">
            Item 3
          </li>
          <li
            className="border border-black rounded-3xl bg-white p-4 m-2"
            data-aos="fade-right"
            data-aos-duration="12000">
            Item 4
          </li>
          <li
            className="border  border-black rounded-3xl bg-white p-4 m-2"
            data-aos="fade-right"
            data-aos-duration="15000">
            Item 5
          </li>
        </ul>
      </Container>

      <Container className="mt-14 p-4 ">
        <div className="md:text-[30px] text-[20px] ">
          Type 3: Description: Implement a rotation animation for a button.{" "}
          <br />
          Requirements: When the button is pressed, it should rotate 360 degrees
          and return to its original position.
        </div>
        <span className="font-bold md:text-[30px] text-[20px] mt-14">
          Explanation: In this animation, I had used the Framer Motion library,
          which is very helpful for animation and easy to use. It makes adding
          animations simple and supports features like keyframes and gestures,
          perfect for lively interfaces..
        </span>
      </Container>

      <Container className="flex justify-center m-4 mb-16">
        <motion.button
          animate={{ rotate: rotate ? 360 : 0 }}
          transition={{ type: "tween", duration: 2 }}
          onClick={() => {
            setRotate(!rotate);
          }}
          className="border bg-white p-4">
          Click me to Rotate !!
        </motion.button>
      </Container>

      <Container></Container>
    </div>
  );
}

export default App;
