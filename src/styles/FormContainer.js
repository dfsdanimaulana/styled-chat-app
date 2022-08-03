import { css } from 'styled-components'

export const FormContainer = () => {
    return css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 450px;
        height: 800px;
        background: #f7f7f9;
        opacity: 0.9;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        position: absolute;
        top: 50%;
        left: 80%;
        transform: translate(-50%, -50%);
    `
}

export const FormButton = (color= '#fff', text="#000") => {
    return css`
        display: inline-block;
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;

        background: ${color};
        color: ${text};
        border-radius: 8px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
        transition: all 0.3s ease-in-out;

        &:hover {
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        }
    `
}

export const FormInput = () => {
    return css`
        display: inline-block;
        width: 100%;
        height: 50px;
        margin-bottom: 10px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        border: 1px solid #ccc;

        background: #ffffff;
        border-radius: 8px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
        transition: all 0.3s ease-in-out;

        &:hover {
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        }

        &:focus {
            outline: none;
        }
    `
}

export const FormHr = () => {
    return css`
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: space-around;

        &::before {
            content: '';
            display: block;
            width: 40%;
            height: 1px;
            background: #e6e6e6;
        }
        &::after {
            content: '';
            display: block;
            width: 40%;
            height: 1px;
            background: #e6e6e6;
        }
    `
}