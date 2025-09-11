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
      answer: "Built by our in-house quantitative team, Quantel provides proven-edge strategies with precise setups, plus tools highlighting liquidity, FVGs, and key market concepts to enhance your trading."
    },
    {
      question: "Are Quantel indicators reliable?",
      answer: "Yes. All indicators are built by our quantitative programmers, based on back and forward-tested models with zero repainting. They deliver objective insights without guesswork or delays."
    },
    {
      question: "What's the difference between strategies and tools?",
      answer: "Strategy-based indicators provide complete trade setups with entry, stop-loss, and take-profit signals. Tools highlight market structure concepts like liquidity, FVGs, levels, and confirmations to support your own system."
    },
    {
      question: "Do I need other software, how do I get access, and can I receive alerts to my phone?",
      answer: "Quantel runs fully on TradingView. After purchase, link your TradingView username to access indicators in your Invite-Only Scripts tab. You can also set alerts in the TradingView mobile app to get signal notifications straight to your phone."
    },
    {
      question: "How do your strategy-based indicators work?",
      answer: "Our strategies are built on trading models with a proven statistical edge. Some show a 'setup forming' alert before the full entry, stop-loss, and take-profit, while others give the full signal immediately."
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