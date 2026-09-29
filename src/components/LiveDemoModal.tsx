import React, { useState } from 'react';
import { 
  X, 
  Monitor, 
  Smartphone, 
  CheckCircle2,
} from 'lucide-react';
import { Project } from '../types';

interface LiveDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({
  project,
  onClose,
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [simulatedTab, setSimulatedTab] = useState<'overview' | 'analytics' | 'logs'>('overview');
  const [demoCounter, setDemoCounter] = useState<number>(42);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Demo Interaktif ${project.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md"
    >
      <div 
        tabIndex={0}
        role="button"
        aria-label="Tutup live demo"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClose();
          }
        }}
        className="fixed inset-0 cursor-pointer"
      />

      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden transition-colors">
        {/* Top Control Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="ml-2 text-xs font-mono text-slate-700 dark:text-slate-300 font-semibold truncate max-w-[200px] sm:max-w-none">
              demo-sandbox: {project.title}
            </span>
          </div>

          {/* Viewport switchers & close */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg p-0.5 text-xs text-slate-600 dark:text-slate-400">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-1.5 rounded flex items-center gap-1 cursor-pointer ${
                  deviceMode === 'desktop' ? 'bg-sky-500 text-slate-950 font-bold' : 'hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-1.5 rounded flex items-center gap-1 cursor-pointer ${
                  deviceMode === 'mobile' ? 'bg-sky-500 text-slate-950 font-bold' : 'hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sandbox Simulation Canvas */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-100/60 dark:bg-slate-950/60 flex justify-center">
          <div
            className={`transition-all duration-300 w-full ${
              deviceMode === 'mobile'
                ? 'max-w-sm border-2 border-slate-300 dark:border-slate-700 rounded-3xl p-4 bg-white dark:bg-slate-900 shadow-xl'
                : 'max-w-3xl rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-xl'
            }`}
          >
            {/* Mockup Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{project.title}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 font-mono font-semibold">
                    Live Simulator
                  </span>
                </h3>
                <p className="text-xs text-sky-600 dark:text-sky-400 mt-0.5 font-medium">{project.tagline}</p>
              </div>

              <div className="flex gap-1.5">
                <button
                  onClick={() => setSimulatedTab('overview')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer ${
                    simulatedTab === 'overview'
                      ? 'bg-sky-500 text-slate-950 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setSimulatedTab('analytics')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer ${
                    simulatedTab === 'analytics'
                      ? 'bg-sky-500 text-slate-950 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Analitik
                </button>
              </div>
            </div>

            {/* Mockup Views */}
            {simulatedTab === 'overview' ? (
              <div className="space-y-5">
                {/* Simulated Metric Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Total Transaksi</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white font-mono mt-1 tabular-nums">
                      12,480+
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Response P99</div>
                    <div className="text-lg font-bold text-sky-600 dark:text-sky-400 font-mono mt-1 tabular-nums">
                      24ms
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 col-span-2 sm:col-span-1">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Health Uptime</div>
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-1 tabular-nums">
                      99.98%
                    </div>
                  </div>
                </div>

                {/* Simulated Interactive Feature List */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-300">
                    Fitur & Komponen yang Teruji Aktif:
                  </div>
                  <div className="space-y-2">
                    {project.features.map((feat, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive State Demo Button */}
                <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/30 flex items-center justify-between">
                  <div className="text-xs text-slate-700 dark:text-slate-300">
                    Uji Interaksi Cepat (State Sim):{' '}
                    <span className="font-mono text-sky-600 dark:text-sky-400 font-bold">{demoCounter} request</span>
                  </div>
                  <button
                    onClick={() => setDemoCounter((prev) => prev + 1)}
                    className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-sm"
                  >
                    Simulasikan Request
                  </button>
                </div>
              </div>
            ) : (
              /* Simulated Analytics View */
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-300">
                    Beban Komputasi & Pemrosesan Real-Time
                  </div>
                  {/* Mock Bar Chart */}
                  <div className="h-32 flex items-end gap-2 pt-4">
                    {[45, 68, 92, 54, 80, 95, 78, 88, 62, 90, 84, 96].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                        <div
                          className="w-full bg-gradient-to-t from-sky-600 to-cyan-400 rounded-t-sm transition-all hover:brightness-125"
                          style={{ height: `${val}%` }}
                          title={`Throughput ${val}%`}
                        />
                        <span className="text-[9px] text-slate-400 font-mono">{idx + 1}h</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono text-center">
                  Model arsitektur: {project.architecture.join(' · ')}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
          <span>Teknologi: {project.technologies.slice(0, 4).join(', ')}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium cursor-pointer"
          >
            Tutup Simulator
          </button>
        </div>
      </div>
    </div>
  );
};
