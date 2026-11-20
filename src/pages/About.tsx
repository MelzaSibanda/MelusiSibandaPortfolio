import { GalaxyAboutMe } from '../features/about/GalaxyAboutMe';

export function About() {
  return (
    <div className="flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl w-full">
        <GalaxyAboutMe />
      </div>
    </div>
  );
}
