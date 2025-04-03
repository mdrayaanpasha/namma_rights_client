import { JSX, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scale, Gavel, Shield, BookOpen, Hand, Landmark } from "lucide-react";
import GlassNav from "../components/nav";

const RightsList = () => {
  const [rights, setRights] = useState<{ name: string; icon: JSX.Element }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Icon mapping based on rights
  const iconMap: { [key: string]: JSX.Element } = {
    "Right to Equality": <Scale className="w-6 h-6 text-white" />,
    "Right to Freedom": <Hand className="w-6 h-6 text-white" />,
    "Right Against Exploitation": <Shield className="w-6 h-6 text-white" />,
    "Right to Religion": <BookOpen className="w-6 h-6 text-white" />,
    "Cultural/Educational Rights": <Gavel className="w-6 h-6 text-white" />,
    "Right to Constitution": <Landmark className="w-6 h-6 text-white" />
  };

  useEffect(() => {
    fetch("https://namma-rights-server.vercel.app/api/rights/list-rights")
      .then((response) => response.json())
      .then((data: string[]) => {
        const rightsWithIcons = data.map(right => ({
          name: right,
          icon: iconMap[right] || <Scale className="w-6 h-6 text-white" />
        }));
        setRights(rightsWithIcons);
      })
      .catch((error) => console.error("Error fetching rights:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleRedirect = (right: string) => {
    navigate(`/questions/${encodeURIComponent(right)}`);
  };

  return (
    <div className="min-h-screen bg-white p-6 mt-20">
      <GlassNav />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">
          Your Fundamental Rights
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rights.map((right, index) => (
              <div
                key={index}
                className="p-6 bg-black rounded-xl cursor-pointer transition-all
                hover:bg-gray-900 hover:shadow-lg border border-gray-800
                active:scale-[98%] group flex items-center justify-between"
                onClick={() => handleRedirect(right.name)}
              >
                <p className="text-white font-medium text-lg group-hover:text-gray-100">
                  {right.name}
                </p>
                <div className="text-gray-500 group-hover:text-gray-400">
                  {right.icon}
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-center text-gray-600 mt-8 text-sm max-w-xl mx-auto">
          By using this service, you agree to our 
          <a 
            href="/terms" 
            className="text-black underline hover:text-gray-800 ml-1"
          >
            Terms & Conditions
          </a>. Information provided is for awareness only - verify with official sources.
        </p>
      </div>
    </div>
  );
};

export default RightsList;
