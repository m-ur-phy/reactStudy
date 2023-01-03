# React - 코딩앙마

코딩앙마 리액트 강의를 들으면서 정리했습니다.

## 2. 설치(create-react-app)

### react 프로젝트 만들기

`npx create-react-app voca` 

public → index.html

- `<div id=”root”></div>` 에 react 를 이용해서 만든 DOM 이 구현되게 된다.

src

- App.js 에서 대부분의 코드를 구현하면 된다.
    - 작성과 동시에 바로 반영이 되는 것이 바로 Hot Module Replacement(HMR) 이다.

## 3. 컴포넌트, JSX

- App.js App() return 값이 바로 JSX

```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
```

- react 에서 class 는 예약어이기 때문에 className 으로 적어주어야 한다.

```jsx
<h1 style={{
  color: "#f0f",
  backgroundColor: "green",
}}>
  Welcome
</h1>
```

- 스타일은 다음과 같이 객체 형식으로 적어준다.

```jsx
import './App.css';

function App() {
  const name = "TOM"
  const naver = {
    name : "네이버",
    url : "https://naver.com"
  }
  return (
    <div className="App">
      <h1 style={{
        color: "#f0f",
        backgroundColor: "green",
      }}>
        Hello, {name}.<p>{2 + 3}</p>
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
```

- 이런식으로 변수를 선언하고 {} 로 불러올 수 있다.
- 그러나 객체를 통째로 불러오는 것과 boolean 값은 적용할 수 없다.

## 4. 첫 컴포넌트 만들기

- src 내부에 component 라는 폴더를 만들고 그 안에 Hello.js 를 만든다.
    
    ```jsx
    // const Hello = () => {
    //     <p>Hello</p>;
    // };
    
    // export default Hello;
    
    export default function Hello() {
        return <p>Hello</p>;
    }
    ```
    
- App.js 에 import 로 만든 컴포넌트를 불러와 태그 형태로 사용해주면 된다.
    
    ```jsx
    import './App.css';
    import Hello from './component/Hello'
    
    function App() {
    
      return (
        <div className="App">
          <Hello />
        </div>
      );
    }
    
    export default App;
    ```
    
- 컴포넌트 내부에 컴포넌트 내부에 컴포넌트… 가 가능하다.
- 잘 만들어진 컴포넌트는 계속해서 중복 사용할 수 있다.

## 5. CSS 작성법(module css)

### 1. 직접 태그에 스타일을 적용해주는 방법

```jsx
<h1 style={{
            color: "#f00",
            borderRight : "2px solid #000",
            marginBottom : "30px",
            opacity : 0.5
        }}>Hello</h1>
```

- 태그 내부에 객체 형식으로 스타일을 적용하는 방법이 있다.
- `-` 사용이 안되기 때문에 카멜케이스로 작성해주어야 한다.
- px 등 다른 단위 등이 적혀져 있다면 따옴표로 묶어줘야하지만, 단순히 숫자만 있다면 따옴표로 묶어줄 필요는 없다.

### 2. CSS 파일을 이용하는 방법

- 처음 생성되는 CSS 파일은 두가지가 존재한다.
- index.css 와 App.css 이다.
- index.css 는 전체 프로젝트에 영향을 미치는 스타일링이 존재하고,
- App.css 는 앱 컴포넌트에 한정되어 있는 내용들처럼 보이나,
- 결국 둘 다 마지막엔 head 부분에 들어오기 때문에 페이지에 전체 적용되며 오버라이딩 된다.

### 3. css module

- 해당 컴포넌트를 위한 CSS 를 만들어보자.
- `Hello.js` 라는 컴포넌트가 있다면 `Hello.module.css` 라는 파일을 만들어 주자.

```jsx
.box {
    width: 200px;
    height: 200px;
    background-color: blue;
}
```

- 그리고 `Hello.js` 에서 다음과 같이 import 해준다.

```jsx
import styles from "./Hello.module.css";
```

- style 이라는 객체가 생성되었고 만약 Hello.module.css 을 이용하여 스타일을 적용하고 싶을땐 다음과 같이 해주면 된다.

```jsx
<div className={styles.box}></div>
```

- 이렇게 되면 컴포넌트를 전부 불러왔을 때 특정 스타일을 적용하기 위한 클래스가 겹침에 상관없이 해당 컴포넌트에만 스타일이 적용된다.

## 6. 이벤트 처리 (Handling Events)

