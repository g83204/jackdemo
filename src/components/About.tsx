import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
    {
        icon: 'fa-heart',
        title: '充滿熱忱的服務',
        description: '我不只把書賣給您，更希望您買到對的書。我會耐心傾聽您的需求，提供最中肯的建議。',
    },
    {
        icon: 'fa-truck-fast',
        title: '高效率的執行力',
        description: '報價迅速、送貨準時。急單處理經驗豐富，盡力配合您的行政流程與時程需求。',
    },
    {
        icon: 'fa-list-check',
        title: '專業的選書眼光',
        description: '每月閱讀超過 10 本新書，隨時掌握出版市場動態，為您篩選出含金量最高的優質讀物。',
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="py-20 bg-primary text-white relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:flex items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 mb-10 lg:mb-0"
                    >
                        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm inline-block">
                            <img
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Reading"
                                className="rounded shadow-lg w-full object-cover h-[350px]"
                            />
                        </div>
                    </motion.div>

                    <div ref={ref} className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="text-3xl font-serif font-bold mb-6"
                        >
                            為什麼選擇 Jack？
                        </motion.h2>
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white text-xl">
                                        <i className={`fa-solid ${feature.icon}`}></i>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                        <p className="text-gray-300">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
