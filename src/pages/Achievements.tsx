import { GalaxyAchievements } from '../features/achievements/GalaxyAchievements';

export function Achievements() {
  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full">
        <GalaxyAchievements />
      </div>
    </div>
  );
}
