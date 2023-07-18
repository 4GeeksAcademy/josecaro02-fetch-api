//rafce
import { object } from 'prop-types';
import React from 'react'

import Card from './Card';


const Info = () => {
  //                                            0                                                                                  1
  let cardsInfo = [{ title: '4geeks', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit.' }, { title: 'Latam', description: 'Suspendisse in sapien purus. Ut vitae consequat an.' }, { title: 'Costa Rica', description: 'React approaches changes with care. ' }]
  console.log(cardsInfo)
  return (
    <div>
      {cardsInfo.map((value) => {
        return <Card title={value.title} description={value.description} />
      })}
    </div>
  )
}

export default Info