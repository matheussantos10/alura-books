import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    width: 100%;
    color: #fff;
    height: 270px;
    padding: 85px 0;
    text-align: center;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

const Titulo = styled.h2`
    color: #fff;
    width: 100%;
    font-size: 36px;
    text-align: center;
`;

const Subtitulo = styled.h3`
    nt-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Resultado = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    margin-bottom: 20px;
    justify-content: center;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreve sua próxima leitura"
                onBlur={(evento) => {
                    const textoDigitado = evento.target.value;

                    const resultadoPesquisa = livros.filter((livro) =>
                        livro.nome.includes(textoDigitado)
                    );
                    setLivrosPesquisados(resultadoPesquisa);
                }}
            />

            {livrosPesquisados.map((livro) => (
                <Resultado>
                    <p> {livro.nome} </p>
                    <img src={livro.src} alt="imagem de livro" />
                </Resultado>
            ))}
        </PesquisaContainer>
    );
}

export default Pesquisa;
