import { Post } from '@/service/posts';
import PostCard from "@/components/PostCard";

type Props = {posts: Post[]};
export default function PostGrid({ posts }: Props) {
    // 1. 모든 포스트 데이터를 읽어와야 함
    // 2. 모든 포스트 데이터를 보여줌
    console.log(posts)
    return(
        <ul className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {posts.map((post) => (
                <li key={post.path}><PostCard post={post} /></li>
            ))}
        </ul>
    )
}