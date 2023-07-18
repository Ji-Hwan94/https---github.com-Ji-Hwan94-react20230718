import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./css/App.module.css";

function App() {
  let [clickNum, setClickNum] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setClickNum((clickNum = clickNum + 1));
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  // console.log("input값이 변경 될 때와 버튼이 클릭 된 경우 계속 나타납니다.");

  // useEffect는 컴포넌트가 렌더링 될 때와 값이 변경이 될때(컴포넌트가 unmount 할때) 로직을 수행한다.
  // useEffect => 최초 반번만 시행 되는 콘솔
  // useEffect(() => {
  //   console.log("한 번만 실행되는 콘솔");
  // }, []);

  // useEffect => keyword가 변경 될때만 함수가 실행됨
  // useEffect(() => {
  //   console.log("keyword: ", keyword);
  // }, [keyword]);

  // useEffect => clickNum 변경 될때만 함수가 실행됨
  // useEffect(() => {
  //   console.log("clickNum: ", clickNum);
  // }, [clickNum]);

  // useEffect => clickNum, keyword 둘다 변경 될때만 함수가 실행됨
  useEffect(() => {
    console.log("clickNum: ", clickNum);
    console.log("keyword: ", keyword);
  }, [clickNum, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      ></input>
      <h1 className={styles.title}>Hello Mr.Click: {clickNum}</h1>
      <Button onClick={onClick} text="new bnt" />
    </div>
  );
}

export default App;
