import styled, {css} from "styled-components"
import Tooltip from "../Tooltip"
interface ContainerProps {
    isFocused: boolean
    isFilled: boolean
    isErrored: boolean
}

export const Container = styled.div<ContainerProps>`

    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    
    color: #666360;
    display: flex;
    align-items: center;
    transition: 0.5s;

    & + div{
        margin-top: 8px;
    }
    ${props => props.isErrored && css`
            border-color: #C53030;
        `}

    ${props => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    ${props => props.isFilled && css`
        color: #ff9000;
    `}

    
    

    input{
        margin-left: 16px;
        border: 0;
        color: #F4EDE8;
        background: transparent;
        flex: 1;
        
        &::placeholder{
            color: #666360;
        }

        

    }

    svg{
        margin-left: 16px;
    }
`

export const Error = styled(Tooltip)`
    height: 20px;

    span{
        background: #C53030;
        color: #FFF;

        &::before{
            border-color: #C53030 transparent;
        }
    }
`