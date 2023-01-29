import React from "react";
import logo from "../../images/logo.svg";
import post1 from "../../images/placeholders/post-3.jpg";
import post2 from "../../images/placeholders/post-2.jpg";
import post3 from "../../images/placeholders/post-1.jpg";
import user1 from "../../images/placeholders/user-1.jpg";

import AppHeader from "../organisms/AppHeader"
import AppFooter from "../organisms/AppFooter"

export default function Default (props){

return (
    <div className="wrapper">

    <AppHeader />

{props.children}
      <AppFooter />
    </div>
  );
}
