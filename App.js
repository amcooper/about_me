import React, { Component } from 'react';
import { render } from 'react-dom';

function Landing(props) {
	return (
		<div id="landing">
	    <p className="nt" id="lineOne"><span className="hot hotAbout" id="aboutLink"><a href="#/about">a</a></span><span className="willHide">dam_</span></p>
	    <p className="nt" id="lineTwo"><span className="willHide">coo</span><span className="hot hotProjects" id="projectsLink"><a href="#/projects">p</a></span><span className="willHide">er</span></p>
	    <p className="nm willHide"><span className="underline ahidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="ticker">.js</span><span className="ticker">.html</span><span className="ticker">.css</span><span className="ticker">.rb</span><span className="ticker jive"><a href="jive.html" target="_blank">.jive</a></span></p>	
    </div>	
	);
}

function Backdrop(props) {
  return (
    <div id="backdrop">
      <video poster="images/thumbnails/adam_vintage_letters_clip.png" autoplay muted>
        <source src="images/adam_vintage_letters_clip.webmsd.webm" type="video/webm" />
        <source src="images/adam_vintage_letters_clip.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

function App(props) {
  return(
    <div>
    	<Landing />
      <Backdrop />
    </div>
	);
}

export default App;

/*
    <div class="container-fluid"> 
      <div id="lowercase">
        <p class="nt" id="lineOne"><span class="hot hotAbout" id="aboutLink"><a href="#/about">a</a></span><span class="willHide">dam_</span></p>
        <p class="nt" id="lineTwo"><span class="willHide">coo</span><span class="hot hotProjects" id="projectsLink"><a href="#/projects">p</a></span><span class="willHide">er</span></p>
        <p class="nm willHide"><span class="underline ahidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="ticker">.js</span><span class="ticker">.html</span><span class="ticker">.css</span><span class="ticker">.rb</span><span class="ticker jive"><a href="jive.html" target="_blank">.jive</a></span></p>
      </div>

      <div id="mlowercase">
        <p class="nt" id="mlineOne"><span class="hot hotAbout" id="maboutLink">a</span><span class="willHide">dam_</span></p>
        <p class="nt" id="mlineTwo"><span class="willHide">coo</span><span class="hot hotProjects" id="mprojectsLink">p</span><span class="willHide">er</span></p>
        <p class="nm willHide"><span class="underline ahidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="ticker">.js</span><span class="ticker">.html</span><span class="ticker">.css</span><span class="ticker">.rb</span><span class="ticker jive"><a href="jive.html" target="_blank">.jive</a></span></p>
      </div>

      <div id="photoPanel" class="triptych">
        <img src="images/adam_bw_chair.jpg">
      </div>

      <div id="middlePanel" class="triptych">
      </div>

      <div id="bioPanel" class="triptych">
        <div id="bioText">
          <p class="longText">A map is not just a map. It’s more of a conversation between the mapmaker and the map reader—and the landscape. As a student in Computer Sciences and Cartography at the University of Wisconsin, I started out exploring the intersection between maps and code. But after making maps in Scotland, writing a book, managing tech teams at companies with vastly different missions and vibes, editing a database of secret (but not entirely top secret) cutting edge drug trials, and nursing a linguistics habit on the side, I am now crafting maps out of code. I’m the developer. My users and students are the readers. The landscape is the web. Let’s <span id="talk">talk</span>.</p>
        </div>
      </div>

      <div id="projectsPanel" class="panel">
        <div id="projectsHeader" class="hot">projects</div>
        <div class="projectSummary">
          <h3><a href="http://theadamcooper.com:2005" target="_blank">Wheels Within Wheels</a></h3>
          <p class="longText">The (Ruby/Sinatra) CRUD app that makes (MEAN) CRUD apps. You may never need to make a CRUD app again.</p>
        </div>
        <div class="projectSummary">
          <h3><a href="http://theadamcooper.com:2002" target="_blank">Much Better Speeches</a></h3>
          <p class="longText">Fill in the blanks in history's greatest speeches and make them better. Much better. Built with JavaScript and AngularJS.</p>
        </div>
        <div class="projectSummary">
          <h3><a href="http://theadamcooper.com:2001" target="_blank">Choperator</a></h3>
          <p class="longText">Real-time chat application. Built with JavaScript, WebSockets, and Node.js.</p>
        </div>
        <div class="projectSummary">
          <h3><a href="http://theadamcooper.com:2000/index.html" target="_blank">Dinosaur Spaceship</a></h3>
          <p class="longText">A library and e-reader. Built with JavaScript and Node.js.</p>
        </div>
      </div>

      <div id="contactsPanel" class="panel">
        <div id="contactsHeader" class="hot">contact adam</div>
        <div id="mContactLinks">
          <ul>
            <li><a href="mailto:amcooper+website@gmail.com" title="Gmail" target="_blank"><img src="images/gmail-64-color.png"></a></li>
            <li><a href="https://github.com/amcooper" title="GitHub" target="_blank"><img src="images/github-64-color.png"></a></li>
            <li><a href="https://linkedin.com/in/adamcooperdev" title="LinkedIn" target="_blank"><img src="images/linkedin-64-color.png"></a></li>
          </ul>          
        </div>
      </div>
    </div>

    <nav id="floatingNav" class="nn">
      <div id="fNavTop">
        <div id="fHomeLink" class="navLink">
          <a href="#" class="navBullet" id="homeHoverHide">&bull;</a>
          <a href="#" class="navText" id="homeHoverShow">home</a>
        </div>
        <div id="fProjectsLink" class="navLink">
          <a href="#" class="navBullet" id="projectsHoverHide">&bull;</a>
          <a href="#" class="navText" id="projectsHoverShow">projects</a>
        </div>
      </div>

      <div id="fLateralLink" class="navLink">
        <div id="fPhotoLink">
          <a href="#" class="navBullet lateralHoverHide">&lt;</a>
          <a href="#" class="lateralHoverShow"><span class="navText">photo&nbsp;</span><span class="navBullet">&lt;</span></a>
        </div>
        <div id="fAboutSlash">
          <a href="#" class="navBullet">/</a>
        </div>
        <div id="fBioLink">
          <a href="#" class="navBullet lateralHoverHide">&gt;</a>
          <a href="#" class="lateralHoverShow"><span class="navBullet">&gt;</span><span class="navText">&nbsp;bio</span></a>
        </div>
      </div>

      <div id="fContactLinks" class="navLink">
        <ul>
          <li id="fGmailLink">
            <div id="gmailHoverHide" class="navBullet">&bull;</div>
            <a href="mailto:amcooper+website@gmail.com" title="Gmail" target="_blank"><img src="images/gmail-64-color.png" id="gmailHoverShow"></a>
          </li>
          <li id="fGithubLink">
            <div id="githubHoverHide" class="navBullet">&bull;</div>
            <a href="https://github.com/amcooper" title="GitHub" target="_blank"><img src="images/github-64-color.png" id="githubHoverShow"></a>
          </li>
          <li id="fLinkedinLink">
            <div id="linkedinHoverHide" class="navBullet">&bull;</div>
            <a href="https://linkedin.com/in/adamcooperdev" title="LinkedIn" target="_blank"><img src="images/linkedin-64-color.png" id="linkedinHoverShow"></a>
          </li>
          <li id="fWordpressLink">
            <div id="wordpressHoverHide" class="navBullet">&bull;</div>
            <a href="https://serverdotjive.wordpress.com" title="Wordpress" target="_blank"><img src="images/wordpress-64-color.png" id="wordpressHoverShow" alt="server-dot-jive"></a>
          </li>
        </ul>
      </div>
    </nav>
    -->

    <!--
    <div id="backdrop">
      <video poster="images/thumbnails/adam_vintage_letters_clip.png" autoplay muted>  <!-- Add "loop" in here in production. --> <!--
        <source src="images/adam_vintage_letters_clip.webmsd.webm" type="video/webm">
        <source src="images/adam_vintage_letters_clip.mp4" type="video/mp4">
      </video>
    </div>

    */
    -->