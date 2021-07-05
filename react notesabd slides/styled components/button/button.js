import styled  from 'styled-components'
export const Button=styled.button
`width:200px;
height:100px;
background-color: aqua;
`
export const GreenButton=styled.button
`width:200px;
height:100px;
background: ${(props)=>props.backgroundcolor};
`
