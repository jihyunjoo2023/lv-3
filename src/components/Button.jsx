import React from "react";
import { styled } from "styled-components";

export default function Button({ size, color, name, onClick }) {
    if (color === "green") {
        if (size === "large") {
            return (
                <StAllButton
                    width="200"
                    height="50"
                    color="black"
                    bgcolor="white"
                    border="3px solid rgb(85, 239, 196)"
                    hovercolor="rgb(240, 240, 240)"
                    onClick={onClick}
                >
                    {name}
                </StAllButton>
            );
        } else if (size === "medium") {
            return (
                <StAllButton
                    width="130"
                    height="45"
                    color="black"
                    bgcolor="rgb(85, 239, 196)"
                    border="none"
                    hovercolor="rgb(61, 162, 134)"
                    onClick={onClick}
                >
                    {name}
                </StAllButton>
            );
        } else if (size === "small") {
            return (
                <StAllButton
                    width="100"
                    height="40"
                    color="black"
                    bgcolor="rgb(85, 239, 196)"
                    border="none"
                    hovercolor="rgb(61, 162, 134)"
                    onClick={onClick}
                >
                    {name}
                </StAllButton>
            );
        }
    } else if (color === "red") {
        if (size === "large") {
            return (
                <StAllButton
                    width="200"
                    height="50"
                    color="rgb(214, 48, 49)"
                    bgcolor="white"
                    border="3px solid rgb(250, 177, 160)"
                    hovercolor="rgb(240, 240, 240)"
                    onClick={onClick}
                >
                    {name}
                </StAllButton>
            );
        } else if (size === "medium") {
            return (
                <StAllButton
                    width="130"
                    height="45"
                    color="rgb(214, 48, 49)"
                    bgcolor="rgb(250, 177, 160)"
                    border="none"
                    hovercolor="rgb(221, 121, 99);"
                    onClick={onClick}
                >
                    {name}
                </StAllButton>
            );
        } else if (size === "small") {
            return (
                <StAllButton
                    width="100"
                    height="40"
                    color="rgb(214, 48, 49)"
                    bgcolor="rgb(250, 177, 160)"
                    border="none"
                    hovercolor="rgb(221, 121, 99);"
                    onClick={onClick}
                >
                    {name}
                </StAllButton>
            );
        }
    }
    return <></>;
}

const StAllButton = styled.button`
    margin-right: 10px;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    color: ${({ color }) => color};
    background-color: ${({ bgcolor }) => bgcolor};
    border-radius: 8px;
    cursor: pointer;
    border: ${({ border }) => border};

    &:hover {
        background-color: ${({ hovercolor }) => hovercolor};
    }
`;
