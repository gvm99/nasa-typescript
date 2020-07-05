import React, {useState, FormEvent} from 'react';
import api from '../../services/api';
import {Title, Form, ApodDiv, LinkDiv} from './style'
interface ApodClass {
    copyright : string;
    explanation: string;
    hdurl: string;
}

const Apod: React.FC = () => {
    const [date, setNewDate] =useState('');
    const [apods, setApods] = useState<ApodClass>();

    
    async function handleAddApods(e: FormEvent<HTMLFormElement>): Promise<void> {
        //DEMO_KEY pois não posso adicionar minha KEY de API, mas para testar favor gerar a sua em https://api.nasa.gov/
        e.preventDefault();
        const response = await api.get(`/planetary/apod?api_key=DEMO_KEY&date=${date}`);
        const apod = response.data;
        
        setApods(apod);
        console.log(apod,apods);
    }
    return (
        <>
            <Title>Foto Astronômica do Dia</Title>
            <Form onSubmit={handleAddApods}>
                <input 
                    placeholder="Digite uma data especial" type="date"
                    value={date}
                    onChange={e => setNewDate(e.target.value)} />
                <button type="submit">Pesquisar</button>
            </Form>
            {apods ? (
                <>
                <ApodDiv>
                    <img src={apods.hdurl} />
                    <div>
                        <strong> {apods.copyright}</strong>
                        <p>{apods.explanation}</p>
                    </div>
                </ApodDiv>
                </>
            ) : (
                <>
                <ApodDiv>
                    <img src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2014/07/andromeda-galaxy.jpg" />
                    <div>
                        <strong> Não temos nenhuma imagem com essa Data</strong>
                        <p>Por favor, nos informe uma nova data.</p>
                    </div>
                    
                    
                </ApodDiv>
                </>
                
            )}
            
            <LinkDiv>
                        <a href="/clima"> Venha ver a Lista de asteroides mais próximas da Terra</a>
                    </LinkDiv>
        </>
    );
};
export default Apod;