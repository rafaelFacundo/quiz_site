import styled from "styled-components";

const Navigation = styled.div`
    background-color: white;
    box-shadow: 4px 0px 20px rgba(0,0,0,0.25);
    border-radius: 20px;
    height: 300px;
    width: 200px;
`;
const NavList = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0px;
    padding-top: 5px;
`;
const NavOption = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 8px;
    margin-top: 0;
    transition: all 0.4s;
    &:hover {
        cursor: pointer;
        background-color: lightgray;
        border-bottom: 2px solid lightgreen;
    }
    box-sizing: border-box;
    padding: 7px;
`;

export {
    Navigation,
    NavList,
    NavOption
}