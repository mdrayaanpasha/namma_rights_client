import GlassNav from "../components/nav";
import CoverImg from "../assets/imgs/why-us.png";

export default function FeaturesPage() {
    return (
        <>
            <GlassNav></GlassNav>

            <div className="min-h-screen bg-white">
                <header className="">
                    <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
                        <div className="text-center space-y-8">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
                                Features of Namma Rights
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Empower yourself with essential legal knowledge through interactive simulations.
                            </p>
                        </div>
                    </div>
                </header>

                <section className="py-20 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold">Why Namma Rights?</h2>
                                <ul className="space-y-6">
                                    {["Based on real legal statutes and procedures",
                                    "No personal data required to use",
                                    "Anonymous and secure experience",
                                    "Simple and easy-to-understand legal explanations",
                                    "Accessible anytime, anywhere",
                                    "Experience-based learning through simulations",
                                    "No prior legal knowledge required"].map((item, index) => (
                                        <li key={index} className="flex items-center gap-4">
                                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-5 h-5 text-black-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <img 
                                    src={CoverImg} 
                                    alt="App interface" 
                                    className="rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-black">
                    <div className="max-w-4xl mx-auto px-4 text-center text-white">
                        <h2 className="text-3xl font-bold mb-8">Learn Your Rights, Protect Your Future</h2>
                        <p className="text-xl mb-12 opacity-90">
                            Gain the confidence to handle real-world situations with accurate legal knowledge.
                        </p>
                        <button className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black-50 transition-all">
                            Start Learning Now →
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}