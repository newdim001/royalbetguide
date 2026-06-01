// Reusable game demo embed component for Pragmatic Play free-play slots
// Embeds games from demogamesfree.pragmaticplay.net in a responsive iframe

interface GameDemoEmbedProps {
  src: string;
  title: string;
  height?: number;
}

export default function GameDemoEmbed({ src, title, height = 600 }: GameDemoEmbedProps) {
  if (!src) return null;

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-slate-200 bg-black shadow-lg">
      <div className="flex items-center justify-between bg-gradient-to-r from-corg-600 to-corg-500 px-4 py-2">
        <span className="text-sm font-semibold text-white">
          🎮 Play {title} for Free
        </span>
        <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs text-white">
          Demo Mode
        </span>
      </div>
      <div className="relative" style={{ paddingBottom: `${(height / 800) * 100}%` }}>
        <iframe
          src={src}
          title={`${title} Free Demo`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          loading="lazy"
        />
      </div>
      <div className="bg-slate-900 px-4 py-2 text-center text-xs text-slate-400">
        This is a free demo. No real money involved. Must be 18+ to play.
      </div>
    </div>
  );
}
