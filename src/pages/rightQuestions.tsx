import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import GlassNav from "../components/nav";

const RightsQuestions = () => {
  const { right } = useParams<{ right: string }>();
  const [questions, setQuestions] = useState<{ question: string; options: string[] }[]>([]);
  const [responses, setResponses] = useState<{ [key: string]: { q: string; a: string } }>({});
  const [userGuidance, setUserGuidance] = useState<string>("");
  const [policeProtocol, setPoliceProtocol] = useState<string>("");

  useEffect(() => {
    if (right) {
      fetch(`https://namma-rights-server.vercel.app/api/rights/rights-questions/${encodeURIComponent(right)}`)
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data.questions);
        })
        .catch((error) => console.error("Error fetching questions:", error));
    }
  }, [right]);

  const handleResponse = (index: number, question: string, answer: string) => {
    setResponses((prev) => ({
      ...prev,
      [`q${index + 1}`]: { q: question, a: answer },
    }));
  };

  const handleSubmit = async () => {
    if (Object.keys(responses).length !== questions.length) {
      alert("Please answer all questions before proceeding.");
      return;
    }
    const requestBody = { type: right, ...responses };
    try {
      const [userGuidanceRes, policeProtocolRes] = await Promise.all([
        fetch("https://namma-rights-server.vercel.app/api/user/user-guidance", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }).then((res) => res.json()),
        fetch("https://namma-rights-server.vercel.app/api/user/police-protocol", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }).then((res) => res.json()),
      ]);
      
      setUserGuidance(userGuidanceRes.userGuidance);
      setPoliceProtocol(policeProtocolRes.policeProtocol);
      setQuestions([]); // Remove questions after response
    } catch (error) {
      console.error("Error fetching responses:", error);
    }
  };

  return (
    <>
    <GlassNav></GlassNav>
   

        <div className="min-h-screen  p-6 mt-20">
          <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-4xl font-semibold text-gray-900 text-center">{right}</h1>
    
            {questions.length > 0 && (
              <div className="space-y-6">
                {questions.map((q, index) => (
                  <div key={index} className="p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100">
                    <p className="text-lg font-medium text-gray-900 mb-4">{q.question}</p>
                    <div className="space-y-3">
                      {q.options.map((option, optIndex) => (
                        <button
                          key={optIndex}
                          className={`w-full p-4 text-left rounded-xl transition-all
                            ${responses[`q${index + 1}`]?.a === option 
                              ? 'bg-black-50 ring-2 ring-black-500'
                              : 'hover:bg-gray-50 ring-1 ring-gray-200'}`}
                          onClick={() => handleResponse(index, q.question, option)}
                        >
                          <span className={`font-medium ${
                            responses[`q${index + 1}`]?.a === option 
                              ? 'text-black-600' 
                              : 'text-gray-700'
                          }`}>
                            {option}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                
                <button 
                  onClick={handleSubmit} 
                  className="w-full p-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 
                    active:scale-95 transition-transform font-medium"
                >
                  Submit Answers
                </button>
              </div>
            )}

<div className="flex flex-wrap justify-evenly gap-5">
  <div className="w-[45vw] max-w-full p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-green-100 rounded-lg">
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-900">Your Guidance</h2>
    </div>
    <div className="flex-1">
      <ReactMarkdown>{userGuidance}</ReactMarkdown>
    </div>
  </div>

  <div className="w-[45vw] max-w-full p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-100 rounded-lg">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-900">Police Protocol</h2>
    </div>
    <div className="flex-1">
      <ReactMarkdown>{policeProtocol}</ReactMarkdown>
    </div>
  </div>
</div>

          </div>
        </div>
        </>
  );
};

export default RightsQuestions;