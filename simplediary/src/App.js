import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '이현영',
    content: '하이 1',
    emotion: 5,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: '홍길동',
    content: '하이 2',
    emotion: 3,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: '아무개',
    content: '하이 3',
    emotion: 2,
    create_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
