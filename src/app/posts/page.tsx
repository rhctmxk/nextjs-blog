import {getAllPosts} from "@/service/posts";
import FilterablePosts from "@/components/FilterablePosts";

export default async function PostPage() {
    const posts = await getAllPosts();
    // Posts에 있는 카테고리를 가지고 오면 중복 발생 가능성 있음 -> 중복을 Set으로 변환 -> Set을 다시 배열로 변환함
    // @ts-ignore
    const categories = [...new Set(posts.map(post => post.category))];

    return (
        <FilterablePosts posts={posts} categories={categories}/>
    );
}
