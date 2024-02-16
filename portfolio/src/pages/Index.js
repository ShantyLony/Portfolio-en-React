import React,  { Fragment } from 'react';


function Index() {

return(
    <Fragment>
      
   
<nav className="nav">
  <div className="container">
    <div className="logo mt-0">
      <a href="#"><img src="./assets/image/LOO.png" alt=""/></a>
    </div>
    <div id="mainListDiv" className="main_list">
      <ul className="navlinks">
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">A propos</a></li>
        <li><a href="#portfolio">Projets</a></li>
        <li><a href="#Langages">Formations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
        <span className="navTrigger">
          <i></i>
          <i></i>
          <i></i>
        </span>
  </div>
</nav>


 <p id="stars"></p>
 <p id="stars2"></p>
 <p id="stars3"></p>
 <p id="title">Bonjour, 
   Je suis Chantal MUHORAKEYE 
   Bienvenue sur mon portfolio 
   Je suis une web  <strong>Developpeuse junior </strong>
   A la recherche de stage de 8
   semaines   </p>



<section className="home mt-0 ">
 <hr className="featurette-divider"/>
 <div className="row featurett">
   <div className="col-md-6">
     <div className="container">
       <a className="cv" href="cv chantal 11.pdf">Téléchargez mon cv</a>
     </div>
   </div>
   <div className="col-md-6 mt-5">
     <img className="I mt-40 mb-20" src="./assets/about/profile-e pic.png" width="900"
     height="1000" alt=""/>
   </div>
   </div>
</section>
    
  

    </Fragment>
)
}


export default Index;