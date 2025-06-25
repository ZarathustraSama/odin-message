import React from "react";

import Navbar from "./Navbar";
import ProfileDetails from "./ProfileDetails";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const url = `api/v1/profile/show/${params.id || ""}`;
    fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Profile response was not ok.");
    })
    .then((res) => setProfile(res)
    )
    .catch((err) => console.log(err))
  }, [params.id]);

  return (
    <>
      <Navbar />
      <ProfileDetails profile={profile}/>
    </>
  )
}

export default Profile;