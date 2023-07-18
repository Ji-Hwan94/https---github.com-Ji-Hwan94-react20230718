import { useEffect, useState } from "react";

function Hello() {
  // useEffect은 미리 정의된 함수를 삽입하여 사용하는 것이 가능, []에 아무것도 없을때는 최초 한 번만 수행(rendering이 될 때)한다.
  useEffect(mountedFn, []);

  // Hello 컴포넌트가 랜더링(mounted) 될때 실행하는 함수
  function mountedFn() {
    console.log("mounted");
    // return에는 해당 컴포넌트가 사라질때 실행하는 함수를 넣는다.
    return unmountFn;
  }

  // Hello 컴포넌트가 사라질 때(unmount) 될때 실행하는 함수
  function unmountFn() {
    console.log("unmounted");
  }

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
