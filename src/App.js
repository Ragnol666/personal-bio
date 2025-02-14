import React from 'react';
import './App.css';
import { motion, MotionConfig, time } from "framer-motion";



function App() {
  
  return (
    <div className="App">

      <Header />
      <About />
      <Projects />
      <Slider/>

      <Resume/>
      <onButtonClick/>
      <Contact />
      <Footer/>


    </div>
  );
}




const Header = () => {
  const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds()
  return (

    <header className="">
      <div class ="">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">GDG</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#resume">Resume</a>
        </li>    
      
      </ul>
    </div>
  </div>
</nav>
      
      <div class="jumbotron">
      <motion.img animate={{rotateZ:360}} src="gilbert.jpeg" alt="Profile" className="rounded" />

      
<div id="trailer" class="section d-flex justify-content-center embed-responsive embed-responsive-21by9">
  <video class="embed-responsive-item" controls autoplay loop muted>
<source src="intro.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
</div>
      
<strong><motion.h1   
animate={{rotatez:360}}>Dr Gilbert D.George</motion.h1></strong>

      <motion.h2 
      animate={{fontSize:50,color:'skyblue',x:60,y:60}}>Welcome to my personal bio website! Let’s connect!</motion.h2></div></div>
    </header>
  );
};



const onButtonClick = () => {
 // using Java Script method to get PDF file
 fetch("SamplePDF.pdf").then((response) => {
  response.blob().then((blob) => {
  
      // Creating new object of PDF file
      const fileURL =
          window.URL.createObjectURL(blob);
          
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "SamplePDF.pdf";
      alink.click();
  });
});
return (
  <>
      <center>
          <h1>Welcome to Geeks for Geeks</h1>
          <h3>
              Click on below button to download PDF
              file
          </h3>
          <button  class="btn btn-primary" onClick={onButtonClick}>
              Download PDF
          </button>
      </center>
  </>
);
};

const Slider =() =>{
  return(

   <h1>志趣相投，成就更多</h1>
  );
};

const About = () => {
  return (
   
      <section id="about" class=" bg-ligt" >
        <div class ="">
<div class="mt-4 p-5 bg-dark text-white rounded" style={{ backgroundImage: + 'url(think.jpeg)'}}>
  <h1>About </h1>
  <p>Dr Gilbert George is a dedicated and accomplished computer science
lecturer with a passion for both teaching and research. With over a decade of
experience in academia and industry, he brings a wealth of knowledge and
expertise to the classroom, inspiring students and contributing to the field of
computer science.</p>
</div></div>

    </section>
  );
};

const Projects = () => {
  return (
    <section className="">

<div class ="">
<div class="mt-4 p-5 bg-info text-white rounded">
  <h1>Application Projects </h1>
      <img src="octagon.png" class="rounded" alt="Cinque Terre"/>
      <a href="https://www.octagoncybersecurity.ng/" class="btn btn-success">View</a>
</div></div>
      

     
    </section>
  );
};




