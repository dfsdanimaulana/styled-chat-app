import styled from 'styled-components'
import { Link } from 'react-router-dom'

// style
import { FormContainer, FormButton, FormHr } from '../styles/FormContainer'

// icons
import { FaFacebookF } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'

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
    ${FormButton(props => props.color && props.color, props => props.text && props.text)}
`
const Option = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Text = styled.p``
const Anchor = styled.span``
const Hr = styled.span`
    ${FormHr}
`

const Copy = styled.p`
    font-size: 0.8rem;
    color: #fff;
    position: absolute;
    bottom: 10px;
    left: 10px;
`

export default function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <Form>
                    <Button>
                        <FaGoogle /> Sign in with Google
                    </Button>
                    <Button>
                        <FaFacebookF /> Sign in with Facebook
                    </Button>
                    <Button>
                        <FaTwitter /> Sign in with Twitter
                    </Button>
                    <Hr>or</Hr>
                    <Button color='#377DFF' text='#fff'>
                        <FaUser /> Sign in with username
                    </Button>
                </Form>
                <Option>
                    <Text>Don't have an account?</Text>
                    <Anchor>
                        <Link to='/register'>Signup here</Link>
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
