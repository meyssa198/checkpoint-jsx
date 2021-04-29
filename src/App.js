import logo from './logo.svg';
// import './App.css';
import imagesrc from "./imagesrc.png"
import './style.css';

function App() {
  return (
    <div className="App">
     <h1 className="titel red">
       Meyssa
     </h1>
     <div>
       <br/>
     </div>
     <img src={imagesrc} alt='image'/>
     <div>
       <br/>
     </div>
     <img src='/imagepub.png'/>
     <div>
     <iframe width="320" height="240" src="https://www.youtube.com/embed/yTNE1ru9ELc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
    </div>
  );
}

export default App;
