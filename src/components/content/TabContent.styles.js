import styled from 'styled-components';

const SectionWrapper = styled.div`
  width: 100%;
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
  color: ${({ active }) => (active ? 'white' : '#848484')};
  font-weight: bold;
`;

const AllSections = styled.div`
  position: relative;
  display: flex;
  right: ${({ activeSection }) => activeSection * 100}%;
  transition: all 0.5s ease;
`;

const AllTabs = styled.div`
  position: relative;
  display: flex;
  right: ${({ activeTab }) => activeTab * 100}%;
  transition: all 0.5s ease;
  width: 100%;
`;

const TabWrapper = styled.div`
  flex-shrink: 0;
  flex-basis: 100%;
  overflow: hidden;
`;

export default {
  SectionWrapper,
  Header,
  CategoryTitle,
  AllSections,
  AllTabs,
  TabWrapper
};
