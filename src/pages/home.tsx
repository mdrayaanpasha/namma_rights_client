import GlassNav from "../components/nav";
import CoverImg from "../assets/imgs/why-us.png"
export default function Homepage() {
    return (
        <>
                <GlassNav></GlassNav>

        
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <header className="">
          <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-3 bg-gray-100 px-6 py-2 rounded-full">
                <span className="text-gray-600 font-semibold">Empowering Citizens Through Knowledge</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
                Know Your Rights in Real Police Encounters
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience interactive scenarios that teach you how to navigate actual legal situations. 
                Learn by doing, not just reading.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black-700 transition-all hover:scale-105" onClick={e=>window.location.href="/categories"}>
                Start Simulation Now →
              </button>
            </div>
          </div>
        </header>
  
        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Learn Through Real Scenarios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '👮', 
                  title: "Choose Your Scenario",
                  text: "Select common police encounter situations you want to practice"
                },
                {
                  icon: '🔄',
                  title: "Make Decisions",
                  text: "Respond naturally to evolving scenarios just like real life"
                },
                {
                  icon: '⚖️',
                  title: "Get Legal Feedback",
                  text: "Receive immediate analysis of your choices with actual laws cited"
                }
              ].map((item, index) => (
                <div key={index} className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Why Namma Rights?</h2>
                <ul className="space-y-6">
                  {[
                    "Based on real legal statutes and procedures",
                    "No personal data required to use",
                    "Anonymous and secure experience",
                    "Simple and easy-to-understand legal explanations",
                    "Accessible anytime, anywhere"
                  ].map((item, index) => (
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
  
        {/* CTA */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Knowledge is Power in Critical Moments</h2>
            <p className="text-xl mb-12 opacity-90">
              Be prepared, stay informed, and protect your rights with confidence. 
              Start your free learning session today.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black-50 transition-all" onClick={e=>window.location.href="/categories"}>
              Protect Your Rights Now →
            </button>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
            <div className="mb-8">
              <a href="/about" className="mx-4 hover:text-black-600">About Us</a>
              <a href="/terms" className="mx-4 hover:text-black-600">Terms of Use</a>
            </div>
            <p>© 2025 Namma Rights. Empowering citizens through legal education.</p>
          </div>
        </footer>
      </div>
      </>
    );
  }