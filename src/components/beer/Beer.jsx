import React from 'react';
import Styled from './Beer.styles';

const Beer = ({data}) => {
  const {name, image_url, abv} = data;
  return (
    <Styled.Wrapper>
      <Styled.PicWrapper>
        <Styled.Picture src={image_url} alt="beer pic" />
      </Styled.PicWrapper>
      <Styled.DescRow>{name}</Styled.DescRow>
      <Styled.DescRow>{abv}</Styled.DescRow>
    </Styled.Wrapper>
  );
};

export default Beer;
