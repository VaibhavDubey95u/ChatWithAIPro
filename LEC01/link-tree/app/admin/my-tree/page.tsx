import { Button } from '@/components/ui/button'
import { getAllLinkForUser } from '@/modules/links/actions'
import LinkForm from '@/modules/links/components/link-form'
import { getCurrentUsrername } from '@/modules/profile/actions'

import { Brush, Share } from 'lucide-react'

import React from 'react'

const page = async() => {
  const links = await getAllLinkForUser();
  // 
  const profile = await getCurrentUsrername();

  // Temporary placeholders until actual profile and links are fetched/passed in.
  // const profile: any = fetchedProfile ?? {
  //   username: '',
  //   bio: '',
  //   socialLinks: [],
  // }
  // const links: any = {
  //   data: [],
  // }

  return (
    <section className='flex flex-col px-4 py-6'>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className="flex flex-row justify-center items-center gap-3">
          <Button
            variant="outline"
            size="default"
            className="gap-2 bg-transparent"
          >
            <Brush size={16} />
            Design
          </Button>
          <Button
            variant="default"
            size="default"
            className="gap-2 "
          >
            <Share size={16} />
            Share
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-14'>
        <div className='order-2 lg:order-1 border-r '>
            <LinkForm

            username={profile?.usename || ""}
            bio={profile?.bio || ""}
            
            link={links?.data?.map((l: { id: string; title: string; url: string; description: string | null; clickCount: number; createdAt: Date; }) => ({ ...l, description: l.description || "" })) || []}
            socialLinks={profile?.socialLinks?.map((s: { id: string; platform: string; url: string; }) => ({...s, platform: s.platform as "email" | "instagram" | "youtube"})) || []}
           
            
            
            />

        </div>

      </div>
    </section>
  )
}

export default page