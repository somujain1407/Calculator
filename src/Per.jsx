import { useState } from "react"

function Per() {
    const [n1, setN1] = useState("")
    const [n2, setN2] = useState("")
    const [n3, setN3] = useState("")

    const pp = () => {
        // parseInt()
        const sum = (parseInt(n1) * parseInt(n2)) / 100
        setN3(sum)
    }




    return (<div>

        <h1>{n3}</h1>
        <label htmlFor="n1">enter nomber</label> <input type="text" id="n1" placeholder="enter no " onChange={(e) => setN1(e.target.value)} /> <br />
        <label htmlFor="n2">enter nomber</label> <input type="text" id="n2" placeholder="eneter percenage " onChange={(e) => setN2(e.target.value)} /> <br />
        <button onClick={pp}>click</button>

    </div>)
}

export default Per