import React from 'react'


export default function DoneItem(props) {
  return (  
    <div className="box" >
      <div className="done" >
        {props.todoDone.text}
      </div>
    </div>
  )
}
