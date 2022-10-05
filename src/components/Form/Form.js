import React, {useState} from 'react';
const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const crearUsuario = e => {
        e.preventDefaul(); // Prevents the normal behavior of the form's submit
        const nuevoUsuario = {firstName, lastName, age};
        console.log('New record', nuevoUsuario);
    }

    return (
        <form onSubmit={crearUsuario}>
            <div className="form-group">
                <label>Name: </label>
                <input className="form-control"  onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input className="form-control" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Age: </label>
                <input className="form-control" onChange={(e) => setAge(e.target.value)}/>
            </div>
            <input type='submit' className="btn btn-dark w-25" value='create user' />
        </form>
    )
}

export default Form;