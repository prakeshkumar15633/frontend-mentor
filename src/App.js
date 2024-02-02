import './App.css';
import qr from './assets/image-qr-code.png';

function App() {
  return (
    <div className='bg'>
      <div className='d-block mx-auto my-auto bg-white card cardcss'>
        <img src={qr}/>
        <div>
          <b>Improve your front-end skills by building projects</b>
          <p className='text-secondary'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}

export default App;
