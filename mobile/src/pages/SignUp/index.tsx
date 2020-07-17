import React, {useRef} from "react"
import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import logoImg from "../../assets/logo.png"
import Icon from "react-native-vector-icons/Feather"
import { useNavigation } from "@react-navigation/native" 
import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"
import {Container, Title, BackToSignIn, BackToSignInText} from "./styles"
const SignUp
: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const navigation = useNavigation()
    return(
        <>
            <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding": undefined} >
                <ScrollView keyboardShouldPersistTaps="handled" >
                    <Container>
                        <Image source={logoImg} />
                        <View>
                            <Title>Crie sua conta</Title>
                        </View>
                        <Form ref={formRef} onSubmit={(data) => {console.log(data)}}>
                            <Input icon="user" name="nome" placeholder="Nome"/>
                            <Input icon="mail" name="email" placeholder="E-mail"/>
                            <Input icon="lock" name="password" placeholder="Senha"/>
                            <View>
                                <Button onPress={() => formRef.current?.submitForm()}>Entrar</Button>
                            </View>                        
                        </Form>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
            <BackToSignIn onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={20} color="#FFF"/>
                <BackToSignInText>Voltar para logon</BackToSignInText>
            </BackToSignIn>
        </>
    )
}

export default SignUp
