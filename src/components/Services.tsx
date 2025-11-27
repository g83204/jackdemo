import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
    {
        icon: 'fa-school',
        title: '校園圖書採購',
        description: '針對各級學校圖書館、班級圖書角提供適齡書單，協助核銷流程與配送。',
        color: 'orange',
    },
    {
        icon: 'fa-building',
        title: '企業團購優惠',
        description: '提供企業讀書會選書建議、大宗採購專屬折扣，協助打造企業文化牆。',
        color: 'blue',
    },
    {
        icon: 'fa-calendar-check',
        title: '書展活動規劃',
        description: '協助校園或機關舉辦主題書展，包含展架佈置、書展選品與現場活動支援。',
        color: 'green',
    },
    {
        icon: 'fa-magnifying-glass',
        title: '絕版書/教科書協尋',
        description: '找不到的書交給我！擁有廣泛的同業調貨網絡，盡力為您尋找稀缺書籍。',
        color: 'purple',
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">我能為您做什麼？</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">從單本訂購到全館規劃，提供一站式的書籍解決方案。</p>
                </motion.div>

                <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-paper p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 group"
                        >
                            <div
                                className={`w-14 h-14 bg-${service.color}-100 rounded-full flex items-center justify-center text-${service.color}-600 text-2xl mb-6 group-hover:scale-110 transition`}
                            >
                                <i className={`fa-solid ${service.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-ink mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
