import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const buttons:Array<string> = ["0","1","2","3","4","5","6","7","8","9"]
const correctCode:string = "5213" 

function App() {
  const [passcode, setPasscode] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {
    if(passcode.length >= 4){
      if(passcode === correctCode){
        setStatus('Success!')
      }
      else setStatus('Incorrect Passcode')
      setPasscode("")
    }
  }, [passcode])

  const handleSetPasscode = (button: string) => {
    if(passcode.length == 0){
      setStatus("")
    }
    setPasscode(passcode + button)

  }

  return (
    <>
      <p>{status}</p>
      {buttons.map((button) => (
        <button 
          key={button} 
          onClick={() => handleSetPasscode(button)}>
            {button}
        </button>
      ))}
    </>
  )
}

export default App
