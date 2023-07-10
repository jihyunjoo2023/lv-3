import React from "react";
import styled from "styled-components";

const SelectList = styled.div`
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 28px;
    &:hover {
        background-color: rgb(240, 240, 240);
    }
`;

const Select = styled.select`
    width: 300px;
    height: 40px;
    border-radius: 12px;
    margin-bottom: 10px;
`;

const SelectLists = styled.div`
    width: 300px;
    height: 100%;
    border-radius: 12px;
    border: 1px solid rgb(221, 221, 221);
    background-color: white;
`;

export default function InsideSelect({ options }) {
    console.log(options);
    return (
        <>
            <Select>
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.name}
                    </option>
                ))}
            </Select>
            <SelectLists>
                {options.map((option) => (
                    <SelectList
                        key={option.value}
                        value={option.value}
                    >
                        {option.name}
                    </SelectList>
                ))}
            </SelectLists>
        </>
    );
}
