import React from "react";
import axios from "axios";
import Table from "../Table";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`

text-align: start;
border-bottom: inset;
padding-bottom: 5px;

@media (max-width:500px){
    ${(props) => props.onlyWeb && "display: none"}
}
`;

export const Td = styled.td`
padding-top: 15px;
text-align: ${(props) => (props.alignCenter ? "center" : "start")};
width: ${(props) => (props.width ? props.width : "auto")};

@media (max-width: 500px){
    ${(props) => props.onlyWeb && "display:none"}
}
`;



const Grid = ({ users, setUsers, setOnEdit }) => {
    const handleEdit = (item) => {
      setOnEdit(item);
    };
  
    const handleDelete = async (id) => {
      await axios
        .delete("http://localhost:8800/" + id)
        .then(({ data }) => {
          const newArray = users.filter((user) => user.id !== id);
  
          setUsers(newArray);
          toast.success(data);
        })
        .catch(({ data }) => toast.error(data));
  
      setOnEdit(null);
    };
  
    return (
      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Documento</Th>
            <Th onlyWeb>Placa</Th>
            <Th>Veiculo</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((item, i) => (
            <Tr key={i}>
              <Td width="30%">{item.nome}</Td>
              <Td width="30%">{item.documento}</Td>
              <Td width="20%" onlyWeb>
                {item.placa}
              </Td>
              <Td width="20%" onlyWeb>
                {item.veiculo}
              </Td>
              <Td alignCenter width="10%">
                <FaEdit style={{cursor:'pointer', paddingRight:'5px'}} onClick={() => handleEdit(item)} />
              </Td>
              <Td alignCenter width="10%">
                <FaTrash style={{cursor:'pointer'}} onClick={() => handleDelete(item.id)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  };
  
  export default Grid;