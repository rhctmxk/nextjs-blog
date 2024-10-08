/**
 * Business logic 은 Component 에서 복잡한 로직을 담고있는 게 아닌,
 * 복잡한 로직을 담당하고 있는 Component 에게 전가해야 함.
 * */
import { readFile } from "fs/promises";
import path from "path";


export type Post = {
    title: string;
    description: string;
    date: Date;
    category: string;
    path: string;
    featured: boolean;
}

export type PostData = Post & { content: string; next: Post | null; prev: Post | null }; // 기존 A type & B type => Intersection

// FeaturedPosts
export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() // 모든 Posts를 읽어오고, featured==true
        .then((posts) => posts.filter((post) => post.featured));
}

// CarouselPosts
export async function getNonFeaturedPosts(): Promise<Post[]> {
    return getAllPosts() // 모든 Posts를 읽어오고, featured==true
        .then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json');
    return readFile(filePath, 'utf-8')
        .then<Post[]>(JSON.parse)
        .then(posts => posts.sort((a,b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(fileName: string): Promise<PostData> {
    const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
    const posts = await getAllPosts();
    const post = posts.find((post) => post.path === fileName);

    if(!post)
        throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

    const index = posts.indexOf(post);
    const next = index > 0 ? posts[index-1] : null;
    const prev = index < posts.length ? posts[index + 1] : null;
    const content = await readFile(filePath, 'utf-8');
    return {...post, content, next, prev};
}