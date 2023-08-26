import styled from "styled-components";
import { ComponentProps, FunctionComponent, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { ClickableTag } from "..";

interface ClickableTagWithCloseIconProps
  extends ComponentProps<typeof ClickableTag> {
  addonBefore?: ReactNode;
}

const ClickableTagWithCloseIcon: FunctionComponent<
  ClickableTagWithCloseIconProps
> = ({ children, onClick, addonBefore }) => {
  return (
    <Container onClick={onClick}>
      {addonBefore}
      {children}
      <FontAwesomeIcon icon={faClose} />
    </Container>
  );
};

const Container = styled(ClickableTag)`
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    transform: scale(1.05);
    border-color: #c32020;
    color: #c32020;
  }
`;

export default ClickableTagWithCloseIcon;
