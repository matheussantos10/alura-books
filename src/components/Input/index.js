import styled from "styled-components";

const Input = styled.input`
    color: #fff;
    width: 200px;
    font-size: 16px;
    margin-bottom: 10px;
    border-radius: 50px;
    padding: 20px 140px;
    border: 1px solid #fff;
    background: transparent;

    &::placeholder {
        color: #fff;
        font-size: 16px;
    }
`;

export default Input;
