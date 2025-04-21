import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import HeroSection from "@/components/hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";

export default function LandingPage() {
  return (
    <>
      <div className="grid-background backdrop-blur-sm"></div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="w-full py-16 md:py-28 lg:py-36 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-muted/30 opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-4xl font-bold tracking-tight text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/60 transition-all duration-300 hover:translate-y-[-5px] bg-background/80 backdrop-blur-sm rounded-xl"
              >
                <CardContent className="pt-8 pb-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-4 text-primary">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-14 md:py-24 bg-gradient-to-r from-muted/40 to-muted/70">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-3">
              <h3 className="text-5xl font-bold text-primary">50+</h3>
              <p className="text-muted-foreground font-medium">Industries Covered</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <h3 className="text-5xl font-bold text-primary">1000+</h3>
              <p className="text-muted-foreground font-medium">Interview Questions</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <h3 className="text-5xl font-bold text-primary">95%</h3>
              <p className="text-muted-foreground font-medium">Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <h3 className="text-5xl font-bold text-primary">24/7</h3>
              <p className="text-muted-foreground font-medium">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">How It Works</h2>
            <p className="text-muted-foreground text-lg">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-5 group"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shadow-md">
                  <div className="text-primary">{item.icon}</div>
                </div>
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-28 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonial.map((testimonial, index) => (
              <Card key={index} className="bg-background/90 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] rounded-xl overflow-hidden">
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col space-y-5">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative h-14 w-14 flex-shrink-0">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="rounded-full object-cover border-2 border-primary/30 ring-2 ring-primary/10 shadow-md"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                        <p className="text-sm text-primary font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <blockquote>
                      <p className="text-muted-foreground italic relative leading-relaxed">
                        <span className="text-4xl text-primary absolute -top-5 -left-2 opacity-50">
                          &quot;
                        </span>
                        {testimonial.quote}
                        <span className="text-4xl text-primary absolute -bottom-5 right-0 opacity-50">
                          &quot;
                        </span>
                      </p>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-muted/20 rounded-xl p-6 shadow-lg border border-primary/10">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/10">
                  <AccordionTrigger className="text-left hover:text-primary text-lg font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full">
        <div className="mx-auto py-28 gradient rounded-2xl shadow-2xl">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl font-medium">
              Join thousands of professionals who are advancing their careers
              with AI-powered guidance.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-8 mt-8 animate-pulse hover:animate-none font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Journey Today <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}