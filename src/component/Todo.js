import axios from 'axios'
    
import React, {useState} from 'react'

const Todo = () =>{

const [name, setName] = useState([])
//import axios, use axios to get APi information
//display those information in my component
const onClick = e =>{
//event handler
e.preventDefault();
axios.get('https://jsonplaceholder.typicode.com/users/1/todos').then (res =>{
    let result = res.data.map(p => p.title) //fixed this line of code, rest of the logicis are same as before
    setName(result)
})

}

    return (
        <div>

<button type="button" class="btn btn-primary" onClick={onClick}> Click me for data</button>
            {
                name.map((name,i) => (
                    <ul>
                        <li className="list-group-item list-group-item-dark" key = {i}> {name} </li>
                        </ul>
                ))
            }

        </div>
    )
}

export default Todo