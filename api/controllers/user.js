import {db} from "../db.js";



export const addUser = ( req, res) => {

    const q =
        "INSERT INTO usuarios(`nome`,`documento`,`placa`,`veiculo`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.documento,
        req.body.placa,
        req.body.veiculo,
    ];


    db.query(q, [values], (err) => {
       if(err) return res.json(err);
       
       return res.status(200).json("Usuario criado com sucesso");
    });    
};

export const updateUser = (req, res) => {
    const q =
    "UPDATE usuarios SET `nome` = ?, `documento` = ?, `placa` = ?, `veiculo` = ? WHERE `id` = ?"; 

    const values = [
        req.body.nome,
        req.body.documento,
        req.body.placa,
        req.body.veiculo,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuario atualizado com sucesso");
    });

};


export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("Usuario deletado com sucesso.");
    });
};



export const getUsers = (req, res) => {
    const searchTerm = req.query.searchTerm || ""; 
  
    const q = `
      SELECT * 
      FROM usuarios
      WHERE nome LIKE ? OR documento LIKE ? OR placa LIKE ? OR veiculo LIKE ?
    `;
  
    const searchValue = `%${searchTerm}%`;
    const values = [searchValue, searchValue, searchValue, searchValue];
  
    db.query(q, values, (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data);
    });
  };