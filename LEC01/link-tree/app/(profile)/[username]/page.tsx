import { logProfileVist } from '@/modules/analitics/actions';
import { getUserByUsername } from '@/modules/profile/actions';
import TreeBioProfile from '@/modules/profile/components/treebio-profile';
import { redirect } from 'next/navigation';

import React from 'react'

const profilePage = async ({ params }: { params: Promise<{ username: string }> }) => {
    const { username } = await params;
    const profileData = await getUserByUsername(username)

    if (profileData?.usename !== username) {
        return redirect("/")
    }
      logProfileVist(profileData.id).catch((err) => {
    console.error("Error logging profile visit:", err);
  });

    return (
    
    <TreeBioProfile profileData={profileData} />
    )
}

export default profilePage
