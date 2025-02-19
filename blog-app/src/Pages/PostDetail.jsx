import React from 'react'
import { PostAuthor } from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from "../images/blog22.jpg"
 
export const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className='container post-detail__container'>
        <div className='post-detail__header'>
          <PostAuthor/>
          <div className='post-detail__buttons'>
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is Post Title!</h1>
        <div className='post-detail__thumbnail'>
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi explicabo, aliquam placeat porro tempora numquam ratione id voluptatibus sint, consectetur velit quos fugit est, at alias cumque? Recusandae aliquam doloribus accusantium porro beatae ab ratione voluptates eius labore quisquam!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio velit recusandae suscipit nulla laborum! Deserunt blanditiis quod vitae modi reiciendis neque eveniet, autem, ea laudantium, velit corrupti rem ut provident perferendis. Porro, praesentium? Quis impedit praesentium, sequi nihil fugiat a iusto aliquid ducimus corporis error placeat quasi mollitia veritatis. Voluptatum labore voluptatem dolorem. Tempore, laboriosam?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos officiis tempora, optio sequi fugit fuga! Vitae inventore eveniet illum ut aperiam dolorem, quam, asperiores facilis quod unde doloribus officiis deserunt ullam provident eligendi odio iste. Facere repellat necessitatibus aliquam quisquam a cupiditate deserunt dolorem rem sapiente nihil aliquid id odit sequi ut modi provident voluptas eaque quo, molestiae debitis. Tempora, ad fugit animi cum mollitia, voluptatum eligendi eaque soluta eum modi ipsam eius culpa accusamus consequatur unde quidem. Illum impedit sed itaque vitae aspernatur sapiente beatae officia veniam eum enim ipsa nulla praesentium cum sequi illo doloribus explicabo, deserunt expedita dolore architecto voluptatibus suscipit labore nobis nesciunt! Totam eum mollitia atque!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, enim quos? Quasi alias minus autem rerum voluptatibus nulla quas dolor, placeat, earum in molestias, nihil nobis quis eveniet repellat labore provident sed totam id accusamus. Necessitatibus voluptates non cum maiores!</p>
      </div>
    </section>
  )
}
