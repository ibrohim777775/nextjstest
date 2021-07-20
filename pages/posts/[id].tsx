import MainLayout from "../../containers/MainLayout";
// import Link from 'next/link';
import axios from 'axios';
import {useRouter} from 'next/router';
import MyPost from '../../interfaces/post';
import { StyledAboutPost } from '../../styles/aboutPostStyled';
import { useState } from "react";
import Link  from 'next/link';

interface AboutPost{
  post : MyPost;
  comments: MyPost["comment"]
}


export default function  Post({post,comments}:AboutPost){
  const {query} = useRouter();
  // console.log(query)
  const [comment, setComment] = useState('');
  const [errorComment, setErrorComment] = useState(false);
  const deleteHandler = () =>{
    axios.delete(`https://simple-blog-api.crew.red/posts/${query.id}`)
      .then(response=> console.log(response))
      .catch(error=> console.log(error))
  }
  const editHandler = () =>{

  }
  const changeHandler = (e) =>{
    const {name, value} = e.target;
    if (value.trim()){
      setComment(value.trim());
    }else{
      setComment('');
    }
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    if (!comment){
      setErrorComment(true)
    }else{
      axios.post('https://simple-blog-api.crew.red/comments', {
        "postId": query.id,
        "body" : comment
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      

    }

  }

  return(
    <MainLayout title='Post overview'>
      <StyledAboutPost>

      <div className="container">
        <div className="options">
          <h1>About post</h1>
          <div className="options__items">
            <Link href='/'>
              <a>
              </a>
            </Link>
            <button onClick={deleteHandler} className='delete'>DELETE</button>
            {/* <button onClick={editHandler} className='edit' type='button'>EDIT</button> */}
          </div>

        </div>
        <h2 className='post__title'>{post.title}</h2>
        <p className='post__body'>{post.body}</p>
        <h2 className="comments">Comments</h2>
        {comments ? comments.map(item=>(
          <div key={item.id}>{item.body}</div>
        )): <p>No comments</p>}
        <form className="write__comment">
          <h2>Leave your review</h2>
          <label htmlFor="comment">Comment body</label>
          <textarea onChange={changeHandler} name='comment' rows={5}/>
          <p style={{display:errorComment ? 'block' : 'none'}} className="error__message">Please, write overview for the post</p>
          <button onClick={submitHandler} type='button'>Send review</button>
        </form>
      </div>
      </StyledAboutPost>
    </MainLayout>
  )
}

Post.getInitialProps = async (ctx:any) =>{
  // console.log(ctx.query,' idddd')
  const response = await axios.get(`https://simple-blog-api.crew.red/posts/${ctx.query.id}`);
  const post =await response.data;
  const responseComments = await axios.get(`https://simple-blog-api.crew.red/posts/${ctx.query.id}?_embed=comments`);
  const comments = await responseComments.data.comments
  // await console.log(comments)
 
  return {
    post,
    comments
    
  }

}
    // overflow-wrap: break-word;
