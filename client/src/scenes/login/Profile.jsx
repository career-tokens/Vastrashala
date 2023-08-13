import { useStytch, useStytchSession, useStytchUser } from "@stytch/react";
import React from "react";
import "./stytch.css"

/*
The Profile component is shown to a user that is logged in.

This component renders the full User and Session object for education. 

This component also includes a log out button which is accomplished by making a method call to revoking the existing session
*/
const Profile = () => {
  const stytch = useStytch();
  // Get the Stytch User object if available
  const { user } = useStytchUser();
  // Get the Stytch Session object if available
  const { session } = useStytchSession();

    return (
        <div className="container">
    <div className="card">

      {/* Revoking the session results in the session being revoked and cleared from browser storage. The user will return to Login.js */}
      <button className="primary" onClick={() => stytch.session.revoke()}>
        Log out
            </button>
        </div>
    </div>
  );
};

export default Profile;