import React from 'react'


function SidebarLink({ Icon, text, active }) {
    return (
        // tala `` use garya cha yo use garda tailwind ma javascript esari lekhna milauna lai ho
        <div className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
            <Icon className="h-7" />
            <span className='hidden xl:inline'>{text}</span>
        </div>
    )
}

export default SidebarLink