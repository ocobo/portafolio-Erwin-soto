import React, { useEffect, useState } from 'react'
import '/src/index.css'
import '/src/App.css'
import {gsap} from "gsap";
import { chCam2 } from "../Slice/Theme";
import { useDispatch } from 'react-redux';



function AboutPage() {
  const [page, setPage]=useState(false)
  const [exp, setExp]=useState(false)
  

  useEffect(()=>{

    if(page){
    gsap.to("#Programming",{
      scale:2,
      xPercent:-30,
      yPercent: 200,
      color: "#38aecc"
    })
    gsap.to("#Algorithm",{
      rotate: 90,
      color: "#ffad52",
      scale:1,
      xPercent:80,
      yPercent: 350
      
    })
    gsap.to("#Software",{
      rotate: -90,
      color: "#ffad52",
      scale:2,
      xPercent:-40,
      yPercent:600
      
    })
    gsap.to("#Documentation",{
      scale:1,
      rotate: -90,
      xPercent:65,
      yPercent:550,
      color: "#38aecc"
  
    })
    gsap.to("#Coding",{
      scale:1.5,
      yPercent:1300,
      xPercent: 50,
      color: "#0090c1"
      
    })
    gsap.to("#Information",{
      scale:0.9,
      yPercent:1200,
      rotate: 90,
      color:"#E5E5E5"
    })
    gsap.to("#Testing",{
      scale:1.6,
      xPercent: 20,
      color: "#77dd77"
    })
    gsap.to("#Computer",{
      scale:1.2,
      xPercent: -90,
      color: "#046e8f",
      duration:0.5
      
    })
    gsap.to("#Debugging",{
      scale:1.2,
      yPercent: 430,
      xPercent: 80,
      color:"#E5E5E5"
    })
    gsap.to("#Design",{
      rotate: 90,
      scale:1.2,
      yPercent: 300,
      xPercent: -80
    })
    gsap.to("#Readability",{
      scale:1.2,
      yPercent: 400,
    })
    gsap.to("#Learning",{
      scale:1.2,
     yPercent:-90,
     xPercent:10,
     color: "#ffad52", 
     
     
    })
    gsap.to("#javascr",{
      scale:1.2,
     yPercent:-50,
     xPercent:-40 ,
     color: "#046e8f",
     
     
    })
    gsap.to("#WebS",{
      scale:1.2,
     yPercent:400,
     xPercent:-40,
     color: "#77dd77" 
     
     
    })
  }
  if(exp){
    gsap.to(".cardsEx",{duration:1, transform:'translateY(125%)'})
    gsap.to(".cardsEx2",{duration:1, transform:'translateX(131%)'})
    gsap.to(".cardsEx3",{duration:1, transform:'translateY(-175%)'})
  }
  

   })

 
  
  return (
   
    <div className='Aboutles' id='Aboutles' >
       <div className="head-skills nav">
            <ul className='buttons'>
            
            <button className="about-text-about" onClick={()=>{
              document.getElementById("cl-about").style.visibility = "visible";
              document.getElementById("cl2-about").style.visibility = "hidden";
              document.getElementById("cl3-about").style.visibility = "hidden";
              setPage(false)
             

              }}> About</button>

              <button className="about-text" onClick={()=>{
              document.getElementById("cl2-about").style.visibility = "visible";
              document.getElementById("cl-about").style.visibility = "hidden";
              document.getElementById("cl3-about").style.visibility = "hidden";
              setPage(true)
              
              console.log("skill prese")
              }}> Skills</button>

              <button className="about-text" onClick={()=>{
              document.getElementById("cl2-about").style.visibility = "hidden";
              document.getElementById("cl-about").style.visibility = "hidden";
              document.getElementById("cl3-about").style.visibility = "visible";
              setPage(false)
              setExp(true)
              }} > Experience</button>
             </ul>
          </div>
        <div className="firts-view" id="cl-about">
        <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--31 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--square" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
            </div>
          <div className="gg">
          <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
          <div className="gg-symbol gg-symbol--disc" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
          </div>
          <div className="Title">
              <h1 className='sal'>HI, I'm Erwin </h1>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
            
            <div className="text_about">
            <p className="text-main">I am a student passionate about problem-solving and constantly seeking new challenges and opportunities to learn and grow. I consider myself a very open and adaptable person, which allows me to be versatile and effective in problem-solving.
             I am always seeking new ways to improve and surpass my own limits, My goal is to combine creativity with technology for create unique and unimaginable things.
             With this goal in mind, I am constantly seeking new ways to integrate creativity and technology in my work and projects. I am always exploring the latest advancements in these fields, as well as looking for ways to apply them to real-world problems  </p>
          </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient"></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
        </div>

        <div className="second-view" id="cl2-about">
        <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
            </div>
            
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
            </div>
          <div className="gg">
          <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
          <div className="gg-symbol gg-symbol--disc" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
          </div>
          <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--31 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--square" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
            </div>
          <div className="Title">
              <h1 className='sal'>Skills </h1>
            </div>
            
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
            </div>
            
            <div className="text_about">
            <p className="text-main2">My skills have been developed through a combination of my university education and my personal drive to be self-sufficient and constantly learning. I believe that education is key to personal and professional growth, and I have taken full advantage of the opportunities offered to me by my university to gain a broad and deep understanding of my field.
  
              </p>
          </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient"></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
            <div className='cloud'>
            <div id="Programming">Machine Learning</div>
            <div id="Algorithm">React</div>
            <div id="Software">sql</div>
            <div id="Documentation">MongoDb</div>
            <div id="Coding">Cuda</div>
            <div id="Information">OpenCv</div>
            <div id="Testing">OpenMp</div>
            <div id="Computer">Power Bi</div>
            <div id="Debugging">Three.js</div>
            <div id="Design">c++</div>
            <div id="Readability">Pandas</div>
            <div id="Learning">Python</div>
            <div id="javascr">Javascript</div>
            <div id="WebS">WebScraping</div>
            </div>
            
        </div>


        <div className="three-view" id="cl3-about">
        
            
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
            </div>
          <div className="gg">
          <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
          <div className="gg-symbol gg-symbol--disc" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
          </div>
          <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
            </div>
          <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--31 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--square" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
            </div>
          <div className="Title">
              <h1 className='sal'>Experience </h1>
            </div>
            
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
            </div>
            
            <div className="text_about">
            <p className="text-main2">My experience has been built through a combination of university projects and personal initiatives. I have used my time at university to take on a variety of projects that have allowed me to apply what I have learned and develop new skills. At the same time, I have taken advantage of my free time to work on personal projects, which have allowed me to gain experience in a range of different fields
  
              </p>
          </div>
            
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient"></div>
            </div>
            <div className='cardsEx'>
              <div>
                <h1 className='un'>National university of Colombia</h1>
                <p className='ubP'>Through my work at the university, I have gained valuable experience in a number of areas, including project management, problem-solving, and communication. I have also had the opportunity to interact with a wide range of individuals, from professors and administrators to students and staff, which has helped me develop my interpersonal skills and expand my network.</p>
              </div>
            </div>
            <div className='cardsEx2'>
              <div>
                <h1 className='un'>FreeLancer</h1>
                <p className='ubP'>working on personal projects or collaborating with others on independent ventures, I have consistently demonstrated my ability to bring projects to fruition and achieve my goals. Through my independent work, I have gained valuable experience in a number of areas, including project management, problem-solving, and self-motivation.</p>
              </div>
            </div>
            <div className='cardsEx3'>
              <div>
                <h1 className='un'>World Design</h1>
                <p className='ubP'>At world Design, I have had the opportunity to work as a programmer and with databases, where I have applied my technical skills and demonstrated my ability to deliver results. My role at the company has involved designing, coding, and maintaining software applications, as well as managing and analyzing large amounts of data.</p>
              </div>
            </div>
            
            
        </div>
        
        <div className="skills-list">
         <a href="https://www.instagram.com/dubhan_/" className="fa fa-instagram"></a>
         <a href="https://twitter.com/Erhwin_" className="fa fa-twitter"></a>
         <a href='https://www.linkedin.com/in/dubhan-soto/' className="fa fa-linkedin"></a>
         <a href='https://github.com/erwinsot' className="fa fa-github"></a>
         <a href='https://t.me/Dhuban' className="fa fa-telegram"></a>
         <a href='https://drive.google.com/file/d/1e4MvGL4pf46KcNIWEX8Ldk24v_vg8KXj/view?usp=share_link' className="fa fa-file"></a>
        </div>
        

    </div>
  
  )
}

export default AboutPage