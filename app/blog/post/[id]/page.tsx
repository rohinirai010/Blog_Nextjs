import { posts } from "../../../lib/placeholder-data";
import Post from "../../../ui/components/posts/Post";

export default async function Page({params}: {params: {id: string}}) {
  const { id } = await params;
    const post = posts.find((post) => post.id === id);
    
     if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>
  );
}
