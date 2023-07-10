import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
`;

const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 200px;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 24px;
    background-color: white;
    z-index: 10000;
`;

const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid rgb(221, 221, 221);
    cursor: pointer;
    margin-left: 200px;
`;

export default function OverLayModal({ setLargeModal }) {
    const modalRef = useRef(null);

    const closeModal = () => {
        setLargeModal(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setLargeModal();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [setLargeModal]);

    return (
        <StModalOverlay>
            <ModalContainer ref={modalRef}>
                <CloseButton onClick={closeModal}>X</CloseButton>
                <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
            </ModalContainer>
        </StModalOverlay>
    );
}
