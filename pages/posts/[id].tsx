import MainLayout from "../../containers/MainLayout";
import axios from 'axios';
import {useRouter} from 'next/router';
import MyPost from '../../interfaces/post';
import { StyledAboutPost } from '../../styles/aboutPostStyled';

interface AboutPost{
  post : MyPost;
}


export default function  Post({post}:AboutPost){
  const {query} = useRouter();
  // console.log(query)
  const deleteHandler = () =>{
    axios.delete(`https://simple-blog-api.crew.red/posts/${query.id}`)
      .then(response=> console.log(response))
      .catch(error=> console.log(error))
  }
  const editHandler = () =>{

  }

  return(
    <MainLayout title='Post overview'>
      <StyledAboutPost>

      <div className="container">
        <div className="options">
          <h1>About post</h1>
          <div className="options__items">
            <button onClick={deleteHandler} className='delete' type='button'>DELETE</button>
            <button onClick={editHandler} className='edit' type='button'>EDIT</button>
          </div>

        </div>
        <h2 className='post__title'>{post.title}</h2>
        <p className='post__body'>{post.body}</p>
      </div>
      </StyledAboutPost>
    </MainLayout>
  )
}

Post.getInitialProps = async (ctx:any) =>{
  console.log(ctx.query,' idddd')
  const response = await axios.get(`https://simple-blog-api.crew.red/posts/${ctx.query.id}`);
  const post = response.data;
 
  return {
    post
  }

}
    // overflow-wrap: break-word;
