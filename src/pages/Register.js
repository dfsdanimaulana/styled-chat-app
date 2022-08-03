import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
    FormContainer,
    FormInput,
    FormButton,
    FormHr,
} from '../styles/FormContainer'

// icons
import { FaFacebookF } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

// create styled components
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url('https://picsum.photos/3000/1000') no-repeat center center
        fixed !important;
    background-size: cover;
`
const Wrapper = styled.div`
    ${FormContainer}
`

const Option = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Text = styled.p``
const Title = styled.h1`
    font-size: 3rem;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
`
const Button = styled.a`
    ${FormButton('#377DFF', '#fff')}
`
const Anchor = styled.span``
const Hr = styled.span`
    ${FormHr}
`

const Input = styled.input`
    ${FormInput}
`
const Other = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
`
const Item = styled.div`
    // create centered circle
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Copy = styled.p`
    font-size: 0.8rem;
    color: #fff;
    position: absolute;
    bottom: 10px;
    left: 10px;
`

export default function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>Register</Title>
                <Form>
                    <Input type='text' placeholder='Name' />
                    <Input type='text' placeholder='Email' />
                    <Input type='text' placeholder='Password' />
                    <Input type='text' placeholder='Confirm Password' />
                    <Button>Register</Button>
                </Form>

                <Hr>Or</Hr>
                <Other>
                    <Item>
                        <FaFacebookF />
                    </Item>
                    <Item>
                        <FaGoogle />
                    </Item>
                    <Item>
                        <FaTwitter />
                    </Item>
                </Other>
                <Option>
                    <Text>Already have an account?</Text>
                    <Anchor>
                        <Link to='/login'>Login</Link>
                    </Anchor>
                </Option>
            </Wrapper>
            <Copy>
                &copy; 2022 - <Anchor>Terms of Service</Anchor> -{' '}
                <Anchor>Privacy Policy</Anchor>
            </Copy>
        </Container>
    )
}
