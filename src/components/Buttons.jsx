import React from "react";
import Button from "./Button";
import styled from "styled-components";

const StButtonContainer = styled.div`
margin: 10px;
`;


export default function Buttons() {
    const alertMassage = () => {
        alert("버튼을 만들어 보세요.");
    };

    const promptMassage = () => {
        prompt("어렵나요?", "");
        console.log(promptMassage());
    };

    return (
        <div>
            <h1>Button</h1>
            <StButtonContainer>
                <Button
                    color="green"
                    size="large"
                    name="Large Primary Button"
                    onClick={alertMassage}
                />
                <Button
                    color="green"
                    size="medium"
                    name="meidium"
                />
                <Button
                    color="green"
                    size="small"
                    name="small"
                />
            </StButtonContainer>
            <StButtonContainer>
                <Button
                    color="red"
                    size="large"
                    name="Large Negative Button"
                    onClick={promptMassage}
                />
                <Button
                    color="red"
                    size="medium"
                    name="meidium"
                />
                <Button
                    color="red"
                    size="small"
                    name="small"
                />
            </StButtonContainer>
        </div>
    );
}
