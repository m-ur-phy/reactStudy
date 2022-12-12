import React, { Component } from 'react';
import Gnb from "./components/Gnb";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
				
      subject:{title:'WEB' , sub:'world wide web!'},
      contents:[
        {id:1, title:'HTML', desc:'설명글1'},
        {id:2, title:'CSS', desc:'설명글2'},
        {id:3, title:'JavaScript', desc:'설명글3'},
        {id:4, title:'React', desc:'설명글4'}
      ]
  }
  }

  render(){
    return (
      <div className="App">
            <Subject 
              title={this.state.subject.title} 
              sub={this.state.subject.sub}>
            </Subject>
            <Gnb data={this.state.contents}></Gnb>
            <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
