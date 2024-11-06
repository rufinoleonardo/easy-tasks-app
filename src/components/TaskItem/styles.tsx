import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #64748b;
  margin-bottom: 40px;
  padding: 14px;
  border-radius: 4px;
  min-height: 80px;
`;

export const TaskText = styled.Text`
  font-weight: 500;
  color: #fff;
  font-size: 16px;
`;

export const ActionsContainer = styled.View`
  position: absolute;
  bottom: 4px;
  right: 4px;
  flex-direction: row;
  z-index: 99;
  gap: 8px;
`;

export const DeleteBtn = styled.TouchableOpacity`
  background-color: #ef4444;
  padding: 6px;
  border-radius: 99px;
`;

export const CheckBtn = styled.TouchableOpacity`
  background-color: #22c55e;
  padding: 6px;
  border-radius: 99px;
`;
