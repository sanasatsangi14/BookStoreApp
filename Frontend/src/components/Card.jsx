import React from 'react'

function Card({item}) {
  return (
    <>
    <div className='mt-4  my-4 p-3'>
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-white">
  <figure>
    <img
      src={item.img}
      alt="blah" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-lg hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Card