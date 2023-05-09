import styled from "styled-components";

const Opcoes = styled.ul`
    display: flex;
`;

const Opcao = styled.li`
    height: 100%;
    display: flex;
    padding: 0 5px;
    cursor: pointer;
    font-size: 16px;
    min-width: 120px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao>
                    <p> {texto} </p>
                </Opcao>
            ))}
        </Opcoes>
    );
}

export default OpcoesHeader;
