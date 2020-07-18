import React, {useRef, useCallback} from "react"
import { Image, KeyboardAvoidingView, Platform, View, ScrollView, TextInput, Alert} from "react-native"
import Button from "../../components/Button"
import Input from "../../components/Input"
import logoImg from "../../assets/logo.png"
import Icon from "react-native-vector-icons/Feather"
import { useNavigation, useScrollToTop } from "@react-navigation/native" 
import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"
import * as Yup from "yup"
import getValidationErrors from "../../utils/getValidationsErrors"
import {Container, Title, BackToSignIn, BackToSignInText} from "./styles"
import api from "../../services/api"

interface SignUpFormData{
    name:string
    email:string
    password:string
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const mailInputRef = useRef<TextInput>(null)
    const passwordInputRef = useRef<TextInput>(null)
    const navigation = useNavigation()

    const handleSignUp = useCallback(async (data: SignUpFormData) => {
        try{
            formRef.current?.setErrors({})
            const schema = Yup.object().shape({
                name: Yup.string().required("Nome obrigatório"),
                email: Yup.string().required("E-mail obrigatório").email("Digite um email válido"),
                password: Yup.string().min(6, "No mínimo 6 caracteres")
            })

            await schema.validate(data, {
                abortEarly: false
            })

            await api.post("/users", data)

            Alert.alert("Cadastro realizado com sucesso!", "Seja muito bem vindo(a) ao GoBarber")

            navigation.goBack()

        }catch (err){
            if(err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err)
                formRef.current?.setErrors(errors)

                return
            }

            Alert.alert("Erro no cadastro","Ocorreu um erro ao realizar o cadastro, tente novamente")
        }
    }, [navigation])

    return(
        <>
            <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding": undefined} >
                <ScrollView keyboardShouldPersistTaps="handled" >
                    <Container>
                        <Image source={logoImg} style={{marginTop:30}}/>
                        <View>
                            <Title>Crie sua conta</Title>
                        </View>
                        <Form ref={formRef} onSubmit={handleSignUp}>
                            <Input 
                                autoCorrect={false} 
                                icon="user" 
                                name="name" 
                                placeholder="Nome (Digite o nome completo)"
                                returnKeyType="next" 
                                onSubmitEditing={() => { 
                                    mailInputRef.current?.focus() 
                                }} 
                            />
                            <Input 
                                ref={mailInputRef} 
                                autoCorrect={false} 
                                autoCapitalize="none" 
                                keyboardType="email-address" 
                                icon="mail" 
                                name="email" 
                                placeholder="Email (Ex: exemplos@exe.com)"
                                returnKeyType="send" 
                                onSubmitEditing={() => { 
                                    passwordInputRef.current?.focus() 
                                }} 
                            />
                            <Input 
                                ref={passwordInputRef} 
                                name="password" 
                                icon="lock" 
                                placeholder="Senha (No mínimo 6 caracteres)" 
                                secureTextEntry 
                                returnKeyType="send" 
                                textContentType="newPassword"
                                onSubmitEditing={() => { 
                                    formRef.current?.submitForm() 
                                }} 
                            />
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
