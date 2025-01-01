import React from 'react'
import ListContainer from '../components/listContainer'

const HomePage = () => {

    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  return (
    <div className='homepage'>
        <ListContainer items={items}/>
    </div>
  )
}

export default HomePage