import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 33%;
`;

const Picture = styled.div`
  background-image: url("${({ src }) => src}");
  height: 100%;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const PicWrapper = styled.div`
  padding: 10px;
  height: 60%;
  width: 100%;
  border: 2px solid gray;
  border-radius: 6px;
  margin-bottom: 5px;
`;

const DescRow = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

export default {
  Wrapper,
  Picture,
  PicWrapper,
  DescRow
};
