import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding: 20px;
  width: 100%;
  flex-shrink: 0;
  flex-basis: 100%;
  height: calc(100vh - 200px);
  overflow: scroll;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
  &::-webkit-scrollbar {
    width: 0; /* For Chrome, Safari, and Opera */
  }
`;

export default {
  SectionContainer
};
