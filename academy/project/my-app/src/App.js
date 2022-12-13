import React, { Component } from 'react';
import Gnb from "./components/Gnb";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        mode:'read',
        selected_content_id:1,
        welcome:{title:'welcome' , desc:'hello React!'},

        subject:{title:'WEB' , sub:'world wide web!'},
        contents:[
          {id:1, title:'HTML', desc:'설명글1'},
          {id:2, title:'CSS', desc:'설명글2'},
          {id:3, title:'JavaScript', desc:'설명글3'},
          {id:4, title:'Vue', desc:'설명글4'}
        ]
    }
  }

  render(){
    var _title, _desc=null;
    if(this.state.mode === 'welcome'){
       _title = this.state.welcome.title;
       _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
       var i=0;
       while(i<this.state.contents.length){
           var data = this.state.contents[i];
           if(data.id === this.state.selected_content_id){
             _title = data.title;
             _desc = data.desc;
             break;
           }
         i+=1;
       }
    } 
    return (
      <div className="App">
            <Subject 
              title={this.state.subject.title} 
              sub={this.state.subject.sub}
             
              onChangePage={function(){
                this.setState({
                  mode:'welcome'
                });
              }.bind(this)}
            >
            </Subject>

            <Gnb 
              onChangePage={function(id){
                this.setState({
                  mode:'read',
                  selected_content_id:Number(id)  //id값이 문자 "1" 라서 숫자로 변환
                });
              }.bind(this)}
            data={this.state.contents}>
            </Gnb>

            <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
