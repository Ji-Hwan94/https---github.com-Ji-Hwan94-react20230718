import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // ...array는 기존에 있는 배열에 새 요소를 추가한 새로운 array를 만들어 준다.
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          value={toDo}
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button>
        <hr />
        <ul>
          {
            // map은 배열에 있는 item을 내가 원하는 무엇이듯이 바꿔주는 역할을 하고, '새로운 배열'로 return 해준다
            // 함수의 첫번째 argument(함수에 파라미터로 들어가는 것)로 현재의 item을 가져 올 수 있다는 것이다
            // key를 설정 해준다.
            toDos.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </form>
    </div>
  );
}

export default App;
