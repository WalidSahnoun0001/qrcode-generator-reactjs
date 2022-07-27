import QRCode from "qrcode";
import {useState} from 'react'

function App() {

  const [result, setResult] = useState('')
  const [inputVal, setInputVal] = useState('')

  const genQRCode = (url)=> {
    QRCode.toDataURL(url, {width: 400, margin: 1, color: {dark: '#333'}}).then(data=> setResult(data))
  }

  return (
    <section className="qrcode-app">
      <h2>QRCode Generator</h2>
      <div className="qrcode">
        <div className="generate">
          <input type="text" placeholder="Type url here..." onChange={e=> setInputVal(e.target.value)}/>
          {
            (inputVal !== '') ? <button onClick={()=> genQRCode(inputVal)}>Get</button> : ''
          }
        </div>
        <figure>
          <img src={result} alt="" />
        </figure>
        <div className="download">
          {
            (result !== '') ? <a href={result} download>Download</a> : ''
          }
        </div>
      </div>
    </section>
  );
}

export default App;
