import React from "react";
import {
  RadioIcon,
  UsersIcon,
  VideoIcon,
  MessageSquareIcon,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-base-100 rounded-xl shadow-lg p-8 border border-base-300">
        <div className="flex items-center gap-3 mb-6">
          <RadioIcon className="size-10 text-primary" />
          <h1 className="text-4xl font-bold">About TalkStream</h1>
        </div>

        <p className="text-base-content opacity-80 leading-relaxed text-lg mb-8">
          TalkStream is a real-time language learning and communication platform
          that helps students connect with each other, practice languages, and
          improve their speaking skills through instant messaging and video
          calling.
          <br />
          <br />
          Our mission is to make language learning fun, fast, and more human.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="p-5 bg-base-200 rounded-lg shadow">
            <UsersIcon className="size-8 text-primary mb-3" />
            <h2 className="font-semibold text-xl mb-2">Find Friends</h2>
            <p className="text-sm opacity-80">
              Connect with learners who speak your target language and help them
              learn yours.
            </p>
          </div>

          <div className="p-5 bg-base-200 rounded-lg shadow">
            <MessageSquareIcon className="size-8 text-primary mb-3" />
            <h2 className="font-semibold text-xl mb-2">Instant Messaging</h2>
            <p className="text-sm opacity-80">
              Chat in real-time using a fast and modern messaging experience.
            </p>
          </div>

          <div className="p-5 bg-base-200 rounded-lg shadow">
            <VideoIcon className="size-8 text-primary mb-3" />
            <h2 className="font-semibold text-xl mb-2">Video Calls</h2>
            <p className="text-sm opacity-80">
              Practice speaking face-to-face through high-quality video calls.
            </p>
          </div>

          <div className="p-5 bg-base-200 rounded-lg shadow">
            <RadioIcon className="size-8 text-primary mb-3" />
            <h2 className="font-semibold text-xl mb-2">Real-Time Experience</h2>
            <p className="text-sm opacity-80">
              Powered by Stream, enjoy ultra-low latency chat and call features.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10 opacity-60 text-sm">
          © {new Date().getFullYear()} TalkStream — Helping students learn,
          speak & connect.
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
