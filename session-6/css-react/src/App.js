import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe/AboutMe';
import MyButton from './Button/Button';

function App() {
  return (
    // <div className="App">
      <>
       <div className="App">
      <AboutMe
        name="Sonia!"
        location="Birmingham"
        bookTitle="'It's not me, it's you'"
        favouriteFilm="Twilight" />
       </div>
      <div>
        <MyButton />
      </div></>
  );
}

export default App;
