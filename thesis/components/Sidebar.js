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
    EllipsisHorizontalIcon,

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
            <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]">
                Tweet
            </button>
            <div className='text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto'>
                <img
                    src="https://pbs.twimg.com/profile_images/1634262876423852035/VG4YRyVr_400x400.jpg"
                    alt=""
                    className="h-10 w-10 rounded-full xl:mr-2.5"
                />
                <div className="hidden xl:inline leading-5">
                    <h4 className="font-bold">mridul123</h4>
                    <p className="text-[#6e767d]">@mridul123</p>
                </div>
                <EllipsisHorizontalIcon className="h-5 hidden xl:inline ml-10" />
            </div>
        </div>
    )
}

export default Sidebar