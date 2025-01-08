import React from 'react'
import Menuitem from './Menuitem'

export default function MenuList({list=[]}) {
  return <ul>
    {
        list && list.length>0?list.map((listItem,index)=><Menuitem key={index} item={listItem}/>)
        :null
    }
  </ul>
}
