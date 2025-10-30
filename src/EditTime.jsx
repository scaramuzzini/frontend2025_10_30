import { useEffect, useState } from "react";
import axios from 'axios';

const headers = {
    "ngrok-skip-browser-warning": "123"
}

const EditTime = ({time, onTimeEdit}) => {
    const [nome,setNome] = useState('');

    useEffect(() => {
        if (time) {
            setNome(time.nome);
        }
    },[time])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nome);
        const timeEditado = {
            nome
        }
        axios.put(`https://1394373742f7.ngrok-free.app/times/${time.id}`, 
            timeEditado, {
            headers:headers
        })
        .then(function(response) {
            console.log('time editado com sucesso...');
            console.log(response.data);
            setNome('');
            onTimeEdit(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                <button type="submit">Salvar edição</button>
            </form>
        </>

    )
}

export default EditTime;