/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import logo from '../../assets/sundaes-logo.png';

function Header() {
  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        padding: 12px;
      `}
    >
      <img src={logo} height={28} />
    </header>
  );
}

export default Header;
