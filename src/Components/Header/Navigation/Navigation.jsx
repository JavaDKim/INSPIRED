import React from "react";
import { Gender } from "./Gender/Gender";
import { Category } from "./Category/Category";

export const Navigation = () => (
  <nav>
    <div className="container">
      <Gender />
      <Category />
    </div>
  </nav>
);
