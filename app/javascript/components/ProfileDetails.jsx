import React from "react";
import { useState } from "react";

import ProfileForm from "./ProfileForm";
import Button from "./Button";

function ProfileDetails({ profile }) {
  const [update, setUpdate] = useState(false);

  function changeToForm(e) {
    e.preventDefault();
    setUpdate(true);
  }

  if (profile && !update) {
    return (
      <main className="profile">
        <span className="detail nickname">{profile.nickname}</span>
        <span className="detail birthday">{profile.birthday}</span>
        <article className="detail bio">{profile.bio}</article>
        <Button value={"Update"} onClick={changeToForm} />
      </main>
    )
  }
  else if (update) {
    return (
      <ProfileForm profile={profile} method={"PUT"} />
    )
  }
  else {
    return (
      <ProfileForm method={"POST"} />
    )
  }
}

export default ProfileDetails;