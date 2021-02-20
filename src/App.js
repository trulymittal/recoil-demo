import './App.css';
import {
  atom,
  useRecoilState,
  useResetRecoilState,
  selector,
  useRecoilValue,
} from 'recoil';

const countAtom = atom({
  key: 'count-atom',
  default: 15,
});

const fontSizeSelector = selector({
  key: 'font-size-selector',
  get: ({ get }) => {
    const count = get(countAtom);
    const fontSize = count * 4;
    return fontSize;
  },
});

function App() {
  const [count, setCount] = useRecoilState(countAtom);
  const resetCount = useResetRecoilState(countAtom);
  const fontSize = useRecoilValue(fontSizeSelector);

  const countValue = useRecoilValue(countAtom);

  return (
    <div className='App'>
      <h1>Recoil tutorial</h1>
      <h2>The count value is : {count} </h2>
      <h3>The font size of potty is : {fontSize} px </h3>
      <p style={{ fontSize: fontSize }}>💩</p>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
      <button onClick={resetCount}>reset count</button>
      <h1>This is only count value: {countValue}</h1>
    </div>
  );
}

export default App;
