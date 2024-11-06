import React, { useState } from "react";
import { BtnsContainer, Button, BtnText } from "./styles";

interface ActionsProps {
  filter: boolean;
  updateFilter: (status: boolean) => void;
}

export default function Actions({ filter, updateFilter }: ActionsProps) {
  const [status, setStatus] = useState(filter);

  function handleActions(item: boolean) {
    setStatus(item);
    updateFilter(item);
  }

  return (
    <BtnsContainer>
      <Button
        onPress={() => handleActions(false)}
        style={!status && { backgroundColor: "#22c55e" }}
      >
        <BtnText>ABERTAS</BtnText>
      </Button>
      <Button
        onPress={() => handleActions(true)}
        style={status && { backgroundColor: "#22c55e" }}
      >
        <BtnText>FINALIZADAS</BtnText>
      </Button>
    </BtnsContainer>
  );
}
