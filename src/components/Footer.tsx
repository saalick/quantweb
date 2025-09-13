import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "X (formerly Twitter)",
      icon: Twitter,
      href: "https://twitter.com/QuantelX"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#"
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#"
    }
  ];

  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "Product", href: "#features" },
    { name: "FAQ", href: "#" },
    { name: "Affiliate", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" }
  ];

  return (
    <footer className="py-16 px-6 bg-background border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/quantel-logo.png" 
                alt="Quantel Logo" 
                className="h-24 md:h-28 brightness-110 contrast-125"
              />
            </div>
            <p className="text-muted-foreground max-w-md">
              Institutional-grade TradingView indicators that transform intuition into algorithms and strategies into systematic processes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Quantel. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with precision for systematic traders worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;