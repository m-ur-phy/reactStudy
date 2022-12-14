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

이런식으로 짧게 써줄수도 있다.