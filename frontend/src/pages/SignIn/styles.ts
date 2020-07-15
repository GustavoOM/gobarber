import styled, {keyframes} from "styled-components"
import signInBackgroundImg from "../../assets/sign-in-background.png"
import {shade} from "polished"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

` 

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;
`

const appersFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px)
    },
    to{
        opacity: 1;
        transform: translateX(0)
    }
`

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    animation: ${appersFromLeft} 1s;

    form{
        margin: 50px 0px;
        width: 340px;
        text-align: center;

        h1{
            margin-bottom: 24px;
        }

        a{
            color: #F4EDE8;
            display: block;
            margin-top: 18px;
            text-decoration: none;
            transition: 0.5s;

            &:hover{
                color: ${shade(0.2,"#F4EDE8")}
            }
        }
    }

    > a{
        color: #ff9000;
        display: block;
        text-decoration: none;
        transition: 0.5s;

        &:hover{
            color: ${shade(0.2,"#ff9000")}
        }
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`
