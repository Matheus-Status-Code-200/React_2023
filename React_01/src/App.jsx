import { useState } from 'react'
import reactLogo from './assets/react.svg'
import gitLogo from '/github-icon.svg'
import './App.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { css } from '@emotion/react';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/Matheus-Status-Code-200" target="_blank">
          <img src={gitLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/Matheus-Status-Code-200/React_2023" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div><span>Contador: {count}</span></div>
        
        <button onClick={() => setCount((count) => count + 1)}>
          Incremento
        </button>
        <button onClick={() => count > 0 ? (setCount(count - 1)) : console.log('O número é maior que zero.')}>Decremento</button>

        <p>
           Contador simples feito com react e vite
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Github and React logos to learn more
      </p>
      <footer css={css`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #888;
`}>
  
  <span>Feito por Matheus_Dev</span> <AiOutlineHeart css={css`
    color: red;
  `} />
</footer>
    </>
  )
}

export default App
