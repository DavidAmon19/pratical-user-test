import React, { useRef } from 'react';
import styled from "styled-components";
import FormContainer from '../FormContainer';

const InputArea = styled.div`

display:flex;
flex-direction:column;
`;

const Input = styled.input`
width:120px;
padding:0 10px;
border:1px solid #bbb;
border-radius:5px;
height:40px;
`;

const Label = styled.label``;

const Button = styled.button`
padding:10px;
cursor:pointer;
border-radius:5px;
border:none;
background-color:#2c73d2;
color:white;
height:42px;
`;

const Form = ({ onEdit }) => {

    const ref = useRef();
    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>Documento</Label>
                <Input name="documento" type='text'/>
            </InputArea>
            <InputArea>
                <Label>Placa</Label>
                <Input name="placa" type='text'/>
            </InputArea>
            <InputArea>
                <Label>Veiculo</Label>
                <Input name="veiculo" type='text'/>
            </InputArea>

            <Button type='submit'>SALVAR</Button>

        </FormContainer>
    );
};

export default Form;