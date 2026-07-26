export default function Dashboard() {
      const cards = [
          { icon: "🤖", title: "MITTA AI", color: "bg-blue-600" },
              { icon: "📚", title: "GS & GK Notes", color: "bg-green-600" },
                  { icon: "🎥", title: "Video Classes", color: "bg-red-600" },
                      { icon: "❓", title: "Quiz", color: "bg-yellow-500" },
                          { icon: "📄", title: "PYQ", color: "bg-purple-600" },
                              { icon: "📝", title: "Mock Test", color: "bg-pink-600" },
                                  { icon: "🏆", title: "Leaderboard", color: "bg-orange-600" },
                                      { icon: "💎", title: "Premium", color: "bg-indigo-600" },
                                          { icon: "⚙️", title: "Settings", color: "bg-slate-700" },
                                            ];

                                              return (
                                                  <div className="p-6">
                                                        <h1 className="text-3xl font-bold">
                                                                🎓 Dhammadoot Mule Sir AI Academy
                                                                      </h1>

                                                                            <p className="text-gray-500 mt-2">
                                                                                    Learn Smart • Prepare Better • Achieve Success
                                                                                          </p>

                                                                                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                                                                                        {cards.map((card) => (
                                                                                                                  <div
                                                                                                                              key={card.title}
                                                                                                                                          className={`${card.color} text-white rounded-2xl p-6 shadow-lg cursor-pointer hover:scale-105 transition`}
                                                                                                                                                    >
                                                                                                                                                                <div className="text-5xl">{card.icon}</div>
                                                                                                                                                                            <h2 className="mt-4 text-xl font-semibold">{card.title}</h2>
                                                                                                                                                                                      </div>
                                                                                                                                                                                              ))}
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                          );
                                                                                                                                                                                                          }
