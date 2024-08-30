import Image from "next/image";
import review from '../../public/images/posts/review-2023.png';
import { Post } from '@/service/posts';

type Props = {posts: Post[]};
export default function PostGrid({ posts }: Props) {
    // 1. 모든 포스트 데이터를 읽어와야 함
    // 2. 모든 포스트 데이터를 보여줌
    console.log(posts)
    return(
        <ul>
            {posts.map((post) => <li key={post.path}>{post.title}</li>)}
        </ul>
    )
}