import exampleImage from "figma:asset/d38a212dd06cdd9a1aefe418622d7cfd7d9b3944.png";

export function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-16">
      <div className="mb-8 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          MELUSI
          <br />
          SIBANDA
        </h1>
        <p className="text-teal-400 text-lg">
          ICT PROFESSIONAL
        </p>
      </div>

      <div className="relative">
        <div className="w-48 h-48 rounded-full border-4 border-teal-400 overflow-hidden">
          <img
            src={exampleImage}
            alt="Melusi Sibanda"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}