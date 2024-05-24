import React from 'react'
import { EditRewardForm } from './edit-reward-form'
import { getRewardById } from '@/data/queries'

const page = async ({params, searchParams}) => {
    const data = await getRewardById(params.id)
    console.log(data);
  return (
    <EditRewardForm data={data} id={params.id} name={searchParams.name}/>
  )
}

export default page