import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";

import { useStytch, useStytchSession, useStytchUser } from "@stytch/react";

function Home() {
  const stytch = useStytch();
  // Get the Stytch User object if available
  const { user } = useStytchUser();
  const _id = user.emails[0].email;
  //console.log("user=",_id);
  // Get the Stytch Session object if available
  const { session } = useStytchSession();

  //below we r adding a new user or updating the existing user's last visit to the platform
const url = `http://localhost:8080/api/users/${_id}`;

const getRequest = async () => {
  const response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    console.log(data.data)
    if (!data.data ) {
      // The user does not exist, so create a new one.
      const postRequest = async () => {
        const body = {
          _id: _id,
          title: _id,
          body: null,
          change: null,
          lastCreatedAt: Date.now(),
        };
        const response = await fetch("http://localhost:8080/api/users/", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          console.log("User created successfully.");
        } else {
          console.log("Error creating user.");
        }
      };
      await postRequest();
    } else {
      // The user exists, so update it.
      const putRequest = async () => {
        const body = {
          ...data,
          lastCreatedAt: Date.now(),
        };
        const response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          console.log("User updated successfully.");
        } else {
          console.log("Error updating user.");
        }
      };
      await putRequest();
    }
  } else {
    console.log(`Error fetching user: ${response.status}`);
  }
};

getRequest();

  return (

    <div className="home">
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
    </div>
  );
}

export default Home;