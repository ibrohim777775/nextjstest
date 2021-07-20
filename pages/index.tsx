import axios from 'axios';
import Head from 'next/head'
import { useState,useEffect } from 'react';
import MainLayout from '../containers/MainLayout';
import MyPost from '../interfaces/post';
import { StyledMain } from '../styles/indexStyled';
import Link from 'next/link';

interface PostsPage{
  posts: MyPost[]
}
const DATA_URL = 'https://simple-blog-api.crew.red/posts';

export default function Posts({posts}:PostsPage) {
  
  return (
    <MainLayout title='Posts'>
      <StyledMain>
        <div className="container">

          {/* <h1>Hello world</h1> */}
        
          <div className="posts">
            {posts.map(item=> (
            <div key={item.id} className="post__items">
              <div className="post__inners">
                <Link href={`posts/[id]`} as={`posts/${item.id}`}>
                  <a>
                <h4 className="post__title">{item.title}</h4>

                  </a>
                </Link>
                <p className="post__body">{item.body}</p>
              </div>
            </div>

            ))}
          </div>
         
        </div>
      </StyledMain>
    </MainLayout>
  )
}

Posts.getInitialProps = async () =>{
 
  const response = await axios.get(DATA_URL);
  const posts = response.data;
 
  return {
    posts
  }
  

}
