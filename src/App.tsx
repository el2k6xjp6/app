import React, { useState } from 'react';
import {
  Container, RowContainer, AddButton, K, Index, Text, DeleteButton, Collision,
} from "./styles"

interface rowProps {
  index: number,
  text: string,
  handleUpdateText: (index: number, text: string) => void
  // collision: Array<number>,
  handleDeleteRow: (index: number) => void,
}

function Row(props: rowProps) {
  const { index, text, handleUpdateText, handleDeleteRow } = props;
  return (
    <RowContainer>
      <Index>{index}</Index>
      <Text
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleUpdateText(index, e.currentTarget.value) }}
      />
      <DeleteButton
        onClick={() => { handleDeleteRow(index) }}
      >Delete row</DeleteButton>
      <Collision>123</Collision>
    </RowContainer>
  )
}

function App() {
  const [k, setK] = useState(3);
  const [textList, setTextList] = useState([] as Array<string>);
  const [isChange, setIsChange] = useState(false);

  function handleUpdateText(index: number, text: string) {
    textList[index] = text;
    setTextList(textList);
    setIsChange(!isChange);
  }

  function handleAddRow() {
    textList.push("");
    setTextList(textList);
    setIsChange(!isChange);
  }

  function handleDeleteRow(index: number) {
    textList.splice(index, 1)
    setTextList(textList);
    setIsChange(!isChange);
  }

  function handleChangeK(e: React.ChangeEvent<HTMLInputElement>) {
    const n = +e.currentTarget.value
    if (!isNaN(n - 0) && n < Number.MAX_SAFE_INTEGER) {
      setK(n)
    }
  }

  return (
    <Container>
      {textList.map((text: string, index: number) => {
        return Row({ text, index, handleUpdateText, handleDeleteRow })
      })}
      <AddButton onClick={handleAddRow}>Add Button</AddButton>
      <K
        value={k}
        placeholder="K"
        onInput={handleChangeK}
      />
    </Container>
  );
}

export default App;
