import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#ffffff')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.form`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#ffffff')};
  border-radius: 8px;
  padding: 30px;
  width: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const AppLogo = styled.img`
  height: 35px;
  width: 160px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
`

export const LabelText = styled.label`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#94a3b8')};
  font-size: 14px;
  font-weight: 500;
`

export const CustomInput = styled.input`
  font-family: 'Roboto';
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#475569')};
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  padding: 8px;
  margin-top: 5px;
  outline: none;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`

export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`

export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.darkTheme ? '#f9f9f9' : '#1e293b')};
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  border-radius: 6px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  align-self: flex-start;
  font-family: 'Roboto';
  color: #ff0b37;
  font-size: 12px;
  font-weight: 500;
`
