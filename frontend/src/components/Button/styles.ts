import styled from "styled-components"
import {shade} from "polished"

export const Container = styled.button`
    
    background: #ff9000;
    border-radius: 10px;
    height: 56px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 100%;
    margin-top: 16px;
    font-weight: 500;
    transition: background-color 0.5s;

    &:hover{
        background: ${shade( 0.2, "#ff9000" )}
    }

    &:focus{
        border: 2px solid ${shade(0.2, shade( 0.2, "#ff9000" ))}
    }

`