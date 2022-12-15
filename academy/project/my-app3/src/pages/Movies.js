import React, { useEffect, useState } from 'react';

const Movies = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('./oneroom.json')
        .then(function(result) {
            return result.json();
        })
        .then(function(json) {
            console.log(json);
            setUsers(json);
        });
    }, []);


   return (
      <div> 
        <h1>Movies page 입니다</h1>
        <ul>
        {
            users.map(user => {
                return (
                    <div className="card" key={user.id} style={{'color':'red', 'fontSize':'14px', 'textAlign':'left', 'margin':'10px 2rem 10px 0'}}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><img src={'./img/'+user.image} alt="" width="100%" /></li>
                            <li className="list-group-item">Title : {user.title}</li>
                            <li className="list-group-item">상세내용 : {user.content}</li>
                            <li className="list-group-item">가격 : {user.price+'원'}</li>
                        </ul>
                    </div>
                );
            }) 
        }
        </ul>
      </div>  
   );
};

export default Movies;