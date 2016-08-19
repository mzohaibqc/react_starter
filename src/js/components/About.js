import React, {Component} from "react";

import 'mdif'

class About extends Component {
  render() {
    return (
      <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://avatars2.githubusercontent.com/u/13637803?v=3&s=460" />
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <span class="card-title">Hi! Zohaib Ijaz here..</span>
          <p>I am electrical engineer. My major subjects are related to software and computer engineering. I have keen interest in knowing new technologies and languages and apply them to create new things. Currently I am working as a team lead in QC technologies and there are 6 Members in my team. Most of the work I am doing is in python (Flask, SqlAlchemy etc.) but I also work as a front-end developer (Angular, Material Design, gulp).
<hr></hr>
I love javascript and my most of answers on Stackoverflow are in javascript. I love helping people whether it is coding or real brutal life.
Here is my profile on Stackoverflow <a href="http://stackoverflow.com/users/5567387/zohaib-ijaz" target="_blank"> Zohaib Ijaz</a>.

I also love git and I've given some talks on git in QC Technologies, Lahore.</p>
        </div>
        <div class="card-action" >
          <a href="https://www.facebook.com/zohaibijaz786" target="_blank"><i class="small zmdi zmdi-facebook indigo-text text-darken-1"></i></a>
          <a href="https://github.com/mzohaibqc" target="_blank"><i class="small zmdi zmdi-github black-text"></i></a>
          <a href="https://www.linkedin.com/in/zohaib-ijaz-7a657a58?trk=hp-identity-name" target="_blank"><i class="small zmdi zmdi-linkedin indigo-text text-lighten-1"></i></a>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default About;