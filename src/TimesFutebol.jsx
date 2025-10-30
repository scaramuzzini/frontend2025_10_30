import axios from 'axios';
import { useEffect, useState } from 'react';
import AddTime from './AddTime';
import EditTime from './EditTime';

const headers = {
    "ngrok-skip-browser-warning": "123"
}

function TimesList() {

    const [times,setTimes] = useState([]);
    const [timeEmEdicao,setTimeEmEdicao] = useState(null);

    useEffect(() => {
        fetchTimes();
    }, []);


    const fetchTimes = async() => {
        axios.get('https://1394373742f7.ngrok-free.app/times', {
            headers:headers
        })
        .then(function(response) {
            console.log(response);
            setTimes(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    const handleNewTime = (novoTime) => {
        console.log('atualizando lista...');
        setTimes([...times,novoTime]);
    }

    const handleDelete = async (id) => {
        console.log(id);
        axios.delete(`https://1394373742f7.ngrok-free.app/times/${id}`, {
            headers:headers
        })
        .then(function(response) {
            console.log(response);
            setTimes(times.filter(t=>t.id !== id));
        })
        .catch(function(error) {
            console.log(error);
        });
    };

    const handleEdit = async (time) => {
        setTimeEmEdicao(time);
    }

    const handleEditTime = (timeEmEdicao) => {
        setTimes(
            times.map((t) =>
                (t.id === timeEmEdicao.id ? timeEmEdicao : t)
            )
        )
    }

    return (<>
        <h1>Lista de times de futebol</h1>
        <AddTime onNewTime={handleNewTime} />
        <EditTime time={timeEmEdicao} onTimeEdit={handleEditTime}/>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do time</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {times.map((t) => (
                    <tr>
                        <td>{t.id}</td>
                        <td>{t.nome}</td>
                        <td>
                            <button onClick={() => handleEdit(t)}>Editar</button> |
                            <button onClick={() => handleDelete(t.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        
    </>)
}

export default TimesList;