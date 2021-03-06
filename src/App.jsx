import React, { Component } from "react";
import Project from "./Components/Project.jsx";

// This file passes down all the info to the other templating
// Every new project: Make sure to rearrange start/end indices
class App extends Component {
  constructor() {
	  super();
	  this.state = {
	    projects: []
	  }
  }
  componentWillMount() {
	  this.setState({projects: [{
		  title: "Bio",
		  photo: "/images/new-ivan.png",
		  link: "#",
		  overview: "New graduate from UCLA and aspiring software engineer.",
		  info: "Traveling enthusiast. Favorite place: Fingal's Cave.",
		  index: "start"
	  }, {
      title: "Show Feeder",
      photo: "/images/construction.jpg",
      link: "http://github.com/ivanmanan/Show-Feeder",
      linkInfo: "GitHub Repository",
      info: "Project currently in works. Have a single list to display the release dates of your most anticipated shows.",
      index: "1"
    }, {
      title: "Tad the Therapist",
      photo: "/images/tad.png",
      link: "http://github.com/ivanmanan/Tad-The-Therapist",
      linkInfo: "GitHub Repository",
      info: "Tad is a virtual assistant that provides counseling. Tad utilizes speech signal processing and hidden Markov models for automatic speech recognition.",
      index: "2"
    }, {
		  title: "Travel Share",
		  photo: "/images/travelshare.png",
		  link: "https://github.com/ivanmanan/Travel-Share",
		  linkInfo: "GitHub Repository",
		  info: "Document your travels and share with others.",
		  index: "3"
	  }, {
		  title: "Family Watch",
		  photo: "/images/family-watch.png",
		  link: "https://www.youtube.com/watch?v=kG9u_v0YBbw",
		  linkInfo: "Project Video",
		  info: "When logged in, the application tracks GPS and displays location history of other users.",
		  index: "4"
    }, {
		  title: "FrackMan",
		  photo: "/images/FrackMan.png",
		  link: "https://github.com/ivanmanan/FrackMan",
		  linkInfo: "GitHub Repository",
		  info: "Score as many points as possible by collecting oil barrels while avoiding protesters.",
		  index: "5"
	  }, {
		  title: "Doctor Crux",
		  photo: "/images/Crux.png",
		  link: "https://github.com/ivanmanan/Old-Doctor-Crux",
		  linkInfo: "Github Repository",
		  info: "List your symptoms, and Doctor Crux will suggest diagnoses and treatments.",
		  index: "6"
	  }, {
      title: "UAS",
		  photo: "/images/uas.jpg",
		  link: "https://youtu.be/CuTlgT7vdks",
		  linkInfo: "UAS Video",
		  info: "Directed the ground station team for the June 2018 AUVSI SUAS competition.",
		  index: "end"
    }
	  ]});
  }
  render() {
	  return (
	    <div className="App">
		    <Project projects={this.state.projects} />
	    </div>
	  );
  }
}
export default App;
