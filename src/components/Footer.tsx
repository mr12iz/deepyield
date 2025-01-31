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
              href="https://twitter.com/deepyieldfun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center space-x-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>@deepyieldfun</span>
            </a>
            <a
              href="https://t.me/deepyield"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center space-x-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.623 4.823-4.351c.212-.19-.043-.295-.324-.105l-5.96 3.752-2.525-.785c-.573-.18-.584-.573.12-.848l9.873-3.805c.47-.176.878.11.853.57z"/>
              </svg>
              <span>DeepYield</span>
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