import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { personaPresets } from '../../data/presets';
import { Settings, X, Palette, User, Sun, Moon, ChevronRight } from 'lucide-react';

export default function DemoSwitcherBar() {
  const { theme, toggleTheme, accent, setAccent, activePreset, setActivePreset } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    { id: 'emerald', name: 'Emerald', bg: 'bg-emerald-500' },
    { id: 'violet', name: 'Violet', bg: 'bg-indigo-500' },
    { id: 'cyan', name: 'Cyan', bg: 'bg-cyan-500' },
    { id: 'amber', name: 'Amber', bg: 'bg-amber-500' },
    { id: 'rose', name: 'Rose', bg: 'bg-rose-500' }
  ];

  return (
    <div className="hidden lg:flex fixed top-1/3 right-0 z-50 no-print items-start">
      {/* Floating Launcher Button (Pinned to Right Edge) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-2.5 rounded-l-2xl bg-neutral-900/90 text-white dark:bg-white/95 dark:text-neutral-950 font-bold text-xs shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:pr-4 hover:scale-105 transition-all border-y border-l border-neutral-700/60 dark:border-neutral-200/80 backdrop-blur-md cursor-pointer group"
          title="Open Theme & Persona Controls"
        >
          <Settings className="w-4 h-4 text-amber-400 dark:text-amber-500 animate-spin-slow group-hover:rotate-180 transition-transform duration-500" />
          <span className="hidden sm:inline-block font-sans">Demo Controls</span>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        </button>
      )}

      {/* Expanded Control Modal Panel (Slide from Right) */}
      {isOpen && (
        <div className="mr-3 w-80 glass-panel rounded-2xl p-5 shadow-2xl border border-neutral-200 dark:border-neutral-700/80 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl transition-all">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-amber-500" />
              <span className="font-heading font-extrabold text-sm text-neutral-900 dark:text-white">
                Demo & Persona Switcher
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4 pt-4 max-h-[80vh] overflow-y-auto custom-scrollbar pr-1">
            
            {/* Persona Preset Selection */}
            <div>
              <label className="text-[10px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-2">
                1. Select Profession Preset
              </label>
              <div className="grid grid-cols-1 gap-1.5">
                {Object.values(personaPresets).map((preset) => {
                  const IconComp = preset.icon || User;
                  const isActive = activePreset === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setActivePreset(preset.id)}
                      className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                        isActive
                          ? 'bg-amber-400 text-neutral-950 shadow-md font-extrabold'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{preset.name}</span>
                      </div>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                        isActive ? 'bg-neutral-950/15 text-neutral-950 font-extrabold' : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400'
                      }`}>
                        {preset.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accent Color Palette Switcher */}
            <div>
              <label className="text-[10px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-2">
                2. Accent Color Theme
              </label>
              <div className="flex items-center gap-2">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setAccent(c.id)}
                    title={c.name}
                    className={`w-7 h-7 rounded-full ${c.bg} flex items-center justify-center transition-transform cursor-pointer ${
                      accent === c.id ? 'ring-2 ring-offset-2 ring-amber-400 scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'
                    }`}
                  >
                    {accent === c.id && <span className="w-2 h-2 rounded-full bg-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Dark / Light Toggle */}
            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5">
                {theme === 'dark' ? <Moon className="w-3.5 h-3.5 text-amber-400" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
                Mode: <span className="capitalize font-bold text-neutral-900 dark:text-white">{theme}</span>
              </span>
              <button
                onClick={toggleTheme}
                className="px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-xs font-bold text-neutral-800 dark:text-neutral-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors cursor-pointer border border-neutral-200 dark:border-neutral-700"
              >
                Switch
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
