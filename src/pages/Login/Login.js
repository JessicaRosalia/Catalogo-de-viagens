import React, { useEffect, useState } from "react";
import Seguranca from '../../assets/images/seguranca.png';
import Logo from '../../assets/images/logo.png';
import { ContainerInputStyled, ContainerStyled, DivisionLeftStyled, FormStyled, DivisionRightStyled, ErrorStyled } from "./style";
import { login } from "../../services";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);

    useEffect(() => {
        setErrorLogin(false);
    }, [email, password]);

    const realizarLogin = (e) => {
        e.preventDefault();
        const user = {
            login: email,
            password: password
        }
        login(user).then((res)=> {
            const token = res.headers.authorization;
            localStorage.setItem('token', token);
            window.location.href="/cadastro-de-destinos"    
        }).catch(()=> {
            setErrorLogin("Usuário não encontrado.");
        })
    }
    
    return (
        <ContainerStyled>
            <DivisionLeftStyled>
                <FormStyled>
                    <header>
                            <img className="logo" src={Logo} alt="logo do FlowTrip. Um ônibus, um hotel, um avião e uma mala" />
                        <h4>É um prazer ter você de volta!<br></br>
                        Você pode fazer login agora mesmo.
                        </h4>
                        <ErrorStyled>{errorLogin}</ErrorStyled>
                    </header>
                    <form>
                        <ContainerInputStyled>
                            <label htmlFor="email">E-mail</label>
                            <input
                                className="input"
                                id="email"
                                type="email"
                                placeholder="Insira seu email"
                                required
                                value={email}
                                onChange={(v)=>setEmail(v.target.value)}
                            />
                        </ContainerInputStyled>
                        <ContainerInputStyled>
                            <label htmlFor="password">Senha</label>
                            <input
                                className="input"
                                id="password"
                                type="password"
                                placeholder="Insira sua senha"
                                required
                                value={password}
                                onChange={(v)=>setPassword(v.target.value)}
                            />
                            <span>Esqueci minha senha</span>
                        </ContainerInputStyled>
                        <input type="submit" value="Entrar" className="btn-login" onClick={(e) => realizarLogin(e)} />
                    </form>
                </FormStyled>
            </DivisionLeftStyled>
            <DivisionRightStyled>
                <img className="image" src={Seguranca} alt="FLowTrip" />
                <div className="notice">
                    <h4>Navegue, faça transações e controle tudo com segurança</h4>
                    <p>A plataforma FlowTrip lhe garante segurança para executar quaisquer atividades. Você fica no controle de tudo, e sem medo! </p>
                </div>
                <footer>
                    <span></span><span></span><span></span>
                </footer>
            </DivisionRightStyled>
        </ContainerStyled>

    )
}