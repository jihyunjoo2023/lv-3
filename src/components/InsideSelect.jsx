import React, { useState } from "react";
import styled from "styled-components";

const StInsideSelect = styled.div`
    margin-right: 20px;
    position: relative;
    z-index: 1;
`;

const SelectList = styled.div`
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 0 28px; */

    &:hover {
        background-color: rgb(240, 240, 240);
    }
`;

const Select = styled.div`
    width: 300px;
    height: 40px;
    border: 1px solid black;
    border-radius: 12px;
    margin-bottom: 10px;
`;

const SelectLists = styled.div`
    width: 300px;
    height: 100%;
    border-radius: 12px;
    border: 1px solid rgb(221, 221, 221);
    background-color: white;
    z-index: 999;
`;

export default function InsideSelect({ options }) {
    const [list, setList] = useState("리액트");
    const [chooseBox, setChooseBox] = useState(false);
    const showList = () => {
        setChooseBox(!chooseBox);
    };

    return (
        <>
            <StInsideSelect>
                <Select onClick={showList}>{list}</Select>
                {chooseBox && (
                    <SelectLists>
                        {options.map((option) => (
                            <SelectList
                                key={option.value}
                                value={option.value}
                                onClick={() => {
                                    setList(option.name);
                                    showList(false);
                                }}
                            >
                                {option.name}
                            </SelectList>
                        ))}
                    </SelectLists>
                )}
            </StInsideSelect>
        </>
    );
}
