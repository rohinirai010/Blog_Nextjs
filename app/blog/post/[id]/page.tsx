import { notFound } from "next/navigation";
// import { posts } from "../../../lib/placeholder-data";
import Post from "../../../ui/components/posts/Post";
import { connectToDb, getPosts } from '@/app/lib/data';

export default async function Page({params}: {params: {id: string}}) {
  const posts = await getPosts();
  const { id } = await params;
    const post = posts?.find((post) => post.id === id);
    
     if (!post) {
     notFound();
  }

  return (
    <>
      <h1>Post</h1>
      {post && <Post {...post} />}
    </>
  );
}
