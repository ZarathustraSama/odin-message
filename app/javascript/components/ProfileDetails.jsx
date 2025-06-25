import React from "react";

import ProfileForm from "./ProfileForm";

function ProfileDetails({ profile }) {

  if (profile) {
    return (
      <main className="profile">
        <span className="nickname">{profile.nickname}</span>
        <span className="birthday">{profile.birthday}</span>
        <article className="bio">{profile.bio}</article>
      </main>
    )
  }
  else {
    return (
      <ProfileForm />
    )
  }
}

export default ProfileDetails;