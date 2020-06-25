import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import './Components/Cadastro/Cadastro.css';
//import Login from './Components/Login/Login';
//import Cadastro from './Components/Cadastro/Cadastro';

function App() {
  let [nome, setNome] = useState("void");
  let [email, setEmail] = useState("email@email.com");
  let [senha, setSenha] = useState("void");
  let [cpf, setCpf] = useState("000.000.000-00");
  let [cep, setCep] = useState("00.000-000");
  let [cidade, setCidade] = useState("void");
  let [estado, setEstado] = useState("void");
  let [telefone, setTelefone] = useState("00 00000-0000");
  let [nascimento, setNascimento] = useState("00/00/0000"); 

 
  async function Cadastrar(){
    await axios.post(`http://localhost:3333/cadastro` , {
     nome: nome,
     senha: senha,
     email: email,
     cpf: cpf,
     cep: cep,
     estado: estado,
     cidade: cidade,
     telefone: telefone,
     nascimento: nascimento,


    }).then ((body) => {
      console.log("Funcionando!!!!!");
      setNome (body.data.nome);
      setSenha (body.data.senha);
      setEmail (body.data.email);
      setCpf (body.data.cpf);
      setCep (body.data.cep);
      setEstado (body.data.estado);
      setCidade(body.data.cidade);
      setTelefone(body.data.telefone);
      setNascimento(body.data.nascimento);

    }).catch ((err) => {
     console.log("Erro aqui -> " + err);
   });
  }


  return (<>

      <div className="all">
        <div className="dadosPessoais">
          <h4>Dados Pessoais</h4>
          <label>Nome Completo</label><br/>
          <input type="text" name="iptNome" value={nome} onChange={(e) => {setNome(e.target.value)}}/><br/>

          <label>CPF*</label><br/>
          <input type="text" name="iptCpf" value={cpf} onChange={(e) => {setCpf(e.target.value)}} placeholder="Item Obrigatório!"/><br/>

          <label>Data de Nascimento</label><br/>
          <input type="text" name="iptNascimento" value={nascimento} onChange={(e) => {setNascimento(e.target.value)}}/><br/>

          <label>Email*</label><br/>
          <input type="text" name="iptEmail" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Item Obrigatório!"/><br/>

          <label>Senha*</label><br/>
          <input type="text" name="iptSenha" value={senha} onChange={(e) => {setSenha(e.target.value)}} placeholder="Item Obrigatório!"/><br/>
        </div>
        <div className="contatoEndereco">
          <h4>Contato e Endereço</h4>
          <label>CEP*</label><br/>
          <input type="text" name="iptCep" value={cep} onChange={(e) => {setCep(e.target.value)}} placeholder="Item Obrigatório!"/><br/>

          <label>Estado</label><br/>
          <input type="text" name="iptEstado" value={estado} onChange={(e) => {setEstado(e.target.value)}} /><br/>

          <label>Cidade</label><br/>
          <input type="text" name="iptCidade" value={cidade} onChange={(e) => {setCidade(e.target.value)}} /><br/>

          <label>Telefone</label><br/>
          <input type="text" name="iptTelefone" value={telefone} onChange={(e) => {setTelefone(e.target.value)}} /><br/>
        </div>
      </div>
      <button type="submit" onClick={Cadastrar}>Cadastrar</button>

    </>
  );
}

export default App;
