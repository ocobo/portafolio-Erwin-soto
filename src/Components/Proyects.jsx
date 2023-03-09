import React, { useEffect, useState } from 'react'
import {gsap} from "gsap";


function Proyects() { 
  const [features,setFeatures]=useState({name:"three.js",descrip:"House",img: "",field:"Portfolio",
  Lect:"This project is a modern web application developed using state-of-the-art technologies,including three.js, javascript, react, node.js, and express.js.The integration of these cutting-edge tools results in a dynamic and interactive user experience.The project is also designed to be highly interactive, allowing users to engage with the content in a variety of ways.For example, users may be able to manipulate objects within the 3D environment, triggering animations or sound effects, or controlling the camera view."
  ,title: "Three.js House",
  img2:"",
  skills:"",
  learn:"Choose a option to get started"
  
})
  const[vis,setVis]=useState(false)
  useEffect(()=>{
    if (vis){
      gsap.fromTo("#conteInfo",1,{opacity:0,}, {opacity: 1})
  }
  else{
    gsap.to("#conteInfo",1,{opacity:0, visibility:"hidden"})
  }
    
  })
  return (
    <div className='Conten'>
    <div className='card1' onClick={()=>{
    document.getElementById("GoB").style.visibility = "visible"
    document.getElementById("BackProyec").style.zIndex = "0"
      setFeatures({name:"Three.js",descrip:"House",img:"https://i.postimg.cc/DZfR4Dyf/port-house.png",field:"Portfolio",
    Lect:"This project is a modern web application developed using state-of-the-art technologies,including three.js, javascript, react, node.js, and express.js.The integration of these cutting-edge tools results in a dynamic and interactive user experience.The project is also designed to be highly interactive, allowing users to engage with the content in a variety of ways.For example, users may be able to manipulate objects within the 3D environment, triggering animations or sound effects, or controlling the camera view."
  ,title: "Three.js House",
  img2:'https://i.postimg.cc/h4d1bszK/zorrito.png',
  skills: "React, Javascript, Node.js, Express.js, Blender, Redux",
  learn:"learn More"
    
    })
    ;document.getElementById("conteInfo").style.visibility = "visible";setVis(true)
    }} >
      <div className='intercard'>
      <img className='lata1' src='https://i.postimg.cc/h4d1bszK/zorrito.png' ></img>
      <p className='frontCard'>three.js <br className='frontCard'></br>House <br className='frontCard'></br> Portfolio</p>
      </div>
    </div>
    <div className='card2' onClick={()=>{
    document.getElementById("GoB").style.visibility = "visible"
    document.getElementById("BackProyec").style.zIndex = "0"
    setFeatures({name:"Flutter",descrip:"App ",img:"https://i.postimg.cc/KvdXpJQQ/vHnLtHq.jpg",field:"Model",
    Lect:"The project involved the use of Flutter, MongoDB, and Java to develop a mobile application that allowed users to create tasks, set due dates and priorities, and set reminders for each task.To store the application data, MongoDB was used as the database. The Java MongoDB Driver library was employed to connect to the MongoDB database and perform various CRUD operations.The resulting application boasted an intuitive and user-friendly interface, with distinct screens for displaying pending tasks, completed tasks, and upcoming tasks."
  ,title: "Flutter App",
  img2:'https://i.postimg.cc/XYVKW02v/gatito.png',
  skills:"Java, Dart, Flutter, Sql, MongoDb ",
  learn:"learn More"
    });
     document.getElementById("conteInfo").style.visibility = "visible";setVis(true)}}>
      <div className='intercard'>
      <img className='lata1' src='https://i.postimg.cc/XYVKW02v/gatito.png' ></img>
      <p className='frontCard'>Flutter <br className='frontCard'></br>App <br className='frontCard'></br>Model</p>
      </div>
    </div>
    <div className='card3' onClick={()=>{
    document.getElementById("GoB").style.visibility = "visible"
    document.getElementById("BackProyec").style.zIndex = "0"
    setFeatures({name:"Spark",descrip:"analysis of data ",img:"https://i.postimg.cc/jq3YPs7p/Estadisctic.png",field:"Web Page",
    Lect:"The project involved using Apache Spark, Matplotlib, SQL, and Highcharts to develop an application for data analysis and visualization. The application processed large datasets using Spark's distributed computing capabilities and stored the data in an SQL database for efficient retrieval and querying.To visualize the data, Matplotlib was used to generate various graphs and charts, providing meaningful insights and trends to the users. Highcharts was used to display the data on a web page in an interactive and visually appealing way,"
  ,title: "Spark analysis of data",
  img2:'https://i.postimg.cc/zGXhMFBb/3500-4-02.png',
  skills: "Spark, Python, Sql, Pandas, HighChart, Tableau",
  learn:"learn More"
    
    });
     document.getElementById("conteInfo").style.visibility = "visible";setVis(true)}}>
      <div className='intercard'>
      <img className='lata1' src='https://i.postimg.cc/zGXhMFBb/3500-4-02.png' ></img>
      <p className='frontCard'>Spark <br className='frontCard'></br>analysis of data <br className='frontCard'></br> Web Page</p>
      </div>
    </div>
    <div className='card4' onClick={()=>{
    document.getElementById("GoB").style.visibility = "visible"
    document.getElementById("BackProyec").style.zIndex = "0"
    setFeatures({name:"WebGl",descrip:"Rooms",img:"https://i.postimg.cc/QCHP0TTR/Roomportal.png",field:"Portfolio",
    Lect:"The project involved the use of Three.js, React, Blender, and Express.js to create a 3D web application with multiple scenes. The application was designed to showcase the capabilities of Three.js and React in creating interactive 3D experiences on the web.The 3D models and scenes were created using Blender, an open-source 3D modeling and animation software. The resulting 3D models were then integrated into the web application using Three.js, a JavaScript library for creating 3D graphics and animations in the browser."
  ,title: "WebGl",
  img2:'https://i.postimg.cc/QtBkzkfk/195.png',
  skills:"React, Webgl, Javascript, Blender, Node.js, Express.js  ",
  learn:"learn More"
    });
     document.getElementById("conteInfo").style.visibility = "visible";setVis(true)}}>
      <div className='intercard'>
      <img className='lata1' src='https://i.postimg.cc/QtBkzkfk/195.png' style={{width: "165px", height:"170px", top:"-30px"}} ></img>
      <p className='frontCard' style={{position: "relative" , top:"-70px"}}>WebGl <br className='frontCard'></br>Rooms<br className='frontCard'></br>Portfolio</p>
      </div>
    </div>
    <div className='card5' onClick={()=>{
    document.getElementById("GoB").style.visibility = "visible"
    document.getElementById("BackProyec").style.zIndex = "0"
    setFeatures({name:"Three.js",descrip:"New Concept",img:"https://i.postimg.cc/rpNvmcTY/roomPage.png",field:"Web Page",
    Lect:"The project involved developing a new concept for a web-based application that utilized Three.js and Artificial Intelligence to create a unique and engaging user experience. Artificial Intelligence was also used to create a personalized experience for users. The team utilized machine learning algorithms to analyze user data and provide personalized recommendations and content based on their interests and preferences. This allowed the application to provide users with a unique experience tailored to their individual needs and preferences."
  ,title: "Three.js",
  img2:'https://i.postimg.cc/Y0YNr2Kv/2002-i039-010-chatbot-messenger-ai-isometric-set-05.png',
  skills:"Three.js, Python, Tensorflow, Pandas, NumPy ",
  learn:"learn More"
    });
     document.getElementById("conteInfo").style.visibility = "visible";setVis(true)}}>
      <div className='intercard'>
      <img className='lata1' src='https://i.postimg.cc/Y0YNr2Kv/2002-i039-010-chatbot-messenger-ai-isometric-set-05.png' ></img>
      <p className='frontCard'>Three.js <br className='frontCard'></br>New Concept<br className='frontCard'></br>Web Page</p>
      </div>
    </div>
    <div className='card6'  onClick={()=>{
     document.getElementById("GoB").style.visibility = "visible"
     document.getElementById("BackProyec").style.zIndex = "0" 
     setFeatures({name:"Cuda",descrip:"OpenCv",img:"https://i.postimg.cc/G2MVFQHF/fadecte.png",field:"FaceDetection",
     Lect:"The project involved using CUDA, Artificial Intelligence, and OpenCV to develop an application for face detection and classification based on specific characteristics. The application was designed to showcase the power of CUDA and Artificial Intelligence in image processing and analysis.To detect faces in images and videos, OpenCV, an open-source computer vision library, and integrated it with CUDA, a parallel computing platform and programming model. This combination allowed for faster processing of image data, enabling the application to detect faces in real-time."
  ,title: "Cuda OpenCv",
  img2:'https://i.postimg.cc/gkyy10H5/robo.png',
  skills:"Cuda, C++, OpenCv, NumPy",
  learn:"learn More"
    });
     document.getElementById("conteInfo").style.visibility = "visible";setVis(true)}}>
      <div className='intercard'>
      <img className='lata1' src='https://i.postimg.cc/gkyy10H5/robo.png' ></img>
      <p className='frontCard'>Cuda<br className='frontCard'></br>OpenCv <br className='frontCard'></br>FaceDetection</p>
      </div>
    </div>
    <div className='card7'  onClick={()=>{
     document.getElementById("GoB").style.visibility = "visible"
    document.getElementById("BackProyec").style.zIndex = "0"
     setFeatures({name:"Web3",descrip:"NTF",img:"https://i.postimg.cc/kg6TzCDt/Ntf.png",field:"Ntf Page",
     Lect:"The project involved building a decentralized application (DApp) using Web3 to create and manage non-fungible tokens (NFTs) on the Ethereum network. NFTs are unique digital assets that are stored on a blockchain and can represent anything from artwork to virtual real estate. The application was designed to be user-friendly and accessible to users of all technical backgrounds. This enabled the team to create a user-friendly interface that could be used to create and manage NFTs without requiring users to have in-depth knowledge of blockchain technology."
  ,title: "Web3 Ntf",
  img2:'https://i.postimg.cc/Hs14SMXX/robot.png',
  skills:"Web3, Javascript, MongoDb, Solidity, Express.js, Redux.js",
  learn:"learn More"
    });
     document.getElementById("conteInfo").style.visibility = "visible";setVis(true)}}>
      <div className='intercard'>
      <img className='lata1' src='https://i.postimg.cc/Hs14SMXX/robot.png' ></img>
      <p className='frontCard'>Web3<br className='frontCard'></br>NTF<br className='frontCard'></br>Ntf Page</p>
      </div>
    </div>
    <div className='card8' onClick={()=>{
     document.getElementById("GoB").style.visibility = "visible"
    document.getElementById("BackProyec").style.zIndex = "0"
     setFeatures({name:"TensorFlow",descrip:"Predictive Project",img:"https://i.postimg.cc/K8L66BHb/tensoflow.png",field:"Web application",
     Lect:"Project utilized a variety of machine learning techniques, including supervised learning and deep learning. Has been trained the model using historical data and specific features of the variables, such as time series data or statistical indicators.One of the key advantages of using TensorFlow for this project was its ability to handle large datasets and complex algorithms with ease. The library allowed to create complex neural networks and deep learning models that could handle large amounts of data and make accurate predictions with high levels of accuracy."
  ,title: "TensorFlow  Web application",
  img2:'https://i.postimg.cc/Jhsk77jR/curioos.png',
  skills:"Tesorflow, MongoDb, Pandas, Javascrpit, Node.js, Tableau ",
  learn:"learn More"
    });
     document.getElementById("conteInfo").style.visibility = "visible";setVis(true)}}>
      <div className='intercard'>
      <img className='lata1' src='https://i.postimg.cc/Jhsk77jR/curioos.png'  ></img>
      <p className='frontCard'>TensorFlow <br className='frontCard'></br>Predictive Project <br className='frontCard'></br>Web application</p>
      </div>
    </div>
    <div className='aviso'>
      <div className='intercard2'>
      <p className='infoBo' >{features.learn} </p>
      </div>
    </div>
    <div className='Back' id='Back' onClick={()=>{document.getElementById("BackProyec").style.zIndex = "100"
      setVis(false),setFeatures({learn:"Choose a option to get started"})}}>
      <div className='intercard2'>
      <p className='GoB' id='GoB' ><img src='/flecha-hacia-la-izquierda-en-un-circulo.png' className='flecha'></img>  Go Back</p>
      </div>
    </div>
    <div className='conteInfo' id='conteInfo'>
    <div className='cardinfo'>
      <div className='intercardinfo'>
      <img className='lata1' src={features.img2} ></img>
      <p  className='frontCard'>{features.name} <br  className='frontCard'></br>{features.descrip} <br  className='frontCard'></br> {features.field}</p>
      </div>
    </div>
      <div className='present'>
      <img className='preImg' src={features.img}></img>
      </div>
      <div className='textPres'>
      <h1 className='titleDes'>{features.title} </h1>
        <p className='textDesP'>{features.Lect}
          </p>
        <p className='texSki'>Skills </p>
        <p className='skillRig'>{features.skills}</p>
      </div>
    </div>
    
    
    </div>
  )
}

export default Proyects