import { React, useEffect, useState } from "react";
import axios from "axios";
import * as S from "./App_Styled";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }
    body {
      margin: 0 auto 6vw auto;
      max-width: 1440px;
      background-color: rgb(32, 35, 41);
      color: white;
    }
  `;

export default function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    axios.get("https://rickandmortyapi.com/api/character").then((resposta) => {
      setApiData(resposta.data.results);
      console.log(resposta)
    });
  };

  const Status = () => {};

  return (
    <>
      <GlobalStyle />
      <S.H1>Api Rick and Morty</S.H1>
      <S.BoxMap>
        {apiData.map((item) => (
          <S.ContainerCharacter>
            <S.BoxImg>
              <S.Img src={item.image} alt={item.name} />
            </S.BoxImg>
            <S.BoxTextContent>
              <S.NameAndStatus>
                <S.Name>{item.name}</S.Name>
                <S.Status>
                  <S.Circle
                    status={
                      item.status === "Alive"
                        ? "green"
                        : item.status === "Dead"
                        ? "red"
                        : "grey"
                    }
                  ></S.Circle>
                  {item.status} - {item.species} - {item.gender}
                </S.Status>
              </S.NameAndStatus>
                <S.BoxLocation>
                  <S.LocationDescription>Last known location:</S.LocationDescription>
                  <p>{item.location.name}</p>
                </S.BoxLocation>
            </S.BoxTextContent>
          </S.ContainerCharacter>
        ))}
      </S.BoxMap>
    </>
  );
}

