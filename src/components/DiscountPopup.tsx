import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Zap, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  
  const discountCode = "SAVE10NOW";

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

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

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            🎯 Limited Time Offer!
          </h3>
          <p className="text-muted-foreground mb-3">
            Get <span className="text-primary font-bold">10% OFF</span> your first month of Quantel
          </p>
          <div className="p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
            <p className="text-sm text-destructive font-semibold">
              Our pricing is set to increase in the next 5 days.
            </p>
          </div>
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
            Use this code at checkout to save $9.90
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
            Claim 10% Discount Now
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
          Limited time offer - pricing increases in 5 days!
        </p>
      </Card>
    </div>
  );
};

export default DiscountPopup;