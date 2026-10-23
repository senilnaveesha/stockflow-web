import React from 'react'
import {sideBarheader,SideBarNav,SideBarProfilede} from './index'

function SideBar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <SideBarHeader />
      <SideBarProfile />
      <SideBarNav />
    </div>
  )
}

export default SideBar