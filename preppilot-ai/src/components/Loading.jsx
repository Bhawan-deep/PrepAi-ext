function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-16">

      <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-500 border-t-transparent"/>

      <p className="mt-6 text-slate-300">
        Analyzing Problem...
      </p>

      <p className="text-sm text-slate-500">
        finding the solution...
      </p>

    </div>
  );
}

export default Loading;