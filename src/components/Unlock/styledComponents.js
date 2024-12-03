// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #161617;
`

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`

export const Text = styled.p`
  font-family: Roboto;
  font-size: 20px;
  color: #e2e8f0;
  margin-bottom: 20px;
`

export const Button = styled.button`
  font-family: Roboto;
  font-size: 16px;
  background-color: #06b6d4;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3c2940;
  }
`
