import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between">
      <div>
        <h2 className="text-2xl font-bold text-teal-400 mb-8">CONTACT</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">Email</span>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="w-5 h-5 text-gray-400" />
            <span className="text-gray-300">LinkedIn</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 md:mt-0">
        <button className="bg-teal-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition-colors">
          CONTACT ME
        </button>
      </div>
    </section>
  );
}