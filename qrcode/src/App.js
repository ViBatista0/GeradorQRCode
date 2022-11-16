import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';

function App() {

  const [link, setLink] = useState('')
  const [qrcodelink, setQRCodeLink] = useState('')



  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQRCodeLink(url);
    })
  }

  function handleQRCode(e) {
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className="container">



      <QRCode value={link} />

      <input
        className="input"
        placeholder="Digite seu link..."
        value={link}
        onChange={(e) => handleQRCode(e)} />

      <a href={qrcodelink} download={'qrcode.png'}><button>
        Baixar o QRCode</button></a>

    </div>

  );
}

export default App;
