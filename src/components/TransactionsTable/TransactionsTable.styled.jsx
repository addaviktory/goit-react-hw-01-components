import styled from '@emotion/styled';

export const TransactionsTableStyled = styled.table`
    text-align: center;
    color: gray;
    margin: auto;
    margin-top: 60px;
    width: 90%;
`;

export const TableHeadData = styled.td`
  background-color: #013db475;
  font-size: 30px;
  font-weight: 500;
  padding: 5px 20px;
`;

export const TableHead = styled.thead`
  font-size: 30px;
  font-weight: 500;
  padding: 5px 20px;
  color: white;
  background-color: #b5ddfc;
`;

export const TableRowItem = styled.tr`
  background-color: white;
  font-size: 20px;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  &:nth-of-type(2n) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ff9200a3;
  }
`;

export const TableData = styled.td`
  padding: 5px 30px;
`;