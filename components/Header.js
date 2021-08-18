import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    //   same used semantic ui docs
    <Menu style={{ marginTop: "20px" }}>
      <Link route="/">
        <a className="item">
          <img
            src="https://avatars.githubusercontent.com/u/67409557?s=60&v=4"
            alt="Logo"
          />
          StartupFund
        </a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Campaigns</a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
