interface comments{
  postId: string | number,
  body: string,
  id: string | number
}
export default interface MyPost {
  id: string | number,
  title: string,
  body: string,
  comment?:  comments[]
}