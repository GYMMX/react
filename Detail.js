import React from "react";
// 리액트에서 통상적으로..? 쓰는 임포트
import { useHistory, useParams } from "react-router-dom";
// useHistorydhk useParams를 사용하기 위한 임포트
import styled from "styled-components";
// 스타일드 컴포넌트 활용하는 임포트
import { useState } from "react";
import App from "./App";
// 리액트 훅 (값을 바꿔줄 때 활용을 원해서 사용)


function Detail(props) {
    const history = useHistory();
    const params = useParams();
    console.log(params)
    // 콘솔을 이용해서 파람스가 받아온 값을 확인했고 App.js에서 파라미터로 받아온 DetailDay값이 나와서 23번째 줄에 params값으로 요일 별 파라미터를 불러옴
    const [point, setPoint] = useState(0);
    // point 라는 값을 setPoint로 바꿔줄 것이며  0부터 시작한다는 뜻 33번 35번 참고


    return (
        <>
            {/* 화면 가운데에 박스 스타일을 만들어준 스타일드 컴포넌트 */}
            <MyStyled >
                {/* h2태그의 인라인스타일 */}
                <h2 style={{ fontWeight: "bold", textAlign: "center", color: "#DB84A7" }}>{params.DetailDay}요일 평점남기기!</h2>
                {/* 만들어준 동그라미가 플렉스가 아니어서 만들어준 스타일드 컴포넌트 */}
                <Center>
                    {/* 길이가 5인 배열을 만들고 */}
                    {Array.from({ length: 5 }, (item, idx) => {
                        return (
                            // 동그라미 모양의 스타일드 컴포넌트들을 클릭하면 17번에서 써준 useState를 이용해 point값을 변경시켜준다
                            <Circle key={idx} onClick={() => { setPoint(idx + 1); }}
                                // point값이 인데스에 +1 한 조건 보다 작다면 ddd색을 크다면 FF1E9D을 써주자
                                style={{ backgroundColor: point < idx + 1 ? "#ddd" : "#FF1E9D" }} />
                        )
                    })}

                </Center>
                {/* history는 단순히 html에서 a태그와 같은 단순 페이지 이동으로 알고있음 */}
                {/* 꼭 props에서 받아오지 않아도, useHistory 훅을 사용하면 간단히 history 객체에 접근할 수 있다  */}
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