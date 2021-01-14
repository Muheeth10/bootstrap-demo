import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <div className="par">
      <h1 className='text-center' >Hello World</h1>    
      </div>
      <div className="card" style={{width: "18rem"}}>
        <img src="https://picsum.photos/seed/picsum/300/200" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      
    </div>
  );
}

export default App;
