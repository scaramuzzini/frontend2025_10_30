import { useState } from "react";
import axios from 'axios';

const headers = {
    "ngrok-skip-browser-warning": "123"
}

function AddTime() {
    const [nome,setNome] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nome);
        const novoTime = {
            nome
        }
        axios.post('https://1394373742f7.ngrok-free.app/times', 
            novoTime, {
            headers:headers
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nome do time:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                <button type="submit">Adicione time</button>
            </form>
        </>
    )
}

export default AddTime;