- 우선 Hello.js 에 버튼을 두개 만들어 준다.

```jsx
export default function Hello() {
    return (
        <>
        <h1>Hello</h1>
        <button>show name</button>
        <button>show age</button>
        </>
    )
}
```

- 이벤트를 처리해주는 방식은 다음과 같다.

### 1. 미리 함수를 만든 후 전달

```jsx
export default function Hello() {
    function showName() {
        console.log("Yeppi"); // Yeppi
    }
    return (
        <>
        <h1>Hello</h1>
        <button onClick={showName}>show name</button>
        </>
    )
}
```

- 미리 함수를 만든 후, 태그에 click 이벤트를 전달하여 이벤트 처리를 해준다.
- 여기서 주의할 점은, 함수를 불러올 때 리턴값이 없는 경우 ()를 작성해주면 안되고, onclick 이벤트와 같은 이벤트는 카멜케이스로 작성해주어야 한다는 것이다. (일반 스크립트에선 전부 소문자였음)

### 2. onclick 내부에 직접 함수를 작성

```jsx
export default function Hello() {
    return (
        <>
        <h1>Hello</h1>
        <button onClick={ () => {
            console.log(25);
        }}>show age</button>
        </>
    )
}
```

- 직접 onClick 이벤트 내부에 다음과 같이 함수를 작성해줄 수 있다.
- 이 방식의 장점은 매개변수를 전달하기 편리하다는 것이다.

```jsx
export default function Hello() {
    function showAge(age) {
        console.log(age);
    }
    return (
        <>
        <h1>Hello</h1>
        <button onClick={ () => {
            showAge(10);
        }}>show age</button>
        </>
    )
}
```

### input

```jsx
export default function Hello() {
    function showText(e) {
        console.log(e.target.value)
    }
    return (
        <>
        <h1>Hello</h1>
        <input type="text" onChange={showText}/>
        </>
    )
}
```

- showText 는 이벤트 객체를 받고, e(이벤트).target(input 태그).value(input의 value 즉 작성한 값) 순서로 들어온다.

```jsx
<input type="text" onChange={ e => {
    console.log(e.target.value);
}}/>
```

- 이런식으로 짧게 써줄수도 있다.

- 또한 이렇게 작성해줄수도 있다.

```jsx
export default function Hello() {
    function showText(txt) {
        console.log(txt)
    }
    return (
        <>
        <h1>Hello</h1>
        <input type="text" onChange={ e => {
            const txt = e.target.value;
            showText(txt);
        }}/>
        </>
    )
}
```

## 7. state, useState

- state 란? 컴포넌트가 가지고 있는, 관리하는 상태값이다.

```jsx
export default function Hello() {
    let name = "Murphy"; // 일반 변수

    function changeName() {
        name = name === "Murphy" ? "Harry" : "Murphy"; // murphy 일땐 harry로, harry 일땐 murphy로
        console.log(name);
        document.getElementById("name").innerText = name; // DOM 을 업데이트 해주는 javascript code
    }
    return (
        <>
            <h1>Hello</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </>
    )
}
```

- 위의 예제를 살펴보면 click 이벤트를 전달해 줄 때 일반 변수에 변화를 주는 것이기 때문에 리액트가 바로 인지 할 수 없다. 그래서 document.get~ 을 이용하여 바꿔주어야 한다.
- 그렇다면 어떻게 바로 변화를 감지하여 적용되는 state 함수를 만들 수 있을까?

### useState

- react의 Hook
    - Hook 은 react 16.8 부터 사용가능하다.
    - 초기 리액트는 state와 lifecycle 을 관리하기 위해선, 클래스형 컴포넌트를 이용하여 만들어야만 했다.
    - 함수형 컴포넌트는 단순히 UI 표현에만 사용하였다.
    - 16.8 이후부터는 함수형 컴포넌트가 Hook 을 이용하여 전부 관리할 수 있게 되었다.

```jsx
import { useState } from "react"; // 꼭 import 를 해주어야 useState 를 사용할 수 있다.

export default function Hello() {
    // let name = "Murphy"; // 일반 변수
    const [name, setName] = useState('Mike'); // 배열의 첫번째 값은 state(변수명) 두번째 값은 state 를 변경해주는 함수 (배열 구조분해)

    function changeName() {
        const newName = name === "Murphy" ? "Harry" : "Murphy"; // murphy 일땐 harry로, harry 일땐 murphy로
        setName(newName);
        // document.getElementById("name").innerText = name;
    }
    return (
        <>
            <h1>Hello</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </>
    )
}
```

