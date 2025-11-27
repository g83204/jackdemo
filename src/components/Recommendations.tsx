import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const books = [
    {
        title: '原子習慣',
        author: 'James Clear',
        category: '商業理財',
        categoryColor: 'accent',
        description: '細微改變帶來巨大成就的實證法則。這本書不僅是理論，更是一套可執行的系統。',
    },
    {
        title: '被討厭的勇氣',
        author: '岸見一郎',
        category: '心理勵志',
        categoryColor: 'green-600',
        description: '所謂的自由，就是被別人討厭。讓阿德勒心理學帶你走出人際關係的煩惱。',
    },
    {
        title: '爺爺的天堂筆記本',
        author: '吉竹伸介',
        category: '兒童繪本',
        categoryColor: 'blue-500',
        description: '用幽默溫暖的方式探討生死議題，適合親子共讀的優質繪本，大人看也很有感觸。',
    },
];

const copyLineId = () => {
    const lineId = 'jack_book888';
    navigator.clipboard.writeText(lineId).then(() => {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }
    });
};

export default function Recommendations() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="recommendations" className="py-20 bg-paper">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary">本月店長推薦</h2>
                        <p className="mt-2 text-gray-600">精選三本值得一讀的好書</p>
                    </div>
                    <a
                        href="#contact"
                        className="text-accent hover:text-orange-700 font-medium mt-4 md:mt-0 flex items-center gap-1 group"
                    >
                        索取完整書單 <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition"></i>
                    </a>
                </div>

                <div ref={ref} className="grid md:grid-cols-3 gap-8">
                    {books.map((book, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-lg shadow-md overflow-hidden group transition duration-300"
                        >
                            <div className="h-64 bg-gray-200 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                                    <i className="fa-solid fa-book text-5xl"></i>
                                </div>
                                <div className={`absolute top-0 right-0 bg-${book.categoryColor} text-white text-xs px-3 py-1 font-bold`}>
                                    {book.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-ink mb-2 group-hover:text-primary transition">{book.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">作者：{book.author}</p>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{book.description}</p>
                                <button
                                    onClick={copyLineId}
                                    className="w-full border border-primary text-primary py-2 rounded hover:bg-primary hover:text-white transition text-sm"
                                >
                                    詢問此書
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
