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