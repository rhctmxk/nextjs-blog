import PostGrid from "@/components/PostGrid";
import {getFeaturedPosts} from "@/service/posts";


export default async function FeaturedPosts() {
    // 1. 모든 포스트 데이터를 읽어와야 함
    const posts = await getFeaturedPosts();
    // 2. 모든 포스트 데이터를 보여줌

    return(
        <section className='flex flex-col'>
            <h2 className='text-2xl font-bold my-2'>Featured FeaturedPosts</h2>
            <PostGrid posts={posts}/>
        </section>
    )
}