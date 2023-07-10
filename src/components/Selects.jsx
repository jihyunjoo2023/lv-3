import React from "react";
import styled from "styled-components";
import InsideSelect from "./InsideSelect";

const SelectBoxList = styled.div`
    display: flex;
    flex-direction: row;
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    overflow: hidden;
    position: fixed;
    margin-top: 50px;
`;
const OverSelect = styled.div`
    margin-right: 20px;
`;

const SelectLists = styled.div`
    width: 300px;
    height: 100%;
    border-radius: 12px;
    border: 1px solid rgb(221, 221, 221);
    background-color: white;
`;

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

export default function Selects() {
    const options = [
        { value: "react", name: "리액트" },
        { value: "java", name: "자바" },
        { value: "spring", name: "스프링" },
        { value: "react native", name: "리액트네이티브" },
    ];
    return (
        <SelectBoxList>
            <OverSelect>
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
            </OverSelect>
            <InsideSelect options={options} />
        </SelectBoxList>
    );
}

