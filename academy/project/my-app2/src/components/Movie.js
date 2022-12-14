import React, { useState } from 'react';

const Movie = (props) =>{
    return (
        <div className="movie">
            <div className="movie-title">제목 : {props.mov.title}</div>
            <div className="movie-year">개봉년도 : {props.mov.year}년</div>
        </div>
    );
};

export default Movie; 
