// import logo from './logo.svg';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import img from './img/src.jpg';
// import img from './img/myVideo.mp4'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ borderSolid: "1px", color: 'black', maxWidth: '100vw' }}>
          <h1 className='title-red'>Mame Fatima</h1>

          <p>hi <br />je suis fatima</p>
          <br className='saut-page'/>
          {/* Image importer avec src */}
          <img src={img} alt='image' width={"145px", "145"}></img>

          <br className='saut-page'/>
          {/* Importer avec public */}
          <img src='/public.jpg' alt='public' width={"145", "145"}></img>
          
          <video  className='video' width="320" height="240"  type="video/mp4"  controls>

           

          </video>
        </div>

      </header>
    </div>
  );
}

export default App;
