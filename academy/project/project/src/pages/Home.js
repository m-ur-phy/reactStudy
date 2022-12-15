import React from 'react';
import  customers from './../customers.json'; 

function Home() {

    let customerData = customers.map((row,index) => {
        return(
            <tr key={index}>
                <td>{row.Name}</td>
                <td>{row.City}</td>
                <td>{row.Country}</td>
            </tr>
        );
    });

    return (
        <>
           <h2>Home</h2>

           <table className="table table-bordered">
                <thead>
                    <tr><th>Name</th><th>City</th><th>Country</th></tr>
                </thead>
                <tbody>
                    {customerData}
                </tbody>
            </table>  
        </> 
    );
  }

  export default Home;