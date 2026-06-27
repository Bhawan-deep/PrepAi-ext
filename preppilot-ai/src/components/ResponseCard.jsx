import { Clipboard } from "lucide-react";


function ResponseCard({ output }) {
  function copyText() {
    navigator.clipboard.writeText(output);
  }

  if (!output) {
    return (
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
        <h2 className="text-lg font-semibold text-white">
          🧠 Ready to Learn?
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Click <strong>Explain Problem</strong> to get an AI explanation.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-lg font-bold text-white">
          🤖 AI Analysis
        </h2>

        <button
          onClick={copyText}
          className="rounded-lg bg-slate-800 p-2 hover:bg-slate-700"
        >
          <Clipboard size={18} className="text-white" />
        </button>

      </div>

    <div className="h-80 overflow-y-auto rounded-xl bg-slate-950 p-4">
        <p className="whitespace-pre-wrap text-slate-200 leading-7">
            {output}
        </p>
    </div>

    </div>
  );
}

export default ResponseCard;