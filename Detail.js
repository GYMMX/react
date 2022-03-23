import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";


function Detail(props) {
    const history = useHistory();
    const params = useParams();
    console.log(params)
    const [point, setPoint] = useState(0);


    return (
        <>
            <MyStyled >
                <h2 style={{ fontWeight: "bold", textAlign: "center", color: "#DB84A7" }}>{params.DetailDay}요일 평점남기기!</h2>
                <Center>
                    {Array.from({ length: 5 }, (item, idx) => {
                        return (
                            <Circle key={idx} onClick={() => { setPoint(idx + 1); }}
                                style={{ backgroundColor: point < idx + 1 ? "#ddd" : "#FF1E9D" }} />
                        )
                    })}

                </Center>

                <Btn onClick={() => {
                    history.push("/");
                }}>메인페이지로 가기</Btn>
            </MyStyled>

        </>

    )
}


const MyStyled = styled.div`
    max-width: 350px;
    width: 80vw;
    height: 90vh;
    margin: 5vh auto;
    padding: 5vh 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #FFF0F5;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-weight: bold;
`

const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    background-color: #ddd;
    `
const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 16px;
    border-radius: 20px;
    margin-top: 15px;
    width: 60%;
    background-color: #FFCFDA;
    border: transparent;
    cursor: pointer;
    font-weight: bold;
`


export default Detail;