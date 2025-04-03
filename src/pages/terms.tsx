import GlassNav from "../components/nav";
export default function TermsPage() {
    return (
      <div className="min-h-screen ">
        <GlassNav/>
        <div className="max-w-3xl mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Terms of Use
            </h1>
            <p className="text-gray-600">Effective: 4/3/25 (D/M/YY)</p>
          </div>
  
          {/* Content */}
          <div className="backdrop-blur-sm bg-white/30 p-8 rounded-2xl border border-white/20 space-y-8">
            {/* Core Disclaimer */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Essential Understanding
              </h3>
              <p className="text-gray-600">
                Namma Rights exists solely for general informational purposes. We are not legal practitioners 
                and nothing here constitutes professional legal advice.
              </p>
            </div>
  
            {/* AI Disclosure */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How Namma Rights Works
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>Provides interactive police encounter simulations</li>
                <li>Offers legal insights based on pre-existing statutes</li>
                <li>Not affiliated with law enforcement or legal authorities</li>
              </ul>
            </div>
  
            {/* User Responsibility */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Your Responsibility
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>✓ Always verify critical information with official sources</p>
                <p>✓ Consult licensed professionals for legal matters</p>
                <p>✓ Understand this tool has limitations</p>
              </div>
            </div>
  
            {/* Liability Clause */}
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="text-lg font-semibold text-red-700 mb-3">
                No Liability Statement
              </h3>
              <p className="text-red-700 text-sm">
                We expressly disclaim responsibility for any decisions made or 
                actions taken based on information provided through this service. 
                Use at your own discretion.
              </p>
            </div>
  
            {/* AI Disclaimer */}
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
              <h3 className="text-lg font-semibold text-yellow-700 mb-3">
                AI Disclaimer
              </h3>
              <p className="text-yellow-700 text-sm">
                Namma Rights utilizes third-party AI APIs, including Gemini by Google, to provide legal insights. 
                While we strive for accuracy, there may be occasional inaccuracies or omissions. 
                Users are strongly encouraged to fact-check all information and consult legal professionals 
                for authoritative advice. This platform is designed to enhance awareness, not to serve as 
                a substitute for official legal guidance.
              </p>
            </div>
  
            {/* Changes & Contact */}
            <div className="pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                We may update these terms periodically. For clarifications contact: 
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
  