import { Sparkles, MessageCircleQuestion, Layers3 } from "lucide-react";

function ActionButtons({ onExplain }) {
  return (
    <div className="space-y-3">

      <button
        onClick={onExplain}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-xl"
      >
        <Sparkles size={18} />
        Explain Problem
      </button>

      <button
        disabled
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-800 py-3 text-slate-400"
      >
        <MessageCircleQuestion size={18} />
        Interview Questions
        <span className="rounded-full bg-slate-700 px-2 py-1 text-xs">
          Soon
        </span>
      </button>

      <button
        disabled
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-800 py-3 text-slate-400"
      >
        <Layers3 size={18} />
        Flashcards
        <span className="rounded-full bg-slate-700 px-2 py-1 text-xs">
          Soon
        </span>
      </button>

    </div>
  );
}

export default ActionButtons;