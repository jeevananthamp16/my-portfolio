import React, { useState } from 'react';
import { useTheme } from '../lib/ThemeContext';
import { Palette, X, Check } from 'lucide-react';

export const ThemeSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setThemeById, allThemes } = useTheme();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r ${theme.gradient} text-white shadow-lg hover:scale-110 transition-all duration-300`}
        title="Change Theme"
      >
        <Palette className="w-6 h-6" />
      </button>

      {/* Theme Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Palette className={theme.iconColor} />
                Choose Theme
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-zinc-400" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {allThemes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setThemeById(t.id);
                  }}
                  className={`relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    theme.id === t.id
                      ? 'border-white bg-zinc-800'
                      : 'border-zinc-700 hover:border-zinc-500 bg-zinc-800/50'
                  }`}
                >
                  {/* Color Preview */}
                  <div
                    className={`w-full h-12 rounded-lg bg-gradient-to-r ${t.gradient} mb-3`}
                  />
                  
                  {/* Theme Name */}
                  <p className="text-sm font-medium text-white text-center">
                    {t.name}
                  </p>

                  {/* Selected Indicator */}
                  {theme.id === t.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <Check className="w-4 h-4 text-zinc-900" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <p className="text-zinc-500 text-sm text-center mt-6">
              Theme preference is saved locally
            </p>
          </div>
        </div>
      )}
    </>
  );
};
