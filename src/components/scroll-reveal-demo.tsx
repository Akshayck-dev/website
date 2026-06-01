import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ScrollRevealDemo() {
  return (
    <div className="w-full min-h-[200vh] flex flex-col justify-center items-center bg-obsidian py-24 px-6 text-snow relative">
      <p className="absolute top-[20vh] text-mist text-lg">Scroll down to reveal text...</p>
      
      <div className="max-w-4xl mx-auto my-[60vh]">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          containerClassName="text-snow text-center"
        >
          When does a man die? When he is hit by a bullet? No! When he suffers a disease?
          No! When he ate a soup made out of a poisonous mushroom?
          No! A man dies when he is forgotten!
        </ScrollReveal>
      </div>

      <p className="absolute bottom-[20vh] text-mist text-lg">Keep scrolling...</p>
    </div>
  );
}
