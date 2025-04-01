import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Per from './Per'



function App() {
  const btn = [ "Rad | Deg", "x!", "(", ")", "%", "AC", "Inv", "sin", "In", "7", "8", "9", "/", "π", "cos", "log", "4", "5", "6", "*", "e", "tan", "√", "1", "2", "3", "-", "Ans", "EXP", "**", "00", "0", ".", "=", "+", "⌫", ]

  const [dis, setDis] = useState("")

  function cal(item) {
    setDis(item)

    if (item == "=") {

      const s = eval(dis)
      setDis(s)
    }
    else if (item == "AC") {
      setDis("")
    }
    else if (item == "⌫") {
      setDis(dis.slice(0, -1))

    }
    else if (item == "%") {
      const a = eval((dis) / 100)


      setDis(a + "*")

    }
    else {
      setDis(dis + item)

    }


  }

  return (
    <div className='m1'>
      
      <div className='maindiv'>
        <div className='dis'><input type="text" className='search' value={dis} readOnly /></div>
        <div className='btn-cont'> {btn.map((item) => <button className='btn' onClick={() => { cal(item) }}>{item}</button>)} </div>

      </div>

      <Per />
     
</div>

  )
}

export default App
