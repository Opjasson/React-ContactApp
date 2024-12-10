import React from 'react'

function DeleteButton({ id, onDelete}) {
  return (
    <div>
        {/* Cara memberikan nilai argumen pada fungsi event handler */}
      <button className='contact-item__delete' onClick={() => onDelete(id)}>X</button>
    </div>
  )
}

export default DeleteButton
