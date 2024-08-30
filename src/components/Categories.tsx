
type Props = {
    categories: string[];
    selected: string;
    onClick: (category: string) => void; // 선택된 카테고리를 인자로 전달하면 아무것도 반환 X
}
export default function Categories({categories, selected, onClick}: Props) {
    return(
        <section className='text-center p-4'>
            <h2 className='text-lg font-bold border-b border-sky-500 mb-2'>Category</h2>
            <ul>
                {categories.map((category) => (
                    <li className={`cursor-pointer hover:text-sky-500 ${category === selected && 'text-sky-600'}`}
                        key={category} onClick={() => onClick(category)}>
                        {category}
                    </li>
                ))}
            </ul>
        </section>
    )
}