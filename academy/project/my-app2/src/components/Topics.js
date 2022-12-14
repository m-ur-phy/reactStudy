import React, { Component } from 'react';
import {BrowserRouter , Route, Switch, Link, NavLink, useParams} from 'react-router-dom';

//객체 배열 생성
var contents = [
    {id:1 , title:'HTML' , desc:'HTML is ...'},
    {id:2 , title:'JS' , desc:'JS is ...'},
    {id:3 , title:'React' , desc:'React is ...'}
  ]
  
  function Topic(){  
    var params = useParams();
    //console.log(params);
    var topic_id = params.topic_id;
    var selected_topic ={
       title:'Sorry', desc:'Not Found'
    }
    for(var i=0; i<contents.length;i++){
         if(contents[i].id === Number(topic_id)){
           selected_topic = contents[i];
           break;
         }
    }
  
   return(
     <div>
          <h3>{selected_topic.title}</h3>
          {selected_topic.desc}
     </div>
   );
  };
  
  function Topics(){  //Topics 페이지
    var lis=[];
    for(var i=0; i<contents.length;i++){
      lis.push(<li key={contents[i].id}><NavLink exact to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>);
    }
  
   return(
       <div>
         <h2>Topics</h2>
         Topics..내용 페이지
           <ul>
             {lis}
           </ul> 
           
           <Route path="/topics/:topic_id">
               <Topic></Topic>
           </Route>
       </div>
   );
  };


export default Topics;
