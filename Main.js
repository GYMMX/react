import React from "react";
import { useHistory } from "react-router-dom";
// history로 페이지 간 이동을 간편하게 하는 훅
import styled from "styled-components";

function Main(props) {

    const history = useHistory();
    const day = ["일", "월", "화", "수", "목", "금", "토"];

    return (
        <MyStyled >
            <h1 style={{ textAlign: "center", color: "#DB84A7" }}>내 일주일은?</h1>
            {/* 빈배열을 length가 7일만큼을 만들고 */}
            {Array.from({ length: 7 }, (item, idx) => {
                // 난수를 나타내는 매소드를 5까지만 나오게 설정한 후 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환함으로써 정수로 나타내게 한다
                const random = Math.floor(Math.random() * 5);
                return (
                    // 키 값은 임의로 안댁스값을 줬고
                    <Center key={idx}>
                        {/* 위에 만든 day[idx]을 하나씩 나올 수 있게 했다. */}
                        {day[idx]}


                        {/* 동그라미들을 만들기 위해 7 길이의 배열안에 5길이의 배열을 또 만들어준다 */}
                        {Array.from({ length: 5 }, (item, idx) => {
                            return (
                                // 대신 위에 선언한 난수의 값이 인덱스보다 크거나 같을 경우라는  조건으로 인라인 스타일을 만들었다.
                                <Circle key={idx} style={{ background: idx <= random ? "#FF1E9D" : "#ddd" }} />
                            );
                        })}


                        {/* history를 사용하여 페이지 이동을 하게되는데 이때 백틱을 활용하여 위에서 사용했던  day[idx]의 상세페이지로 이동할 수 있게한다. */}
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