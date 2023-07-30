import React from "react";
import { topBarProps } from "../../../model";

function Topbar({ toggle, changeToggleTrue, changeTogglefalse }: topBarProps) {
  return (
    <div className="bg-light-purple text-white w-[calc(100wv-120px)] h-14 flex justify-between">
      {!toggle && (
        <div>
          <div className="sm:hidden bg-slate-600">
            <div
              className="flex justify-center items-center p-2"
              onClick={() => changeToggleTrue()}
            >
              <h1 className="text-4xl text-white">Menu</h1>
            </div>
          </div>
        </div>
      )}
      <h2 className="text-4xl ">Contact</h2>
      <div></div>
    </div>
  );
}

export default Topbar;
