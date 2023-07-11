import React from "react";
import InsideSelect from "./InsideSelect";
import OverSelect from "./OverSelect";
import styled from "styled-components";

const Container = styled.div`
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    margin-top: 50px;
    /* overflow: hidden; */
    position: relative;
`;

const SelectBoxList = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function Selects() {
    const options = [
        { value: "react", name: "리액트" },
        { value: "java", name: "자바" },
        { value: "spring", name: "스프링" },
        { value: "react native", name: "리액트네이티브" },
    ];

    return (
        <>
            <Container>
                <h1>Select</h1>
                <SelectBoxList>
                    <OverSelect options={options} />
                    <InsideSelect options={options} />
                </SelectBoxList>
            </Container>
        </>
    );
}
