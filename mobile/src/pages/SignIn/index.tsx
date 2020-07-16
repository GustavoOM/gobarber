import React from "react"
import { Image } from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import logoImg from "../../assets/logo.png"
import Icon from "react-native-vector-icons/Feather"
import {Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText} from "./styles"
const SignIn: React.FC = () => {
    return(
        <>
            <Container>
                <Image source={logoImg} />
                <Title>Faça seu logon</Title>
                <Input icon="mail" name="email" placeholder="E-mail"/>
                <Input icon="lock" name="password" placeholder="Senha"/>
                <Button onPress={() => {}}>Entrar</Button>
                <ForgotPassword onPress={() => {}}>
                    <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                </ForgotPassword>
            </Container>
            <CreateAccountButton onPress={() => {}}>
                <Icon name="log-in" size={20} color="#ff9000"/>
                <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
            </CreateAccountButton>
        </>
    )
}

export default SignIn