import { Lightbulb, Rocket, Trophy } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Abstract blue shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full filter blur-[150px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full filter blur-[120px] opacity-25"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-300 rounded-full filter blur-[100px] opacity-20"></div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        {/* Floating glass panels with staggered layout */}
        <div className="max-w-6xl w-full space-y-32">
          
          {/* Stage 1 - Left aligned */}
          <div className="flex justify-start">
            <div className="w-full md:w-[500px] relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white/60 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/80 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1763307411452-43cfd9f516ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYWluc3Rvcm1pbmclMjBza2V0Y2hpbmclMjBpZGVhc3xlbnwxfHx8fDE3NzA5MjU4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Ideation stage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80"></div>
                </div>
                
                <div className="p-10">
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                      <Lightbulb className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-600 mb-2">01</div>
                      <h2 className="text-3xl mb-4 text-gray-900">The Spark</h2>
                      <p className="text-gray-600 leading-relaxed">
                        It starts raw. A messy sketch, a late-night thought, a problem that won't leave you alone. This is where we dig deep and ask the uncomfortable questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 2 - Right aligned and larger */}
          <div className="flex justify-end">
            <div className="w-full md:w-[580px] relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white/60 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/80 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1547860664-b8537ca5f833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDkyMjE0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Development stage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80"></div>
                </div>
                
                <div className="p-12">
                  <div className="flex items-start gap-6">
                    <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0 transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                      <Rocket className="w-14 h-14 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-600 mb-2">02</div>
                      <h2 className="text-4xl mb-4 text-gray-900">The Build</h2>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Chaos becomes order. We break things, rebuild them, break them again. Every pixel placed with intention, every line of code with purpose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage 3 - Center and most prominent */}
          <div className="flex justify-center">
            <div className="w-full md:w-[650px] relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/90 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1728024450564-dc076932a6d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbGF1bmNoJTIwY2VsZWJyYXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc3MDkyNTg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Launch stage"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80"></div>
                </div>
                
                <div className="p-14">
                  <div className="flex items-start gap-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:rotate-12 transition-transform duration-500">
                      <Trophy className="w-16 h-16 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-600 mb-2">03</div>
                      <h2 className="text-5xl mb-5 text-gray-900">The Release</h2>
                      <p className="text-gray-600 leading-relaxed text-xl mb-6">
                        Nothing is ever really finished, but everything is ready. We ship, we learn, we evolve. The real journey has just begun.
                      </p>
                      <div className="inline-flex gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Connecting flowing line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
          <path
            d="M 200 300 Q 600 400, 1000 600 T 1400 1100"
            stroke="url(#blueGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10 10"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}