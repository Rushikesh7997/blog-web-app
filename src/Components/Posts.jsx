import React, { useState } from 'react'
import { PostItem } from './PostItem'

import Thumbnail1 from '../images/blog1.jpg'
import Thumbnail2 from '../images/blog2.jpg'
import Thumbnail3 from '../images/blog3.jpg'
import Thumbnail4 from '../images/blog4.jpg'

const DUMMY_POSTS = [
    {
        id:'1',
        thumbnail:Thumbnail1,
        category:'education',
        title:'This is the title of very first blogs.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi facere molestiae amet quod veritatis dignissimos officia iste deserunt aut aspernatur unde atque porro recusandae, repellat aliquam corrupti? Vero, odio!',
        authorID: 3
    },
    {
        id:'2',
        thumbnail:Thumbnail2,
        category:'weather',
        title:'This is the title of very Second blogs.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi facere molestiae amet quod veritatis dignissimos officia iste deserunt aut aspernatur unde atque porro recusandae, repellat aliquam corrupti? Vero, odio!',
        authorID: 1
    },
    {
        id:'3',
        thumbnail:Thumbnail3,
        category:'science',
        title:'This is the title of very Third blogs.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi facere molestiae amet quod veritatis dignissimos officia iste deserunt aut aspernatur unde atque porro recusandae, repellat aliquam corrupti? Vero, odio!',
        authorID: 13
    },
    {
        id:'4',
        thumbnail:Thumbnail4,
        category:'farming',
        title:'This is the title of very fourth blogs.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi facere molestiae amet quod veritatis dignissimos officia iste deserunt aut aspernatur unde atque porro recusandae, repellat aliquam corrupti? Vero, odio!',
        authorID: 11
    },
]

export const Posts = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS)

  return (
    <section className='posts'>
        <div className='container posts__container'>
            {
                posts.map(({id, thumbnail,category,title, desc, authorID})=><PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID} />)
            }
        </div>
    </section>
  )
}
