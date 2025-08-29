import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Quantel?",
      answer: "Quantel is an AI-powered trading technology platform that provides institutional-grade TradingView indicators. We combine ICT (Inner Circle Trader), SMC (Smart Money Concepts), and advanced quantitative analysis to create systematic trading tools that eliminate emotion and guesswork from your trading decisions."
    },
    {
      question: "How do I access the indicators after purchase?",
      answer: "After purchasing through our Whop checkout, you'll receive immediate access to our Discord community where all indicators are shared. You'll get download links, installation guides, and full documentation for each indicator. Setup typically takes less than 5 minutes."
    },
    {
      question: "Do I need coding or advanced skills?",
      answer: "Not at all! Our indicators are designed for traders of all experience levels. They come pre-configured and ready to use on TradingView. We provide clear documentation, video tutorials, and community support to help you get started immediately."
    },
    {
      question: "Do you offer mentorship?",
      answer: "While we don't offer one-on-one mentorship, our Discord community provides extensive educational resources, strategy discussions, and peer support. Our team regularly shares market analysis, indicator updates, and trading insights to help you improve your systematic approach."
    },
    {
      question: "Can I use the indicators on multiple devices?",
      answer: "Yes! Your subscription includes multi-device access. You can use the indicators on any device that supports TradingView - including desktop, mobile, and tablet. Your indicators will sync across all your devices through your TradingView account."
    },
    {
      question: "What markets do the indicators work on?",
      answer: "Our indicators are designed for cross-market utility and work on forex, indices, cryptocurrency, and equities. The underlying ICT/SMC principles and quantitative models apply universally across all liquid financial markets."
    },
    {
      question: "How often are the indicators updated?",
      answer: "We provide constant evolution with regular updates and refinements. As markets change and we gather community feedback, we continuously improve our algorithms. All updates are included in your subscription at no additional cost."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Quantel and our indicator suite
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl px-6 hover:border-primary/20 transition-colors duration-300"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary font-semibold py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;