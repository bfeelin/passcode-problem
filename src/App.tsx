import { useEffect, useState } from 'react'
import './App.css'

const buttons:Array<string> = ["0","1","2","3","4","5","6","7","8","9"]
const correctCode:string = "5213" 

function App() {
  const [passcode, setPasscode] = useState<string>("")
  const [status, setStatus] = useState<string>("")

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
      <div className='dot-container'>
      {Array(4).fill(1).map((_, i) => {
        if(i < passcode.length){
          return <div key={i} className='filled-dot dot'></div>
        }
        else return <div key={i} className='empty-dot dot'></div>
      })}
      </div>
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
