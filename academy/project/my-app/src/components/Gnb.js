import React, { Component } from 'react';
import './css/Gnb.css'

class Gnb extends Component {
    render(){

        var lists = [];  
        var data = this.props.data;
        var i=0;
        
        while(i<data.length){
          lists.push(
              <li key={data[i].id}>
                  <a href={data[i].id+".html"} title={data[i].desc} 
                    data-id={data[i].id} 
                    onClick={function(e){
                      e.preventDefault();
                      this.props.onChangePage(e.target.dataset.id);
                  }.bind(this)}
                  >
  
                  {/* <a href={data[i].id+".html"} title={data[i].desc} 
                    onClick={function(id, e){
                      e.preventDefault();
                      this.props.onChangePage(id);
                  }.bind(this, data[i].id)}
                  > */}
  
                      {data[i].title}
                  </a>
              </li>);
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
        </nav>
      );
    }
  }

  export default Gnb;