const Resume = () => {
  return (
    <section id="resume" class="">
      <div class="mt-4 p-5 bg-dark text-white rounded">
       <div class="">
   
    
    <motion.div transition={{ type: "spring" }} animate={{ scale: 1 }} > <h2 class="mb-4">Gilbert George - Curriculum Vitae</h2>   </motion.div>
    <table class=".table-dark"/>
      <tbody/>
        <tr>
          <th scope="row" style={{width: + '25%'}}>Name</th>
          <td>Gilbert George</td>
        </tr>
        
        <tr>
          <th scope="row">Phone</th>
          <td>+2349059903718</td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td><a href="mailto:gilbertgeorge007@gmail.com" class="btn btn-primary ">gilbertgeorge007@gmail.com</a></td>
        </tr>
        <tr>
          <th scope="row">Objective</th>
          <td>
            I am a dedicated and enthusiastic lecturer with a passion for fostering an engaging and inclusive learning environment. Committed to delivering high-quality education and cultivating critical thinking skills in students. Seeking to contribute my expertise in cybersecurity and computer science to an academic institution that values innovative teaching methods, research, and student development.
          </td>
        </tr>
        <tr>
          <th scope="row">Education</th>
          <td>
            <ul class="list-unstyled mb-0">
              <li><strong>PhD in Computer Science :</strong> Nile University, Abuja, Nigeria</li>
              <li><strong>MSc in Cybersecurity, Threat Intelligence and Forensics:</strong> University of Salford, Manchester, United Kingdom</li>
              <li><strong>BSc in Computer Science (Information Technology):</strong> Baze University, Abuja </li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">Certifications</th>
          <td>
            <ul class="list-unstyled mb-0">
              <li>Certified Cisco instructor (CCNA1-3), Date: 12, 2021</li>
              <li>CCNA: Enterprise Networking, Security, and Automation</li>
              <li>CCNA: Switching, Routing, and Wireless Essentials</li>
              <li>CCNA: Introduction to Networks</li>
              <li>OPSWAT Introduction to Critical Infrastructure Protection (ICIP)</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">Work Experience</th>
          <td>
            <ul class="list-unstyled mb-0">
              <li><strong>Baze University, Lecturer</strong>  Abuja, Nigeria (2018 - Present)</li>
              <li>
                <strong>Responsibilities:</strong>
                <ul>
                  <li>Lecture students in Programming, Cybersecurity, Project management, and Database Courses.</li>
                  <li>Supervise undergraduates and postgraduates in project development.</li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">Skills</th>
          <td>
            <ul class="list-unstyled mb-0">
              <li>Cisco Router configurations</li>
              <li>Python, Java, Ionic, ReactJS and Dart programming</li>
              <li>Data analysis</li>
              <li>Penetration testing and threat intelligence surveillance</li>
              <li>Security operation center monitoring and development</li>
              <li>Database management and web design</li>
              <li>Artificial intelligence development</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">Projects</th>
          <td>
            <ul class="list-unstyled mb-0">
              <li>Worked on the First National Biosafety Policy with the National Biosafety Management Agency (NBMA) – 2022</li>
              <li>Worked on the Information Technology and Innovation and Research (ITIR) hackathon in Baze University – On-going</li>
              <li>Worked with the Joint Admission and Matriculation Board, as a proctor in Jamb HQ – 2021</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">Awards and Honors</th>
          <td>
            <ul class="list-unstyled mb-0">
              <li>Commendation from the DG NBMA for contribution to the national policy development</li>
              <li>Commendation from the Vice Chancellor, Baze University for contribution to the national policy development for NBMA</li>
              <li>Merit award from the Vice Chancellor, Baze University for contribution to the ITIR Hackathon</li>
              <li>Recognition from the Vice Chancellor of Salford University, Manchester – 2017</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">Volunteer Experience</th>
          <td>Member (Enactus) – Non-Profit Organization supporting the needy and most vulnerable</td>
        </tr>
        <tr/>
          <td/>
          <motion.p  animate={{color:'red', rotateZ:360}}> <span class="glyphicon glyphicon-envelope"></span> <a href="CV.pdf" class="btn btn-primary">Download CV </a></motion.p>
          </div>
          </div>

    </section>
  );
};

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <motion.p  animate={{color:'red', rotateZ:360}}> <span class="glyphicon glyphicon-envelope"></span> <a href="mailto:gilbertgeorge007@gmail.com" class="btn btn-primary">Email ME</a></motion.p>

      <motion.p animate={{color:'blue', rotateZ:360}}> <a href="https://www.linkedin.com/in/gilbert-george-b904b6103/" class="btn btn-success" target="_blank" rel="noopener noreferrer">LinkedIn</a></motion.p>
      <motion.p  animate={{color:'red', rotateZ:360}}><a href="https://scholar.google.com/citations?user=l9Ti5boAAAAJ&hl=en" class="btn btn-warning">Google Scholar</a></motion.p>
      <motion.p  animate={{color:'red', rotateZ:360}}><a href="https://independent.academia.edu/GilbertGeorge3" class="btn btn-danger">Academia</a></motion.p>
 

    
    </section>
  );
};


const Footer = () => {
  const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds()
  return (
    <section className="footer">
    <footer class="bg-dark">
  <div class="container p-4 pb-0">

    <section class="mb-4">
     
      <a
      data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{color: + 'red'}}
        href="#!"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

    
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{color: + 'blue'}}
        href="#!"
        role="button"
        ><i class="fab fa-twitter"></i
      ></a>


      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{color: + 'green'}}
        href="#!"
        role="button"
        ><i class="fab fa-google"></i
      ></a>


      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{color: + 'yellow'}}
        href="#!"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{color: + 'blue'}}
        href="#!"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
   
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{color: + 'yellow'}}
        href="#!"
        role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
 
  </div>
  <div class="bg-primary" style={{color: + 'red'}}>
  <motion.h1 animate={{color:'red', transition:-200}}>{showTime}</motion.h1>
    <a class="text-body" href="#">Gilbert George</a>
  </div>
  <motion.div animate={{ color:'pink' }}> <motion.h1 animate={{scale:1}} >You Rock</motion.h1></motion.div>

</footer>
      
    
    </section>
  );
};





export default App;
