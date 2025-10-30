import { useState } from "react";

function AddTime() {
    const [nome,setNome] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nome);
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