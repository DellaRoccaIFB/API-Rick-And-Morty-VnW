import styled from "styled-components"

export const BoxMap = styled.div `
    display: flex;
    flex-direction: row;
    gap: 2vw 2vw;
    flex-wrap: wrap;
    justify-content: center;
`

export const ContainerCharacter = styled.div `
    display: flex;
    width: 40vw;
    background-color: rgb(39, 43, 51);
    border-radius: 10px;
`
export const H1 = styled.h1 `
    text-align: center;
    margin: 3vw 0;
    font-size: 3rem;
`
export const BoxImg = styled.div `
`
export const BoxTextContent = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw 0;
    padding: 0 2vw;
`
export const Img = styled.img `
    width: 15vw;
    border-radius: 10px;
`
export const NameAndStatus = styled.div `
`
export const Name = styled.h2 `
    font-size: 1.5rem;
`
export const Status = styled.p `
    display: flex;
    align-items: center;
    gap: 0 0.5vw;
`
export const Circle = styled.div `
    width: 0.5vw;
    height: 0.5vw;
    border-radius: 50%;
    background: ${(props) => props.status};
`
export const BoxLocation = styled.div `

`
export const LocationDescription = styled.p `
    color: rgb(158, 158, 158);
`
