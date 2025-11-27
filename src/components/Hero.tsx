import { motion } from 'framer-motion';

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

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 pattern-bg opacity-30 z-0"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:flex items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 space-y-6"
                    >
                        <div className="inline-block bg-orange-100 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-2">
                            <i className="fa-solid fa-star mr-1"></i> 您最值得信賴的圖書顧問
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight">
                            用書本連結世界，<br />為您找到最合適的閱讀良伴。
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            我是 Jack，擁有 10 年書局資歷。不只是賣書，更致力於為學校、企業與個人提供量身打造的閱讀提案與採購規劃。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="#contact"
                                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition text-center shadow-lg font-medium"
                            >
                                免費諮詢採購
                            </a>
                            <button
                                onClick={copyLineId}
                                className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-gray-50 transition text-center font-medium flex items-center justify-center gap-2"
                            >
                                <i className="fa-brands fa-line text-xl"></i> 加 LINE 好友
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 mt-12 lg:mt-0 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <img
                                src="https://images.unsplash.com/photo-1507842217121-9e9f14781f9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Bookstore Background"
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-xl font-bold font-serif">Jack Chen</p>
                                <p className="text-sm opacity-90">資深業務經理</p>
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <i className="fa-solid fa-check-circle text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">服務客戶超過</p>
                                    <p className="font-bold text-primary text-lg">500+ 單位</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
