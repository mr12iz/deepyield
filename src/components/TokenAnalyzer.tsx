import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface TokenAnalyzerProps {
  open: boolean;
  onClose: () => void;
}

export function TokenAnalyzer({ open, onClose }: TokenAnalyzerProps) {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const analyzeToken = async () => {
    if (!address) {
      toast.error("Please enter a token address");
      return;
    }

    setLoading(true);
    try {
      console.log("Analyzing token address:", address);
      const response = await fetch("https://api-inference.huggingface.co/models/deepseek-ai/deepseek-coder-1.3b-base", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer f2ce40beea77407fa17a64c1a3cc6b69",
        },
        body: JSON.stringify({
          inputs: [
            {
              role: "system",
              content: "You are a DeFi expert analyzing token contracts for potential risks and opportunities.",
            },
            {
              role: "user",
              content: `Analyze this token contract address: ${address}. Provide insights on tokenomics, security features, and potential risks.`,
            },
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("API Error Response:", errorData);
        throw new Error(`Failed to analyze token: ${errorData}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        setAnalysis(data.choices[0].message.content);
        toast.success("Analysis complete!");
      } else {
        throw new Error("Invalid response format from API");
      }
    } catch (error) {
      console.error("Error analyzing token:", error);
      toast.error("Failed to analyze token. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>AI Token Analysis</DialogTitle>
          <DialogDescription>
            Enter a token contract address to get an AI-powered analysis of its potential risks and opportunities.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="address">Token Contract Address</Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="0x..."
            />
          </div>
          {analysis && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm text-gray-700">{analysis}</pre>
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <Button onClick={analyzeToken} disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Analyze Token
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}