- `import { useState } from "react";` 꼭 import 를 해주어야 useState 를 사용할 수 있다.
- useState 를 선언할 때는 배열의 구조분해할당을 사용한다.
- `const [name, setName] = useState();` 배열의 첫번째 값은 state(변수명) 이고, 두번째 값은 state 를 변경해주는 함수이다.

```jsx
import { useState } from "react"; // 꼭 import 를 해주어야 useState 를 사용할 수 있다.

export default function Hello() {
    // let name = "Murphy"; // 일반 변수
    const [name, setName] = useState('Mike'); // 배열의 첫번째 값은 state(변수명) 두번째 값은 state 를 변경해주는 함수 (배열 구조분해)

    function changeName() {
        setName(name === "Murphy" ? "Harry" : "Murphy");
        // document.getElementById("name").innerText = name;
    }
    return (
        <>
            <h1>Hello</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </>
    )
}
```

- 이렇게도 작성해줄 수 있다.

```jsx
import { useState } from "react"; // 꼭 import 를 해주어야 useState 를 사용할 수 있다.

export default function Hello() {
    // let name = "Murphy"; // 일반 변수
    const [name, setName] = useState('Mike'); // 배열의 첫번째 값은 state(변수명) 두번째 값은 state 를 변경해주는 함수 (배열 구조분해)
    return (
        <>
            <h1>Hello</h1>
            <h2 id="name">{name}</h2>
            <button onClick={() => {
                setName(name === "Murphy" ? "Harry" : "Murphy");
            }}>Change</button>
        </>
    )
}
```

- 또 이렇게 onClick 이벤트 내에 바로 함수를 작성해줄 수도 있다.

(App.js)

```jsx
function App() {

  return (
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}
```

- 동일한 컴포넌트를 불러와서 적용시키더라도, state는 따로 관리된다.

## 8. props (properties)

- 프로퍼티의 속성값

(App.js)

```jsx
import './App.css';
import Hello from './component/Hello'

function App() {

  return (
    <div className="App">
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App;
```

- 값을 넘겨준다.

(Hello.js)

```jsx
import { useState } from "react"; 

export default function Hello(props) { // 전달해준 값이 들어온다
    console.log(props)
    const [name, setName] = useState('Mike'); 
    return (
        <>
            <h1 id="name">{name}({props.age}세)</h1>
            <button onClick={() => {
                setName(name === "Murphy" ? "Harry" : "Murphy");
            }}>Change</button>
        </>
    )
}
```

- 전달 값이 들어온다. 주의할 점은 전달 값은 컴포넌트 내부에서 바꿀 수 없다.
- 만약 값을 변경하고 싶다면 컴포넌트 내부에서 state 를 다시 만들어야 한다.

```jsx
import { useState } from "react"; 

export default function Hello(props) { // 전달해준 값이 들어온다
    const [name, setName] = useState('Mike'); 
    const [age, setAge] = useState(props.age); // 받아온 props 를 변경해주기 위한 새로운 state
    return (
        <>
            <h1 id="name">{name}({age}세)</h1>
            <button onClick={() => {
                setName(name === "Murphy" ? "Harry" : "Murphy");
                setAge(age + 1);
            }}>Change</button>
        </>
    )
}
```

- 받아온 props 를 변경해주기위한 새로운 state 를 생성하고, 해당 값에 변경시 적용할 수식을 작성해주면 된다.
- 해당 코드는 클릭시마다 age 값이 1 씩 증가한다.

```jsx
import { useState } from "react"; 

export default function Hello({age}) { // 전달해준 값이 들어온다
    const [name, setName] = useState('Mike'); 
    return (
        <>
            <h1 id="name">{name}({age})</h1>
            <button onClick={() => {
                setName(name === "Murphy" ? "Harry" : "Murphy");
            }}>Change</button>
        </>
    )
}
```

- 전달하는 값이 age 하나이기 때문에 age 라고만 전달해 주어도 된다.

```jsx
import { useState } from "react"; 

export default function Hello({age}) { // 전달해준 값이 들어온다
    const [name, setName] = useState('Mike'); 
    const msg = age > 19 ? '성인입니다' : '미성년자 입니다';
    return (
        <>
            <h1 id="name">{name}{age} : {msg}</h1>
            <button onClick={() => {
                setName(name === "Murphy" ? "Harry" : "Murphy");
            }}>Change</button>
        </>
    )
}
```

