import axios from "axios";
import React, { useRef, useEffect } from 'react';
import styled from "styled-components";
import FormContainer from '../FormContainer';
import { toast } from "react-toastify"

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

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();
  
    useEffect(() => {
      if (onEdit) {
        const user = ref.current;
  
        user.nome.value = onEdit.nome;
        user.documento.value = onEdit.documento;
        user.placa.value = onEdit.placa;
        user.veiculo.value = onEdit.veiculo;
      }
    }, [onEdit]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const user = ref.current;
  
      if (
        !user.nome.value ||
        !user.documento.value ||
        !user.placa.value ||
        !user.veiculo.value
      ) {
        return toast.warn("Preencha todos os campos!");
      }
  
      if (onEdit) {
        await axios
          .put("http://localhost:8800/" + onEdit.id, {
            nome: user.nome.value,
            documento: user.documento.value,
            placa: user.placa.value,
            veiculo: user.veiculo.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      } else {
        await axios
          .post("http://localhost:8800", {
            nome: user.nome.value,
            documento: user.documento.value,
            placa: user.placa.value,
            veiculo: user.veiculo.value,
          })
          .then(({ data }) => toast.success(data))
          .catch(({ data }) => toast.error(data));
      }
  
      user.nome.value = "";
      user.documento.value = "";
      user.placa.value = "";
      user.veiculo.value = "";
  
      setOnEdit(null);
      getUsers();
    };
  
    return (
      <FormContainer ref={ref} onSubmit={handleSubmit}>
        <InputArea>
          <Label>Nome</Label>
          <Input name="nome" />
        </InputArea>
        <InputArea>
          <Label>Documento</Label>
          <Input name="documento" type="text" />
        </InputArea>
        <InputArea>
          <Label>Placa</Label>
          <Input name="placa" />
        </InputArea>
        <InputArea>
          <Label>veiculo</Label>
          <Input name="veiculo" type="text" />
        </InputArea>
  
        <Button type="submit">SALVAR</Button>
      </FormContainer>
    );
  };
  
  export default Form;