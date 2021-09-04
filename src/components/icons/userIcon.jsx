// icon:user | CSS Icons https://css.gg/ | Theodore Vorillas
import * as React from "react";

function UserIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 15a1 1 0 00-1-1H9a1 1 0 00-1 1v6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-2v-6z"
      />
    </svg>
  );
}

export default UserIcon;

