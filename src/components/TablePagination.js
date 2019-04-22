import React from "react"
import '../styles/Posts.css'

const Pagination = () => {
    return (
      <ul className="pagination">
            <li className={'pagination__page pagination__page--active'}>
               1
            </li>
            <li className={'pagination__page'}>
               2
            </li>
            <li className={'pagination__page'}>
               3
            </li>
      </ul>
    )
  };

  export default Pagination