import { useState } from 'react'
import { Form } from './components/classes/Form'
import { Form as FormFunc } from './components/func/Form'

function App() {
    const [toggle, setToggle] = useState(true)
    const [arr, setArr] = useState([{ name: 'Bido' }, { name: 'Bobo' }, { name: 'Giga' }, { name: 'Goga' }])

    return (
        <>
            <Form />
            <hr />
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : 'show'}</button>
            {toggle && <FormFunc title='Function Component!!!!' />}
            <ul>
                {arr.map((el) => (
                    <li>{el.name}</li>
                ))}
            </ul>
        </>
    )
}

export default App