import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Container from "./components/Container/index.js";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";
import Grid from "./components/Grid";
import { useEffect,useState } from "react";
import axios from "axios";


const Title = styled.h2`
text-align: center;
margin-bottom:20px;
`;


const InputArea = styled.div`

display:flex;
flex-direction:column;
padding:0 10px;
border:1px solid #bbb;
box-shadow: 0px 0px 5px #ccc;
background-color: #FFF;
margin-top:20px;
`;

const Label = styled.label``;

const Input = styled.input`
border:1px solid #bbb;
border-radius:5px;
height:40px;
margin-top:10px;
margin-bottom:10px;
width:100%;
`;



function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800", {
        params: { searchTerm }, 
      });
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <InputArea>
        <Label>Pesquisar Usuario</Label>
        <Input        
          type="text"
          value={searchTerm}
          onChange={handleSearch}          
        />
        </InputArea>
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
