import {
      Bot,
        BookOpen,
          Video,
            Brain,
              FileText,
                ClipboardList,
                  Trophy,
                    Crown,
                      Settings,
                      } from "lucide-react";

                      export default function Dashboard() {
                        const cards = [
                            { icon: Bot, title: "MITTA AI", color: "bg-blue-600" },
                                { icon: BookOpen, title: "GS & GK Notes", color: "bg-green-600" },
                                    { icon: Video, title: "Video Classes", color: "bg-red-600" },
                                        { icon: Brain, title: "Quiz", color: "bg-yellow-500" },
                                            { icon: FileText, title: "PYQ", color: "bg-purple-600" },
                                                { icon: ClipboardList, title: "Mock Test", color: "bg-pink-600" },
                                                    { icon: Trophy, title: "Leaderboard", color: "bg-orange-600" },
                                                        { icon: Crown, title: "Premium", color: "bg-cyan-600" },
                                                            { icon: Settings, title: "Settings", color: "bg-gray-600" },
                                                              ];

                                                                return (
                                                                    <div className="min-h-screen bg-slate-100 p-6">
                                                                          <h1 className="text-4xl font-bold text-center mb-2">
                                                                                  🎓 Dhammadoot Mule Sir AI Academy
                                                                                        </h1>

                                                                                              <p className="text-center text-gray-600 mb-8">
                                                                                                      Learn Smart • Prepare Better • Achieve Success
                                                                                                            </p>

                                                                                                                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                                                                                                          {cards.map((card) => {
                                                                                                                                    const Icon = card.icon;

                                                                                                                                              return (
                                                                                                                                                          <div
                                                                                                                                                                        key={card.title}
                                                                                                                                                                                      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition duration-300"
                                                                                                                                                                                                  >
                                                                                                                                                                                                                <div
                                                                                                                                                                                                                                className={`${card.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-4`}
                                                                                                                                                                                                                                              >
                                                                                                                                                                                                                                                              <Icon size={30} />
                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                          <h2 className="font-semibold text-center">{card.title}</h2>
                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                                                                                                        })}
                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                    }
