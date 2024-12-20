import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Привет, мир!</h1>
        <p>
          Добро пожаловать в мой первый React проект.
        </p>
        <button onClick={() => alert('Ты нажал на кнопку!')}>Нажми меня</button>
      </header>
    </div>
  );
}

export default App;
