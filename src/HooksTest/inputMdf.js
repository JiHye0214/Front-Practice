import styled from "styled-components"

const InputMdf = () => {

    // 백엔드에서 했던
    // p태그 클릭해서 입력 후 수정 구현하기

    const onClickName = () => {
        
    }

    return(
        <Wrapper>
            <Table>
                <tr>
                    <Th>이름</Th>
                    <Th>국적</Th>
                </tr>
                <tr>
                    <Td onClick={() => onClickName()}>홍길동</Td>
                    <Td onClick={() => onClickName()}>대한민국</Td>
                </tr>
            </Table>
        </Wrapper>
    )
}

export default InputMdf

const Wrapper = styled.div`
    background-color: lightgray;
    width: 400px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Table = styled.table`
    border: 1px solid;
`

const Th = styled.th`
    border : 1px solid;
    background-color: orange;
    padding: 5px 20px;
`

const Td = styled.td`
    border : 1px solid;
    background-color: steelblue;
    padding: 5px 20px;
`