- 들어온 값으로 조건식을 작성하여 결과를 출력할 수도 있다.

- state 와 props 는 굉장히 많이 사용된다.
- 화면의 데이터를 갱신하기 위해서는 두 가지를 필수적으로 사용한다.
- 한 컴포넌트가 가지고 있는 state 를 props 로 넘길수도 있다.

(component > UserName.js 생성)

```jsx
export default function UserName({name}) {
    return <p>Hello, {name}</p>
}
```

(Hello.js)

```jsx
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
```

- 여기서 name 은 이 Hello의 컴포넌트에서는 state 지만,
- UserName 컴포넌트 입장에서는 props 이다.
- 이런식으로 페이지를 완성해나가면 된다.

## 9. 더미 데이터 구현, map() 반복문

- 전부 리셋하고 본격적으로 단어장을 만들어보자!

(component > Header.js 생성)

```jsx
export default function Header() {
    return <div className="header">
        <h1>
            <a href="#">토익 영단어(고급)</a>
        </h1>
        <div className="menu">
            <a href="#" className="link">Day 추가</a>
            <a href="#" className="link">단어 추가</a>
        </div>
    </div>;
}
```

(App.js)

```jsx
import Header from "./component/Header";

function App() {
  return <div className='App'>
    <Header />
  </div>
}

export default App;
```

(src > db(생성) > data.json(생성))

```jsx
{
    "days": [
      {
        "id": 1,
        "day": 1
      },
      {
        "id": 2,
        "day": 2
      },
      {
        "id": 3,
        "day": 3
      },
      {
        "id": 4,
        "day": 4
      }
    ],
    "words": [
      {
        "id": 1,
        "day": 1,
        "eng": "book",
        "kor": "책",
        "isDone": false
      },
      {
        "id": 3,
        "day": 2,
        "eng": "car",
        "kor": "자동차",
        "isDone": false
      },
      {
        "id": 5,
        "day": 3,
        "eng": "school",
        "kor": "학교",
        "isDone": false
      },
      {
        "id": 6,
        "day": 3,
        "eng": "pencil",
        "kor": "연필",
        "isDone": false
      },
      {
        "day": "3",
        "eng": "window",
        "kor": "창문",
        "isDone": false,
        "id": 7
      },
      {
        "day": "3",
        "eng": "house",
        "kor": "집",
        "isDone": false,
        "id": 8
      },
      {
        "day": "2",
        "eng": "mouse",
        "kor": "쥐",
        "isDone": false,
        "id": 9
      },
      {
        "day": "4",
        "eng": "monkey",
        "kor": "원숭이",
        "isDone": false,
        "id": 10
      },
      {
        "day": "4",
        "eng": "apple",
        "kor": "사과",
        "isDone": false,
        "id": 11
      },
      {
        "day": "3",
        "eng": "apple",
        "kor": "사과",
        "isDone": false,
        "id": 12
      }
    ]
  }
```

- 영단어 데이터를 작성해준다.

(component > DayList.js)

```jsx
import dummy from "../db/data.json";

export default function DayList() {
    console.log(dummy);
    return <ul className="list_day">
        {dummy.days.map(day => (
            <li key={day.id}>
                Day {day.day}
            </li>
        ))}
    </ul>
}
```

- map() 함수는 배열을 받아서 또다른 배열을 반환해주는데, 이때반환되는 요소는 jsx 로 작성해주면 된다.

(component > Day.js)

```jsx
import dummy from "../db/data.json";

export default function Day() {
    // dummy.words
    const day = 1;
    const wordList = dummy.words.filter(word => (
        word.day === day
    ));
    console.log(wordList)

    return <>
    <table>
        <tbody>
            {wordList.map(word => (
            <tr key={word.id}> 
                <td>
                    {word.eng}
                </td>
                <td>{word.kor}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </>;
}
```

(App.js)

```jsx
import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";

function App() {
  return <div className='App'>
    <Header />
    <DayList />
    <Day />
  </div>
}

export default App;
```

## 10. ****라우터 구현 react-router-dom****

`npm install react-router-dom`
- 현재 강의에선 v5 버전이기 때문에, 위 버전이 아니라 다음과 같이 설치하고 진행하였다.
- (v5도 공부해놓으면 좋을 듯 하여 ㅎㅎ)
`npm install react-router-dom@5.2.0`

