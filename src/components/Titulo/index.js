import { styled } from "styled-components";

export const Titulo = styled.h2`
    margin: 0;
    width: 100%;
    padding: 30px 0;
    font-size: ${(props) => props.tamanhoFonte || "18px"};
    font-size: 36px;
    text-align: ${(props) => props.alinhamento || "center"};
    background-color: #fff;
    color: ${(props) => props.cor || "#000"};
`;
