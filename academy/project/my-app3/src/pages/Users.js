import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then((response) => {
              //console.log(response);
              setUsers(response.data);
          });
    }, []);

    /*
    useEffect(() => {
        console.log(users); //json의 data정보가 들어와 있다
    }, [users]);    
    */
   return (
      <div> 
        <h1>Users page 입니다</h1>
        <ul>
        {
            users.map(user => {
                return (
                    <div className="card" key={user.id} style={{'color':'red', 'font-size':'14px', 'text-align':'left', 'margin':'10px 2rem 10px 0'}}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">이름 : {user.name}</li>
                            <li className="list-group-item">이메일 : {user.email}</li>
                            <li className="list-group-item">전화번호 : {user.phone}</li>
                        </ul>
                    </div>
                );
            }) 
        }
        </ul>
      </div>  
   );
};

export default Users;
