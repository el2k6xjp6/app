import React, { useState } from 'react';
import {
  Container, RowContainer, AddButton, K,
  Index, Text, DeleteButton, Collision,
} from "./styles"

interface rowProps {
  index: number,
  text: string,
  handleUpdateText: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void
  collision: Array<number>,
  handleDeleteRow: (index: number) => void,
}

function Row(props: rowProps) {
  const { index, text, handleUpdateText, handleDeleteRow, collision } = props;
  return (
    <RowContainer>
      <Index>{index + 1}</Index>
      <Text
        value={text}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleUpdateText(event, index) }}
      />
      <DeleteButton
        onClick={() => { handleDeleteRow(index) }}
      >Delete row</DeleteButton>
      <Collision>{collision.map((c) => { return `${c} ` })}</Collision>
    </RowContainer>
  )
}

function LCS(t1: string, t2: string) {
  const dp = [...Array(t1.length + 1)].map(() => Array(t2.length + 1).fill(0));
  for (let i = 1; i < t1.length + 1; i++) {
    for (let j = 1; j < t2.length + 1; j++) {
      if (t1[i - 1] === t2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[t1.length][t2.length];
}

function App() {
  const [k, setK] = useState(3);
  const [textList, setTextList] = useState([] as Array<string>);
  const [rowCounter, setRowCounter] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const [collisionTable, setCollisionTable] = useState([] as Array<Array<number>>);
  const [collisionList, setCollisionList] = useState([] as Array<Array<number>>);

  function handleUpdateText(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const text = event.currentTarget.value
    textList[index] = text;
    setTextList(textList);
    updateCollisionTable(index);
    updateCollisionList(k)
    setIsChange(!isChange);
  }

  function updateCollisionList(K: number) {
    const newCollisionList = [];
    let collision;
    for (let i = 0; i < rowCounter; i++) {
      collision = [];
      for (let j = 0; j < rowCounter; j++) {
        if (i !== j && collisionTable[i][j] >= K) {
          collision.push(j)
        }
      }
      newCollisionList.push(collision);
    }
    setCollisionList(newCollisionList);
  }

  function updateCollisionTable(index: number) {
    let lenList = []
    for (let i = 0; i < rowCounter; i++) {
      lenList.push(LCS(textList[i], textList[index]))
    }
    collisionTable[index] = lenList
    for (let i = 0; i < rowCounter; i++) {
      collisionTable[i][index] = lenList[i];
    }
    setCollisionTable(collisionTable);
  }

  function handleAddRow() {
    textList.push("");
    setTextList(textList);
    for (let i = 0; i < rowCounter; i++) {
      collisionTable[i].push(0);
    }
    collisionTable.push(Array(rowCounter + 1).fill(0))
    setCollisionTable(collisionTable);
    collisionList.push([]);
    setCollisionList(collisionList);
    setRowCounter(rowCounter + 1);
  }

  function handleDeleteRow(index: number) {
    textList.splice(index, 1);
    setTextList(textList);
    for (let i = 0; i < rowCounter; i++) {
      collisionTable[i].splice(index, 1);
    }
    collisionTable.splice(index, 1);
    setCollisionTable(collisionTable);
    setRowCounter(rowCounter - 1);
  }

  function handleChangeK(e: React.ChangeEvent<HTMLInputElement>) {
    const n = +e.currentTarget.value;
    if (!isNaN(n - 0) && n < Number.MAX_SAFE_INTEGER) {
      setK(n);
    }
    updateCollisionList(n)
  }

  return (
    <Container>
      <AddButton onClick={handleAddRow}>Add row</AddButton>
      <K
        value={k}
        placeholder="K"
        onInput={handleChangeK}
      />
      {textList.map((text: string, index: number) => {
        return Row({ text, index, handleUpdateText, handleDeleteRow, collision: collisionList[index] })
      })}
    </Container>
  );
}

export default App;
