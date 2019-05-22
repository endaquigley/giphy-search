import React, { Fragment } from "react";
import styled from "styled-components";

import { Navigation } from "./Navigation";
import { Modal } from "./Modal.js";
import { Gallery } from "./Gallery";
import { Pagination } from "./Pagination";

const Header = styled.header`
  padding: 20px;
  text-align: center;
`;

const Content = styled.main`
  background-color: var(--secondary-colour);
`;

const Footer = styled.footer`
  color: white;
  padding: 20px;
`;

export const App = React.memo(() => (
  <Fragment>
    <Header>
      <Navigation />
    </Header>

    <Content>
      <Modal />
      <Gallery />
    </Content>

    <Footer>
      <Pagination />
    </Footer>
  </Fragment>
));
