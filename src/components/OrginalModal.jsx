import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 300px;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: rgb(255, 255, 255);
    z-index: 10000;
`;

export default function OriginalnModal({ setSmallModal }) {
    const closeModal = () => {
        setSmallModal(false);
    };

    return (
        <Container>
            <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
            <Button
                color="red"
                size="small"
                name="닫기"
                onClick={closeModal}
            >
                닫기
            </Button>
            <Button
                color="green"
                size="small"
                name="확인"
            >
                확인
            </Button>
        </Container>
    );
}
