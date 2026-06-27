import { BrainCircuit } from "lucide-react";

function Header() {
  return (
    <div className="text-center mb-6">
      <div className="flex justify-center mb-3">
        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 p-4 shadow-lg">
          <BrainCircuit className="text-white" size={34} />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-white">
        PrepPilot AI
      </h1>

      <p className="text-slate-400 text-sm mt-1">
        AI Coding Interview Coach
      </p>
    </div>
  );
}

export default Header;