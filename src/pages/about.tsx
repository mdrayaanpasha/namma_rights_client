import GlassNav from "../components/nav";
export default function AboutPage() {
    return (
      <div className="min-h-screen ">
        <GlassNav/>
        <div className="max-w-3xl mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              About Namma Rights
            </h1>
            <p className="text-gray-600">Empowering Citizens Through Legal Awareness</p>
          </div>
  
          {/* Content */}
          <div className="backdrop-blur-sm bg-white/30 p-8 rounded-2xl border border-white/20 space-y-8">
            {/* Mission */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Namma Rights is dedicated to increasing public awareness of legal rights and 
                responsibilities, particularly in interactions with law enforcement. 
                Through interactive simulations, we aim to educate citizens and 
                empower them with the knowledge they need in real-life scenarios.
              </p>
            </div>
  
            {/* How It Works */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How It Works
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Simulated police interaction scenarios based on real-life situations</li>
                <li>Legal information provided based on user decisions</li>
                <li>Designed for easy access and understanding, with no personal data required</li>
              </ul>
            </div>
  
            {/* Why It Matters */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Why It Matters
              </h3>
              <p className="text-gray-600">
                Understanding your rights is crucial in any police encounter. 
                Misinformation and lack of awareness can lead to unnecessary complications. 
                By using Namma Rights, users can familiarize themselves with legal 
                procedures in a safe and engaging way, ensuring they are prepared 
                for real-world situations.
              </p>
            </div>
  
            {/* AI and Accuracy Disclaimer */}
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
              <h3 className="text-lg font-semibold text-yellow-700 mb-3">
                AI and Accuracy Disclaimer
              </h3>
              <p className="text-yellow-700 text-sm">
                Namma Rights utilizes third-party AI APIs, including Gemini by Google, 
                to provide legal insights. While we strive for accuracy, there may be 
                occasional inaccuracies or omissions. We encourage users to fact-check 
                and consult legal professionals for authoritative advice.
              </p>
            </div>
  
            {/* Contact */}
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Have questions or suggestions? Contact us at: 
                <a href="mailto:mdrayaanpasha@gmail.com" className="text-blue-600 ml-1">
                  mdrayaanpasha@gmail.com
                </a>
              </p>
            </div>
          </div>
  
          {/* Footer Note */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Namma Rights · Empowerment Through Awareness
          </p>
        </div>
      </div>
    );
  }
  