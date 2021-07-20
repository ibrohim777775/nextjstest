import axios from 'axios';
import { useState } from 'react';
import MainLayout from "../../containers/MainLayout";
import { NewPostStyled } from '../../styles/newPostStyled';

const DATA_POST_URL = 'https://simple-blog-api.crew.red/posts';

interface newPost{
  title: string,
  body: string
}

export default function NewPost(){
  const [post, setPost] = useState({});
  const [errTitle, setErrTitle] = useState(false);
  const [errBody, setErrBody] = useState(false);

  const onChangeHandler = (e) =>{
    // console.dir(e.target);
    const {name, value} = e.target;
    if (value.trim()){
      setPost({...post,[name]: value.trim()});
    }else{
      setPost({...post,[name]: ''});
    }
    // console.log(post)
  }
  const clickHandler = (e) =>{
    e.preventDefault();
    if (!post?.title){
      setErrTitle(true)
    }
    if(!post?.body){
      setErrBody(true)
    }
    if (post.title && post.body){
      axios.post(DATA_POST_URL, {...post})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }
  return(
    <MainLayout title='Create new post'>
      <NewPostStyled>

        <div className="container">
          <h1>Create new post</h1>
          <form className='form'>
            <div className="form__block">
              <label htmlFor="title" className="label">Post title</label>
              <input onChange={onChangeHandler} tabIndex={1} type='text' name='title' required/>
              <div style={{display: errTitle ? 'block' : 'none'}} className="error__message">Please, write the title for new post!!!</div>
            </div>
            <div className="form__block">
              <label htmlFor="body" className="label">Post body</label>
              <textarea onChange={onChangeHandler} tabIndex={2} name='body' rows={10} required/>
              <div style={{display: errBody ? 'block' : 'none'}} className="error__message">Please, write the more information for new post!!!</div>

            </div>
            <button onClick={clickHandler} tabIndex={3} >Create new post</button>
          </form>

        </div>
      </NewPostStyled>
    </MainLayout>
  )
}