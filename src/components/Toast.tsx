export default function Toast() {
    return (
        <div
            id="toast"
            className="fixed bottom-5 right-5 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transform translate-y-20 opacity-0 transition-all duration-300 flex items-center gap-3 z-50"
        >
            <i className="fa-solid fa-check-circle text-green-400"></i>
            <span>LINE ID 已複製！</span>
        </div>
    );
}
