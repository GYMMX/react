import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Main(props) {

    const history = useHistory();
    const day = ["일", "월", "화", "수", "목", "금", "토"];

    return (
        <MyStyled >
            <h1 style={{ textAlign: "center", color: "#DB84A7" }}>내 일주일은?</h1>

            {Array.from({ length: 7 }, (item, idx) => {
                const random = Math.floor(Math.random() * 5);
                return (
                    <Center key={idx}>
                        {day[idx]}



                        {Array.from({ length: 5 }, (item, idx) => {
                            return (
                                <Circle key={idx} style={{ background: idx <= random ? "#FF1E9D" : "#ddd" }} />
                            );
                        })}



                        <Triangle onClick={() => {
                            history.push(`/detail/${day[idx]}`);
                        }}></Triangle>
                    </Center>
                )
            })}
        </MyStyled>
    );
}

const MyStyled = styled.div`
    max-width: 350px;
    width: 80vw;
    height: 90vh;
    margin: 5vh auto;
    padding: 5vh 0;
    border: 1px solid #FFE4E1;
    box-sizing: border-box;
    border-radius: 5px;
    background-color:  #FFF0F5;
`

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
    `
const Triangle = styled.div`
    appearance: none;
    background-color: transparent;
    border-color: #FF7E9D;	
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1.6rem solid #FF7E9D;
    color: 	#FF7E9D;
    cursor: pointer;
    `
export default Main;