(component > EmptyPage.js(생성))
```jsx
import { Link } from "react-router-dom";

export default function EmptyPage() {
    return (
        <>
            <h2>잘못된 접근입니다.</h2>
            <Link to="/"> 돌아가기 </Link>
        </>
    )
}
```
- EmptyPage 즉, 잘못된 접근창은 다음과 같이 App.js에 맨 아래 라우터로 구성해주어야 한다.
- 아니면 전부 해당 페이지로 이동한다.

(App.js)
```jsx
function App() {
    return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    )
}

export default App;
```

- 현재 Switch 는 Routes로 바뀌었다.

## 11. json-server, REST API

(day.js)
```jsx
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";

export default function Day() {
    const { day } = useParams();
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ));

    return (<>
    <h2>Day {day}</h2>
    <table>
        <tbody>
            {wordList.map(word => (
            <tr key={word.id}> 
                <td>
                    <input type="checkbox" />
                </td>
                <td>
                    {word.eng}
                </td>
                <td>{word.kor}</td>
                <td>
                    <button>뜻 보기</button>
                    <button class="btn_del">삭제</button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
    );
}
```
- 뜻 보기 기능은 단어에만 적용되는 부분이기 때문에 따로 컴포넌트를 만들어준다.

(component > Word.js(생성))
```jsx
export default function Word({word}) {
    
    return(
        <tr> 
                <td>
                    <input type="checkbox" />
                </td>
                <td>
                    {word.eng}
                </td>
                <td>{word.kor}</td>
                <td>
                    <button>뜻 보기</button>
                    <button class="btn_del">삭제</button>
                </td>
        </tr>
    )
}
```

(Day.js)
```jsx
import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day() {
    const { day } = useParams();
    const wordList = dummy.words.filter(word => (
        word.day === Number(day)
    ));

    return (<>
    <h2>Day {day}</h2>
    <table>
        <tbody>
            {wordList.map(word => (
            <Word word={word} key={word.id}/>
            ))}
        </tbody>
    </table>
    </>
    );
}
```
- Day.js 는 다음과 같이 만들어 준다.
- Word 의 props 로 word 를 넘겨주고, 키 값은 word.id 로 설정해준다.
- 키 값을 word에 설정해줌으로써 이전에 있던 tr 태그에 있던 key 값은 작성해줄 필요가 없어졌다.

(Word.js)
```jsx
import { useState } from "react";

export default function Word({word}) {
    const [isShow, setIsShow] = useState(false);
    function toggleShow(){
        setIsShow(!isShow)
    }
    return(
        <tr> 
                <td>
                    <input type="checkbox" />
                </td>
                <td>
                    {word.eng}
                </td>
                <td>{isShow && word.kor}</td>
                <td>
                    <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
                    <button class="btn_del">삭제</button>
                </td>
        </tr>
    )
}
```
- 뜻 보기와 숨기기 구현
- 먼저 isShow state 를 만들어준다.
- toggleShow 함수를 생성하여 !(not) 을 이용한 toggle 을 만들어준다.

### 체크시 외운단어 / 못외운 단어 구분해보기 

(Word.js)
```jsx
import { useState } from "react";

export default function Word({word}) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    
    function toggleShow(){
        setIsShow(!isShow)
    }

    function toggleDone() {
        setIsDone(!isDone)
    }
    return(
        <tr className={isDone ? "off" : ""}> 
                <td>
                    <input type="checkbox" checked={isDone} onChange={toggleDone}/>
                </td>
                <td>
                    {word.eng}
                </td>
                <td>{isShow && word.kor}</td>
                <td>
                    <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
                    <button className="btn_del">삭제</button>
                </td>
        </tr>
    )
}
```
- 로직은 토글쇼와 동일하다 not 을 이용하여 체크면 true, 체크하지 않으면 false로 만들어 주어 onchange 시 변화를 적용해준다.
- 변화를 적용하기 위해 word.isDone 도 state 로 만들어준다.

### api
`sudo npm i -g json-server`

- Mac 에서 이렇게 불러오면 된다.
- 설치가 완료되었다면 다시 다음의 명령어를 작성해준다.

`json-server --watch ./src/db/data.jso
n --port 3000` 

### REST API 란?
- 주소와 메서드로 CRUD 요청을 하는것이다.
    - C : Create - POST
    - R : Read - GET
    - U : Update - PUT
    - D : Delete - DELETE
