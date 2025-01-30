import { Bot } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-2 text-lg font-semibold">
            <span>Powered by</span>
            <Bot className="w-6 h-6 animate-bounce" />
            <span className="text-primary">DeepSeek</span>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com/DeepYield"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://t.me/DeepYield"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Telegram
            </a>
            <a
              href="https://dexscreener.com/DeepYield"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              DexScreener
            </a>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 DeepYield. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}