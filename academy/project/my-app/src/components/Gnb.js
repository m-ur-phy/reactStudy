import React, { Component } from 'react';
import './css/Gnb.css'

class Gnb extends Component {
    render(){
        var aaa = [<p>단락요소1입니다.</p>, <p>단락요소2입니다.</p>, <p>단락요소3입니다.</p>, <p>단락요소4입니다.</p>];
        var bbb = <p>단락요소긔</p>;

        var lists = [];  
        var data = this.props.data;
        var i=0;
        
        while(i<data.length){
            lists.push(<li key={data[i].id}><a href={data[i].id+".html"} title={data[i].desc}>{data[i].title}</a></li>);
            i+=1;
        }

     // for(i=0; i<data.length; i++){
      //   lists.push(<li key={data[i].id}><a href={data[i].id+".html"} title={data[i].desc}>{data[i].title}</a></li>);
      // }

      return (
        <nav>
          <ul>
              {lists}
          </ul>
          <div>{aaa[0]}</div>
          <div>{aaa[1]}</div>
          <div>{bbb}</div>
        </nav>
      );
    }
  }

  export default Gnb;