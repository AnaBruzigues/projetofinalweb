import {Header} from '../../componentes'
import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { apiUser } from "api/data";
import { useForm } from "react-hook-form";



    const Cadastro = () => {
        const [isLoading, setIsLoading] = useState(true);
        const history = useHistory();
        const { handleSubmit, register } = useForm();
      
        useEffect(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }, []);
      
        const handleLogin = useCallback(
          async (data) => {
            console.log(data);
            try {
              await apiUser.register(data);
              toast.success("Usuário Cadastrado com sucesso!");
              history.push("/login");
            } catch (error) {
              toast.error(`Falha no Login! ${error.response.data}`);
            }
          },
          [history]
        );

    return(
        <>
            <Header/>
            <header>
                <h1>Cadastro de novo membro</h1>
            </header>
            <div className="cad">
                <form>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" id="nome" name="nome"/><br/><br/>
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input type="text" id="sobrenome" name="sobrenome"/><br/><br/>
                    <label htmlFor="profissao">Profissão:</label>
                    <input type="text" id="profissao" name="profissao"/><br/><br/>
                    <label htmlFor="nascimento">Data de nascimento:</label>
                    <input type="date" id="nascimento" name="nascimento"/><br/><br/>
                    <label htmlFor="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade"/><br/><br/>
                    <label htmlFor="contato">E-mail:</label>
                    <input type="email" id="contato" name="contato"/><br/><br/>
                    <label htmlFor="descricao">Descreva seu trabalho:</label>
                    <textarea id="descricao" name="descricao"></textarea><br/><br/>
                    <input type="submit" value="Cadastrar"/>   
                </form>
            </div>
        </>
    )
    }

    export default Cadastro