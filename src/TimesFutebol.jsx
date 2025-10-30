import axios from 'axios';
import { useEffect, useState } from 'react';

const headers = {
    "ngrok-skip-browser-warning": "123"
}

function TimesList() {

    const [times,setTimes] = useState([]);

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

    return (<>
        <h1>Lista de times de futebol</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do time</th>
                </tr>
            </thead>
            <tbody>
                {times.map((t) => (
                    <tr>
                        <td>{t.id}</td>
                        <td>{t.nome}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        
    </>)
}

export default TimesList;