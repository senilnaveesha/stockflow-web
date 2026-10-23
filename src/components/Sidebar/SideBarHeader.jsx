import React from 'react'

function SideBarHeader() {
  return (
    <div>
        <div className="flex justify-content size=8 bg-[#e85d31] text-white rounded-lg" >
        <BarChart3 cllassName= "size-4"strokeWidth={2.25} />
        </div>

        <div className= 'leading-tight'>
            <p className="text-sm font-semibold">Sidebar Header</p>
            <p className="text-[11px] text-muted-foreground">Distribution System</p>
        </div>
    </div>
  )
}

export default SideBarHeader