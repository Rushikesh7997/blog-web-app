import React from 'react'
import { PostAuthor } from '../Components/PostAuthor'
import { Link } from 'react-router-dom'

export const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor/>
          <div className='post-detail__buttons'>
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
