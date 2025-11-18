import { GalaxyAchievements } from '../components/GalaxyAchievements';

export function Achievements() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <GalaxyAchievements />
      </div>
    </div>
  );
}