import React from "react";

const Header = ({ navigation }) => {
  return (
    <header class="header">
      <h1 class="header-title">AC/DC API</h1>
      {navigation}
    </header>
  );
};

export default Header;
