import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 50px 10%;
  text-align: -webkit-center;
  padding: 10px;
  font-size: 1.8rem;
`

export const RowContainer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  margin-top: 8px;
`

export const Collision = styled.div`
  width: calc(40% - 8px);
  margin: 0 4px;
  border:2px #26648E solid;
  border-radius: 30px;
  line-height: 46px;
`

export const AddButton = styled.div`
  width: calc(100% - 8px);
  background-color: #26648E;
  border-radius: 30px;
  margin: 8px 4px;
  line-height: 46px;
  color: #FFFFFF;
  border:2px #000000 solid;
`

export const K = styled.input`
  width: calc(100% - 12px);
  height: 50px;
  margin: 0 4px;
  background-color: #00B2D6;
  color: #FFFFFF;
  border:2px #26648E solid;
  border-radius: 30px;
  text-align: center;
  line-height: 50px;
  font-size: 2rem;
  :focus{
    outline: none;
  }
`

export const Index = styled.div`
  width: calc(5% - 8px);
  margin: 0 4px;
  line-height: 46px;
  border:2px #26648E solid;
  border-radius: 30px;
`

export const Text = styled.input`
  width: calc(40% - 8px);
  margin: 0 4px;
  background-color: #00B2D6;
  color: #FFFFFF;
  border:2px #26648E solid;
  text-align: center;
  font-size: 2rem;
  border-radius: 30px;
  :focus{
    outline: none;
  }
`

export const DeleteButton = styled.div`
  width: calc(25% - 8px);
  background-color: #26648E;
  line-height: 46px;
  margin: 0 4px;
  color: #FFFFFF;
  border-radius: 30px;
  border:2px #000000 solid;
`