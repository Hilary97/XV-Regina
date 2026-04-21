export default function Separator() {
  return (
    <div className="relative py-8 overflow-hidden">
      {/* Main decorative line */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-8 h-px bg-gradient-to-r from-transparent to-rose-300" />
        <div className="w-2 h-2 bg-rose-400 rounded-full" />
        <div className="w-16 h-px bg-gradient-to-r from-rose-300 via-rose-400 to-rose-300" />
        <div className="w-2 h-2 bg-rose-400 rounded-full" />
        <div className="w-8 h-px bg-gradient-to-l from-transparent to-rose-300" />
      </div>

      {/* Floating dots */}
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-rose-300/50 rounded-full" />
      <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-rose-300/30 rounded-full" />
    </div>
  );
}