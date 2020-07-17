import React, {useCallback, useRef} from "react"
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import logoImg from "../../assets/logo.png"
import Icon from "react-native-vector-icons/Feather"
import { useNavigation } from "@react-navigation/native"
import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"
import {Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText} from "./styles"
const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null) 
    const navigation = useNavigation();

    

    const handleSignIn = useCallback((data:object) => {
        console.log(data)
    },[])

    return(
        <>
            <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding": undefined} >
                <ScrollView keyboardShouldPersistTaps="handled" >
                    <Container>
                        <Image source={logoImg} />
                        <View>
                            <Title>Faça seu logon</Title>
                        </View>
                        <Form ref={formRef} onSubmit={handleSignIn}>
                            <Input icon="mail" name="email" placeholder="E-mail"/>
                            <Input icon="lock" name="password" placeholder="Senha"/>
                            <View>
                                <Button onPress={() => {formRef.current?.submitForm()}}>Entrar</Button>
                            </View>
                        </Form>
                            <ForgotPassword onPress={() => {}}>
                            <View>
                                    <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                            </View>
                        </ForgotPassword>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
            <CreateAccountButton onPress={() => navigation.navigate("SignUp")}>
                <Icon name="log-in" size={20} color="#ff9000"/>
                <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
            </CreateAccountButton>
        </>
    )
}

export default SignIn