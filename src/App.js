//import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState } from 'react';

let arr = [
  {
    title: "dağ 1",
    par: "açıklama 1"
  }, {
    title: "dağ 2",
    par: "açıklama 2"
  }, {
    title: "dağ 3",
    par: "açıklama 3"
  }
  , {
    title: "dağ 4",
    par: "açıklama 4"
  }
]

// const guncelle = (lesson) => {
//   return lesson + 1;
// }

const App = () => {
  const [lesson, setLesson] = useState(11);
  return (
    <div >
      <h1>Ders : {lesson}</h1>
      <p>açıklama</p>
      <button onClick={() => { setLesson(lesson + 1) }}>Ders arttır</button>
      <button onClick={() => { setLesson(lesson - 1) }}>Ders azalt</button>
      <button onClick={() => { setLesson(100) }}>Ders 100</button>
      <div className="Cards">
        {
          arr.map(({ title, par }, index) => {
            return <Card title={title} par={par} key={`index ${index}`} lesson={lesson} i={index} />
          })
        }

      </div>

    </div>
  );
}

export default App;
