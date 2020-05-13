import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 6px;
  background-color: #353535;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CategoryTitle = styled.span`
  display: inline-block;
  padding: 5px 35px;
  color: #848484;
  font-weight: bold;
`;

const Content = styled.div`
  padding: 20px
  flex: 1;
  position: relative;
  overflow: hidden;
`;

export default {
  Wrapper,
  Header,
  CategoryTitle,
  Content
};
