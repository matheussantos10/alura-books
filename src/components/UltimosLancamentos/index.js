import { Titulo } from "../Titulo";
import styled from "styled-components";
import CardRecomenda from "../CardRecomenda";
import { livros } from "./dadosUltimosLancamentos";
import imagemLivro from "../../images/livro2.png";

const UltimosLancamentosContainer = styled.section`
    display: flex;
    padding-bottom: 20px;
    flex-direction: column;
    background-color: #ebecee;
`;

const NovosLivrosContainer = styled.div`
    width: 100%;
    display: flex;
    cursor: pointer;
    margin-top: 30px;
    justify-content: center;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#eb9b00" tamanhoFonte="36px">
                ÚLTIMOS LANÇAMENTOS
            </Titulo>

            <NovosLivrosContainer>
                {livros.map((livro) => (
                    <img src={livro.src} alt="imagem de livro" />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por..."
                subtitulo="React: conheçendo a ferramenta"
                descricao="Construindo uma nova aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;
