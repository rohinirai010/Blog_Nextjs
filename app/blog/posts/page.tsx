import {posts} from '../../lib/placeholder-data';
import Post from '../../ui/components/posts/Post';

export default function Page() {
  return (
    <>
      <h1>Blog Posts</h1>
     
        {posts.map((post) => <Post key={post.id} {...post} />)}
      
    </>
  );
}