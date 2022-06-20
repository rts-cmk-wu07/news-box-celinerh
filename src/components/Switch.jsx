/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Switch = ({ value, onChange }) => {
  const styles = {
    toggle: css`
      display: inline-block;
      cursor: pointer;
    `,
    toggleInput: css`
      display: none;
      &:checked ~ div {
        background: #009578;
      }
      &:checked ~ div::after {
        transform: translateX(25px);
      }
    `,
    toggleFill: css`
      position: relative;
      width: 50px;
      height: 25px;
      border-radius: 12.5px;
      background: #dddddd;
      transition: background 0.2s;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background: #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        border-radius: 12.5px;
        transition: transform 0.2s;
      }
    `,
  };

  return (
    <label css={styles.toggle}>
      <input
        css={styles.toggleInput}
        type="checkbox"
        checked={value}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />
      <div css={styles.toggleFill}></div>
    </label>
  );
};

export default Switch;
