/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { GrInbox } from "react-icons/gr";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdArrowBackIosNew } from "react-icons/md";

import { useLocation, Link } from "react-router-dom";

const Navigation = () => {
  const pathName = useLocation().pathname;

  const title =
    pathName === "/settings"
      ? "Settings"
      : pathName === "/"
      ? "Inbox"
      : pathName === "/archive"
      ? "archive"
      : "404";

  const styles = {
    navigation: css`
      padding: 20px 30px;
      border-bottom: 1px solid #e0e1e2;

      & ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        & li {
          &:first-of-type {
            place-self: center start;
            font-size: 1.2rem;
          }

          & > h1 {
            text-align: center;
            color: #324755;
          }

          &:last-child {
            place-self: center end;
            font-size: 1.3rem;
          }

          & svg {
            display: block;
          }

          & a {
            color: #324755;
          }
        }
      }
    `,
  };

  return (
    <nav css={styles.navigation}>
      <ul>
        {(pathName === "/settings" || pathName === "/archive") && (
          <li>
            <Link to="/">
              <MdArrowBackIosNew />
            </Link>
          </li>
        )}
        {pathName === "/" && (
          <li>
            <Link to="/archive">
              <GrInbox />
            </Link>
          </li>
        )}
        <li>
          <h1>{title}</h1>
        </li>
        {pathName === "/" && (
          <li>
            <Link to="/settings">
              <AiTwotoneSetting />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
