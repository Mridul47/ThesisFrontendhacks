import React from 'react'
import Image from 'next/image'
import SidebarLink from '../components/SidebarLink'
import { HomeIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    EllipsisVerticalIcon,
    BellAlertIcon,
    ListBulletIcon,

} from "@heroicons/react/24/outline";

function Sidebar() {
    return (
        <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full'>
            <div className='flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24'>
                <Image src="/images/fhlogo.png" width={60} height={60} />
            </div>
            <div className='space-y-2.5 mt-4 mb-2.5 xl:ml-24'>
                <SidebarLink text="Home" Icon={HomeIcon} active />
                <SidebarLink text="Explore" Icon={HashtagIcon} />
                <SidebarLink text="Notifications" Icon={BellAlertIcon} />
                <SidebarLink text="Messages" Icon={InboxIcon} />
                <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarLink text="Lists" Icon={ListBulletIcon} />
                <SidebarLink text="Profile" Icon={UserCircleIcon} />
                <SidebarLink text="More" Icon={EllipsisVerticalIcon} />
            </div>
            

        </div>
    )
}

export default Sidebar