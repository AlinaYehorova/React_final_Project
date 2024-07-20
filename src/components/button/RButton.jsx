/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyles = (isActive) => css`
  background-color: ${isActive ? "#fff" : "#0d50ff"};
  color: ${isActive ? "#282828" : "#fff"};
  border-radius: 6px;
  border: 1px solid ${isActive ? "#282828" : "transparent"};
  padding: 16px 32px;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;

  &:hover {
    background-color: #282828;
    color: #fff;
  }

  &:disabled {
    background-color: #ccc;
    color: #282828;
    border: 1px solid #282828;
    cursor: not-allowed;
  }
`;

function RButton(props) {
  const { children, isActive, ...otherProps } = props;
  return (
    <button css={buttonStyles(isActive)} {...otherProps}>
      {children}
    </button>
  );
}

export default RButton;
