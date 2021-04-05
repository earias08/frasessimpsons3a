import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <section className='container text-center my-5'>
      <img src={process.env.PUBLIC_URL+ 'logo.png'} alt="Logo de los Simpsons"/>
        <Button variant="warning">Warning</Button>
    </section>
  );
}

export default App;
