import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 10%;
  border:2px #000000 solid;
  text-align: -webkit-center;
  background-color: #FFB7DD;
  padding: 10px;
  font-size: 20px;
`

export const RowContainer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  margin-top: 4px;
`

export const Collision = styled.div`
  width: calc(40% - 8px);
  margin: 0 4px;
  background-color: #87CEFA;
  line-height: 50px;
`

export const AddButton = styled.div`
  width: calc(100% - 8px);
  background-color: #87CEFA;
  margin: 4px;
  line-height: 50px;
`

export const K = styled.input`
  width: calc(100% - 16px);
  height: 50px;
  background-color: #87CEFA;
  line-height: 50px;
  font-size: 20px;
`

export const Index = styled.div`
  width: calc(10% - 8px);
  margin: 0 4px;
  line-height: 50px;
  background-color: #87CEFA;
`

export const Text = styled.input`
  width: calc(40% - 8px);
  margin: 0 4px;
  background-color: #87CEFA;
  font-size: 20px;
`

export const DeleteButton = styled.div`
  width: calc(20% - 8px);
  background-color: #87CEFA;
  line-height: 50px;
  margin: 0 4px;
`