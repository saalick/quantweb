import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface LegalProps {
  section?: "terms" | "privacy" | "all";
}

const Legal = ({ section = "all" }: LegalProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-6 border-b border-primary/10">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <img 
              src="/quantel-logo.png" 
              alt="Quantel Logo" 
              className="h-12 brightness-110 contrast-125"
            />
            <h1 className="text-3xl font-bold text-foreground">
              {section === "terms" ? "Terms of Service" : section === "privacy" ? "Privacy Policy" : "Legal Information"}
            </h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Terms of Service */}
          {(section === "all" || section === "terms") && (
            <section id="terms">
              <h2 className="text-2xl font-bold text-foreground mb-6">Terms of Service (TOS)</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
                <p className="text-muted-foreground"><strong>Effective Date:</strong> September 1st, 2025</p>
                <p className="text-muted-foreground">
                  Welcome to Quantel.io. By accessing or using our website, products, or services, you agree to these Terms of Service. If you do not agree, do not use Quantel.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">1. Services</h3>
                    <p className="text-muted-foreground">
                      Quantel provides digital tools and indicators for TradingView. These are for educational and informational purposes only. We do not execute trades, provide brokerage services, or guarantee financial results.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">2. Eligibility</h3>
                    <p className="text-muted-foreground">
                      You must be 18 or older to use Quantel. By subscribing, you represent that you meet this requirement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">3. Subscriptions & Payments</h3>
                    <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                      <li>Subscriptions are billed on a recurring basis (monthly/annually), except those who opted for the $999 one-time payment.</li>
                      <li>All payments are final. Refunds are not guaranteed.</li>
                      <li>You authorize Quantel to charge your chosen payment method until you cancel.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">4. Use of Indicators</h3>
                    <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                      <li>Indicators are licensed for personal use only.</li>
                      <li>Sharing, reselling, or redistributing access to Quantel indicators is prohibited.</li>
                      <li>Unauthorized use may result in termination of access without refund.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">5. No Financial Advice</h3>
                    <p className="text-muted-foreground">
                      Quantel.io and its indicators do not constitute financial, investment, or trading advice. Trading involves risk and you may lose all capital. You are solely responsible for your decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">6. Disclaimer of Warranties</h3>
                    <p className="text-muted-foreground">
                      Quantel is provided "as is" with no guarantees. We do not warrant uninterrupted service, accuracy of signals, or profitability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">7. Limitation of Liability</h3>
                    <p className="text-muted-foreground">
                      To the maximum extent permitted by law, Quantel is not liable for any losses, damages, or claims arising from your use of our indicators or website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">8. Termination</h3>
                    <p className="text-muted-foreground">
                      We reserve the right to suspend or terminate access for violations of these terms.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">9. Governing Law</h3>
                    <p className="text-muted-foreground">
                      These Terms are governed by the laws of United States of America.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Privacy Policy */}
          {(section === "all" || section === "privacy") && (
            <section id="privacy">
              <h2 className="text-2xl font-bold text-foreground mb-6">Privacy Policy</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
                <p className="text-muted-foreground"><strong>Effective Date:</strong> September 1st, 2025</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">1. Information We Collect</h3>
                    <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                      <li>Account details (name, email, TradingView username).</li>
                      <li>Payment information (processed via third-party providers, we do not store full card details).</li>
                      <li>Website usage data (cookies, analytics).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">2. How We Use Information</h3>
                    <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                      <li>To provide access to indicators.</li>
                      <li>To process payments and manage subscriptions.</li>
                      <li>To improve our website and services.</li>
                      <li>To send account-related communications.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">3. Sharing of Information</h3>
                    <p className="text-muted-foreground mb-2">We do not sell or rent your personal information. Data may be shared only with:</p>
                    <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                      <li>Payment processors (for billing).</li>
                      <li>Service providers (e.g. email, hosting).</li>
                      <li>Authorities if required by law.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">4. Security</h3>
                    <p className="text-muted-foreground">
                      We use standard security practices to protect your data, but no system is 100% secure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">5. Your Rights</h3>
                    <p className="text-muted-foreground">
                      You may request to access, update, or delete your information by contacting us at team@quantel.io.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">6. Cookies</h3>
                    <p className="text-muted-foreground">
                      We use cookies to enhance user experience and track site analytics.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">7. Changes</h3>
                    <p className="text-muted-foreground">
                      We may update this Privacy Policy. Updates will be posted on this page with a new effective date.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Risk Disclaimer - Only show in full legal page */}
          {section === "all" && (
            <section id="risk">
              <h2 className="text-2xl font-bold text-foreground mb-6">Risk Disclaimer</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">Trading Risk Disclaimer</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Quantel.io and its indicators are provided for educational purposes only. We are not financial advisors, brokers, or registered investment professionals.
                  </p>
                  <p className="text-muted-foreground">
                    Trading futures, forex, cryptocurrencies, and securities involves substantial risk of loss and is not suitable for every investor. Past performance does not guarantee future results.
                  </p>
                  <p className="text-muted-foreground">
                    You are solely responsible for your trading decisions. Quantel.io assumes no liability for any financial losses incurred through the use of our services.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Refund Policy - Only show in full legal page */}
          {section === "all" && (
            <section id="refund">
              <h2 className="text-2xl font-bold text-foreground mb-6">Refund Policy</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Quantel subscriptions grant immediate access to proprietary invite-only scripts. For this reason:
                  </p>
                  <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                    <li>All payments are final and non-refundable.</li>
                    <li>Exceptions may be made only in cases of duplicate charges or billing errors.</li>
                    <li>If you believe you were charged in error, contact us at team@quantel.io.</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Contact Information */}
          {section === "all" && (
            <section id="contact">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
                <p className="text-muted-foreground mb-4">For legal, billing, or support inquiries:</p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">📧 team@quantel.io</p>
                  <p className="text-muted-foreground">🌐 www.quantel.io</p>
                </div>
              </div>
            </section>
          )}

        </div>
      </main>
    </div>
  );
};

export default Legal;