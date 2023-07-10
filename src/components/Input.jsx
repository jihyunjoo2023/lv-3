import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const StInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;
const StInputForm = styled.input`
    width: 200px;
    height: 40px;
    border: 1px solid rgb(51, 51, 51);
    border-radius: 8px;
`;

export default function Input() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("0");

    const onChangeNameHandler = (event) => {
        // event.target.value();
        setName(event.target.value);
        console.log(event.target.value);
    };
    const onChangePriceHandler = (event) => {
        const { value } = event.target;
        let str = value.replaceAll(",", "");
        setPrice(str);
    };

    const addComma = (price) => {
        let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return returnString;
    };

    const alertMassage = () => {
        if (name === "" && price === "0") {
            return alert("이름과 가격 모두 입력해주세요!");
        } else {
            alert(`{named : ${name} , price : ${price}}`);
        }
    };
    return (
        <>
            <h1>Input</h1>
            <StInputContainer>
                이름
                <StInputForm
                    type="text"
                    value={name}
                    onChange={onChangeNameHandler}
                />
                가격
                <StInputForm
                    type="number"
                    value={addComma(price) || ""}
                    onChange={onChangePriceHandler}
                    // onInput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                    // 다시 
                    // 컴마 없앴다 빼기
                />
                <Button
                    color="green"
                    size="small"
                    name="저장"
                    onClick={alertMassage}
                />
            </StInputContainer>
        </>
    );
}

// // 1,234,567,890
// var original = "1234567890";
// var fomatting = original.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
