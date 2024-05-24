import { NavTooltip } from '@/components/nav-tooltip'
import { ProgressBarLink } from '@/components/progress-bar'
import { Button } from '@/components/ui/button'
import { ArrowLeft, PlusIcon } from 'lucide-react'
import React from 'react'
import List from './list'

const page = () => {
  return (
    <div className="flex flex-col space-y-6 items-center justify-center p-1 lg:p-4 m-1 lg:m-2">
    <div className="flex justify-evenly w-full items-center">
    <div className="bg-white flex items-center justify-between lg:ml-4 lg:z-40 lg:w-[40%]">
       <ProgressBarLink href="/home">
       <NavTooltip content={"Go back to Home page"}>
       <Button
         variant="ghost"
         className="border border-neutral-300"
         size="sm"
       >
         <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
       </Button>
       </NavTooltip>
       </ProgressBarLink>
     </div>
     <div className="lg:w-[60%] flex justify-start lg:flex-row flex-col items-center space-y-3 lg:space-y-0 lg:space-x-3">
       <h2 className="text-2xl font-semibold text-gray-700">Manage Rewards</h2>
       <ProgressBarLink href="/manage-rewards/create-reward">
         <Button
           variant="primaryOutline"
           className="font-semibold text-xs border border-sky-800 border-b-4 rounded-md"
         >
           <PlusIcon className="mr-2 text-sky-700 h-5 w-5 stroke-[4]" /> Add reward
         </Button>
       </ProgressBarLink>
     </div>
    </div>
    <List/>
    </div>
  )
}

export default page