import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-bottom: 100px;
`;

export const ProfileDescription = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 510px;
background-color: #ffffff;
margin-top: 60px;
border-radius: 10px;
box-shadow: 0px 2px 4px -2px black;
position: relative;
padding-bottom: 35px;
margin-bottom: 60px;
`;

export const AvatarImg = styled.img`
    height: 240px;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const AvatarName = styled.p`
    font-weight: 700;
    font-size: 39px;
    margin: 0;
`;

export const AvatarTag = styled.p`
font-weight: 400;
font-size: 32px;
color: #646161;
margin: 0;
`;

export const AvatarLocation = styled.p`
    font-weight: 400;
    font-size: 32px;
    padding-bottom: 110px;
    color: #646161;
    margin-top: 10px;
`;

export const ProfileStats = styled.ul`
display: flex;
    background-color: #f4f4f4;
    border-radius: 0 0 5px 5px;
    padding: 0;
    position: absolute;
    bottom: 0px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 10px;
  box-shadow: 0 0 2px 0 rgb(0 0 0 / 20%);
  &:nth-of-type(1) {
    border-radius: 0 0 0 5px;
  }
  &:nth-of-type(3) {
    border-radius: 0 0 5px 0;
  }
`;

export const StatsLabel = styled.span`
  font-weight: 300;
  font-size: 32px;
  color: #646161;
`;

export const StatsQuantity = styled.span`
  font-size: 34px;
`;