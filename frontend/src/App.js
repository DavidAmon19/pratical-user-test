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



function App() {

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);


  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
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
      <Title>Cadastro</Title>
      <Form/>

      <Grid users={users} />
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
    <GlobalStyle/>
    </>
  );
}

export default App;
