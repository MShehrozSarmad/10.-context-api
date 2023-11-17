import React, {useState, useContext} from 'react'
import userContext from '../contexts/useContext'


const Login = () => {
    const [usrnm, setUsrnm] = useState('')
    const [pswrd, setPswrd] = useState('')
    const {setUser} = useContext(userContext)
    const sbmtHndlr = (e) => {
        e.preventDefault()
        setUser({usrnm, pswrd})
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='username' value={usrnm} onChange={(e) => setUsrnm(e.target.value)}/>
        <br />
        <input type="password" placeholder='password' value={pswrd} onChange={(e) => setPswrd(e.target.value)}/>
        <br />
        <button onClick={sbmtHndlr}>Submit</button>

    </div>
  )
}

export default Login