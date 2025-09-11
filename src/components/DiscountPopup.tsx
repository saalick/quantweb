import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Timer, Zap, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  
  const discountCode = "SAVE20NOW";

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(discountCode);
    setIsCopied(true);
    toast({
      title: "Code Copied!",
      description: "Discount code copied to clipboard",
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClaimOffer = () => {
    copyCode();
    // Open the link in a new tab
    window.open("https://whop.com/quantel-io/quantel-io-90/", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <Card className="relative max-w-md w-full p-6 bg-card border-2 border-primary/30 shadow-elevated animate-scale-in">
        {/* Close button */}
        <Button
          size="sm"
          variant="outline"
          className="absolute top-3 right-3 h-8 w-8 p-0"
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Header with timer */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 mb-3">
            <Timer className="w-4 h-4 text-destructive animate-pulse" />
            <span className="text-destructive font-bold text-sm">
              {formatTime(timeLeft)}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-2">
            🎯 Limited Time Offer!
          </h3>
          <p className="text-muted-foreground">
            Get <span className="text-primary font-bold">20% OFF</span> your first month of Quantel
          </p>
        </div>

        {/* Discount code */}
        <div className="mb-6">
          <div className="flex items-center gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-mono font-bold text-primary flex-1">
              {discountCode}
            </span>
            <Button
              size="sm"
              variant="outline"
              onClick={copyCode}
              className="h-8 px-3"
            >
              {isCopied ? "Copied!" : <Copy className="h-3 w-3" />}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Use this code at checkout to save $19.80
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Button 
            size="lg" 
            variant="hero"
            onClick={handleClaimOffer}
            className="w-full animate-pulse-glow"
          >
            Claim 20% Discount Now
          </Button>
          
          <Button 
            size="sm" 
            variant="outline"
            onClick={handleClose}
            className="w-full"
          >
            Maybe Later
          </Button>
        </div>

        {/* Urgency text */}
        <p className="text-xs text-center text-muted-foreground mt-4">
          ⚡ This offer expires when the timer hits zero!
        </p>
      </Card>
    </div>
  );
};

export default DiscountPopup;