import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

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

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('感謝您的留言！Jack 會盡快與您聯繫。');
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="bg-paper rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Contact Info */}
                        <div className="bg-primary text-white p-10 md:w-2/5 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-serif font-bold mb-6">聯絡資訊</h3>
                                <p className="mb-8 text-secondary">有任何書籍需求、報價諮詢，歡迎隨時聯繫我。</p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <i className="fa-solid fa-phone mt-1 text-accent"></i>
                                        <div>
                                            <p className="text-xs text-secondary uppercase">電話 / 手機</p>
                                            <p className="font-bold text-lg">0912-345-678</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 cursor-pointer" onClick={copyLineId}>
                                        <i className="fa-brands fa-line mt-1 text-accent"></i>
                                        <div>
                                            <p className="text-xs text-secondary uppercase">LINE ID (點擊複製)</p>
                                            <p className="font-bold text-lg">jack_book888</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <i className="fa-solid fa-envelope mt-1 text-accent"></i>
                                        <div>
                                            <p className="text-xs text-secondary uppercase">Email</p>
                                            <p className="font-medium break-all">jack@bookstore.com.tw</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition"
                                    >
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-10 md:w-3/5">
                            <h3 className="text-xl font-bold text-ink mb-6">留言諮詢</h3>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">您的姓名</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                                        placeholder="王小明"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">聯絡電話</label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                                        placeholder="0912345678"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">諮詢項目</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition bg-white">
                                        <option>圖書採購報價</option>
                                        <option>書展活動規劃</option>
                                        <option>教科書/教材諮詢</option>
                                        <option>其他合作</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">需求說明</label>
                                    <textarea
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                                        placeholder="請簡述您的需求..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition shadow-md"
                                >
                                    發送訊息
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
