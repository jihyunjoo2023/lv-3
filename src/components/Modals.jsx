import { useState } from "react";
import Button from "./Button";
import styled from "styled-components";
// import { ReactDOM } from "react-dom";
import OriginalModal from "./OrginalModal";
import OverLayModal from "./OverLayModal";

const StModalContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function Modals() {
    const [smallModal, setSmallModal] = useState(false);
    const [largeModal, setLargeModal] = useState(false);

    const showModal = () => {
        setSmallModal(true);
    };

    const clickModal = () => {
        setLargeModal(true);
    };

    return (
        <div>
            <h1>Modal</h1>
            <StModalContainer>
                <Button
                    color="green"
                    size="small"
                    name="open modal"
                    onClick={showModal}
                />
                {smallModal && <OriginalModal setSmallModal={setSmallModal} />}

                <Button
                    color="red"
                    size="large"
                    name="open madal"
                    onClick={clickModal}
                />
                {largeModal && <OverLayModal setLargeModal={setLargeModal} />}
            </StModalContainer>
        </div>
    );
}

// import { useState } from "react";
// import OneButtonModal from "./OneButtonModal";
// import TwoButtonModal from "./TwoButtonModal";
// import Button from "./Button";

// export default function Modals() {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [clickOpen, setClickOpen] = useState(false);
//     const showModal = () => {
//         setModalOpen(true);
//     };
//     const clickModal = () => {
//         setClickOpen(true);
//     };

//     return (
//         <>
//             <h1>Modal</h1>
//             <Button
//                 size="small"
//                 name="open modal"
//                 status="primary"
//                 onClick={showModal}
//                 showModal={showModal}
//             >
//                 open modal
//             </Button>

//             <Button
//                 size="big"
//                 name="open modal"
//                 status="negative"
//                 onClick={clickModal}
//                 clickModal={clickModal}
//             >
//                 open modal
//             </Button>
//         </>
//     );
// }
