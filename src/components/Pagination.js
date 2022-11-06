import React from 'react'

export const Pagination = ({totalPosts, reposPerPage, setCurrentPage}) => {
    let pages =[];

    for(let i = 1; i<= Math.ceil(totalPosts/reposPerPage); i++) {
        pages.push(i)
    }


  return (
    <div className='flex flex-row justify-between space-x-6 mt-14 text-2xl'>
        {pages.map((page, index) => {
            return <>
            <button className='pagination'
            key={index}
            onClick={()=> setCurrentPage(page)}
            >{page}</button>
            </>
        })}
    </div>
  )
}

export default Pagination