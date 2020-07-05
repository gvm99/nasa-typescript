import React, {useState, FormEvent} from 'react'
import {Title, Form, ApodDiv, LinkDiv, Table} from './style'
import api from '../../services/api';

interface AstroidClass {
    name : string;
    is_potentially_hazardous_asteroid: string;
    absolute_magnitude_h: string;
    nasa_jpl_url: string;
}
const Clima: React.FC = () => {
    const [date, setNewDate] =useState('');
    const [astroids, setAstroid] = useState<AstroidClass[]>([]);

    async function handleAddAstroids(e: FormEvent<HTMLFormElement>): Promise<void> {
        //DEMO_KEY pois não posso adicionar minha KEY de API, mas para testar favor gerar a sua em https://api.nasa.gov/
        e.preventDefault();
        const response = await api.get(`/neo/rest/v1/feed?api_key=DEMO_KEY&start_date=${date}`);
        const astroid = response.data.near_earth_objects[date];
        
        console.log(astroid);
        setAstroid(astroid);
        console.log(astroids)
    }

    return (
        <>
            <Title>Lista de Asteroides que passarão perto de Nós</Title>
            <Form onSubmit={handleAddAstroids}>
                <input 
                    placeholder="Digite uma data aproximada" type="date"
                    value={date}
                    onChange={e => setNewDate(e.target.value)} />
                <button type="submit">Pesquisar</button>
            </Form>
            <ApodDiv>
                <Table>
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>Apresenta Perigo?</th>
                        <th>Magnitude</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {astroids.map(e=>(
                            <tr>
                                <td>{e.name}</td>
                                <td>{(e.is_potentially_hazardous_asteroid)?"Sim": "Não"}</td>
                                <td>{e.absolute_magnitude_h}</td>
                                <td><a href={e.nasa_jpl_url}>Saiba Mais</a></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ApodDiv>    
            
            <LinkDiv>
                <a href="/"> Venha ver a Foto Astronômica tirada no seu dia especial</a>
            </LinkDiv>
        </>
    );
};

export default Clima;