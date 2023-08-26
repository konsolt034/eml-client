"use client";

import { FunctionComponent } from "react";
import styled from "styled-components";

import { CustomLink, Title } from "..";
import SearchButton from "../searchButton/SearchButton";

interface HeadingProps {
  showFilter?: () => void;
  showSearchButton?: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #2c2c2c;
  padding-bottom: 8px;
`;

const Heading: FunctionComponent<HeadingProps> = ({
  showFilter,
  showSearchButton = true,
}) => {
  return (
    <Container>
      <CustomLink href={"/"}>
        <Title size="32px">EML</Title>
      </CustomLink>
      {showSearchButton && (
        <SearchButton onClick={() => showFilter && showFilter()} />
      )}
    </Container>
  );
};

export default Heading;
