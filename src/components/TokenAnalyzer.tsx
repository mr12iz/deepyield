import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface TokenAnalyzerProps {
  open: boolean;
  onClose: () => void;
}

interface AnalysisResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export function TokenAnalyzer({ open, onClose }: TokenAnalyzerProps) {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const validateAddress = (address: string): boolean => {
    // Basic Ethereum address validation
    const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    return ethAddressRegex.test(address);
  };

  const analyzeToken = async () => {
    if (!address) {
      toast.error("Please enter a token address");
      return;
    }

    if (!validateAddress(address)) {
      toast.error("Please enter a valid Ethereum token address");
      return;
    }

    setLoading(true);
    console.log("Starting token analysis for address:", address);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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",
          "HTTP-Referer": window.location.origin,
          "X-Title": "DeepYield Token Analyzer"
        },
        body: JSON.stringify({
          model: "anthropic/claude-2",
          messages: [
            {
              role: "system",
              content: `You are an expert DeFi analyst specializing in high-yield strategies. 
              Your task is to analyze token contracts with a specific focus on:
              1. Yield farming opportunities and potential APY ranges
              2. Risk assessment and security features
              3. Liquidity analysis and pool stability
              4. Historical performance and volatility
              5. Recommended yield optimization strategies
              
              Format your analysis in a clear, structured way with sections and bullet points.`
            },
            {
              role: "user",
              content: `Analyze this token contract address: ${address}
              Provide a detailed analysis focusing on:
              1. Maximum potential yield through various strategies
              2. Risk-adjusted return metrics
              3. Optimal farming strategies
              4. Liquidity pool analysis
              5. Security assessment
              6. Historical yield data
              7. Recommended position sizing
              8. Exit strategy recommendations`
            }
          ]
        }),
      });

      console.log("API Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error Response:", errorText);
        throw new Error(`API request failed: ${response.status} ${errorText}`);
      }

      const data: AnalysisResponse = await response.json();
      console.log("API Response data:", data);

      if (data.choices?.[0]?.message?.content) {
        const analysisContent = data.choices[0].message.content;
        setAnalysis(analysisContent);
        toast.success("Analysis complete!");
        console.log("Analysis completed successfully");
      } else {
        throw new Error("Invalid response format from API");
      }
    } catch (error) {
      console.error("Error analyzing token:", error);
      toast.error("Failed to analyze token. Please try again.");
      setAnalysis(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span>AI Token Analysis</span>
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          </DialogTitle>
          <DialogDescription>
            Get an AI-powered analysis of token potential, focusing on high-yield strategies and opportunities.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="address" className="flex items-center gap-2">
              Token Contract Address
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="0x..."
              className="font-mono"
            />
          </div>
          
          {analysis && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="prose prose-sm max-w-none">
                {analysis.split('\n').map((line, index) => (
                  <p key={index} className="mb-2">{line}</p>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={analyzeToken} disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Analyze Token
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}