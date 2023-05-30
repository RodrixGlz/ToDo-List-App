import { useState } from 'react'

const TodoList = () => {

    const [todoArray, setTodoArray] = useState([])

    const [formData, setFormData] = useState({ titulo: ''})
    const [todoEditId, SetTodoEditId] = useState (null)

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value })
    }

    const addTodo = (e) => {
        e.preventDefault();
        if (todoEditId != null){
            const newTodo = [...todoArray]
            let todo = newTodo.find((todo) => todo.id === todoEditId)
            todo.titulo = formData.titulo
            setTodoArray(newTodo)
            SetTodoEditId(null)
            setFormData({ titulo: ''})
        } else {
            if (formData.titulo != ''){
            const todo = formData
            todo.isComplete = false
            todo.id = Date.now()

            setTodoArray([...todoArray, todo])
            setFormData({titulo: ''})
        }
        }
    }

    const toggleTodo = (id) => {
        const newTodo = [...todoArray]
        let todo = newTodo.find((todo) => todo.id === id)
        todo.isComplete = !todo.isComplete
        setTodoArray(newTodo)
    }

    const deleteAllComplete = () => {
        const newTodo = todoArray.filter(todo => todo.isComplete == false)
        setTodoArray(newTodo)
    }

    const setTodoEdit = (id) => {
        const todo = todoArray.find((todo) => todo.id === id)
        setFormData({ titulo: todo.titulo})
        SetTodoEditId(id)
    }
    
    return (
        <div class="Container">
            <h1 class="Title">
                <div class="ToDo">ToDo</div>
                <div class="List">List</div>
            </h1>
            <div class="box-one">
                <form onSubmit={addTodo}>
                    <input class="text" type="text" name='titulo' placeholder="Tarea nueva..." value={formData.titulo} onChange={handleChange}/>
                    <input class="btn-one" type="submit" value="Añadir tarea"/>
                </form>
                    <button class="btn-two" onClick={deleteAllComplete}>Borrar completados</button>
                <form>
                </form>
                <div class="box-two">
                    {
                        todoArray.map((todo) =>
                        <div key={todo.id}>
                            <input class="box" type="checkbox" checked={todo.isComplete} onChange={() => toggleTodo(todo.id)}/>
                            <h1 class="tarea">{todo.titulo}</h1>
                            <button class="btn-three" onClick={() => setTodoEdit(todo.id)}>Modificar</button>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList