import { useState } from "react"; 
import UserName from "./UserName";

export default function Hello({age}) { // 전달해준 값이 들어온다
    const [name, setName] = useState('Mike'); 
    const msg = age > 19 ? '성인입니다' : '미성년자 입니다';
    return (
        <>
            <h1 id="name">{name}{age} : {msg}</h1>
            <UserName name={name}></UserName>
            <button onClick={() => {
                setName(name === "Murphy" ? "Harry" : "Murphy");
            }}>Change</button>
        </>
    )
}