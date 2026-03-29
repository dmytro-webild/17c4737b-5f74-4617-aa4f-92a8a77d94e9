"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';
import { User } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About",          id: "about"},
        {
          name: "Pricing",          id: "pricing"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Spencer Brown"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Spencer Brown"
      description="Premium website design at unbeatable prices. Over 50 happy clients helped build their digital presence."
      buttons={[
        {
          text: "View Pricing",          href: "#pricing"},
        {
          text: "Contact Me",          href: "#contact"},
      ]}
      slides={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BbKaG5MU7AzeemkkhGGd2xlO3B/a-high-end-sleek-web-design-portfolio-he-1774752420596-f8dace88.png",          imageAlt: "Design showcase 1"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BbKaG5MU7AzeemkkhGGd2xlO3B/a-futuristic-digital-workspace-interface-1774752420133-c3ca031d.png",          imageAlt: "Design showcase 2"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BbKaG5MU7AzeemkkhGGd2xlO3B/close-up-of-an-abstract-geometric-patter-1774752419576-1a8e993d.png",          imageAlt: "Design showcase 3"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BbKaG5MU7AzeemkkhGGd2xlO3B/minimalist-digital-mockup-of-a-landing-p-1774752419795-90a93cf4.png",          imageAlt: "Design showcase 4"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BbKaG5MU7AzeemkkhGGd2xlO3B/abstract-architectural-visualization-wit-1774752420757-e4c34c65.png",          imageAlt: "Design showcase 5"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BbKaG5MU7AzeemkkhGGd2xlO3B/a-dynamic-3d-render-of-floating-interfac-1774752420269-ad2c99d6.png",          imageAlt: "Design showcase 6"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      tag="About Me"
      title="Crafting Digital Experiences"
      tagIcon={User}
      buttons={[
        {
          text: "Get In Touch",          href: "#contact"},
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",          badge: "Entry",          price: "$20",          subtitle: "Basic landing page",          features: [
            "Clean design",            "Fast delivery",            "Mobile responsive"],
        },
        {
          id: "standard",          badge: "Popular",          price: "$50",          subtitle: "Standard website",          features: [
            "Multi-page setup",            "Custom forms",            "SEO optimization"],
        },
        {
          id: "advanced",          badge: "Elite",          price: "$125",          subtitle: "Detailed website",          features: [
            "Interactive elements",            "Full customization",            "Premium support"],
        },
      ]}
      title="Simple, Transparent Pricing"
      description="Choose the perfect package for your business needs."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Alice M.",          imageSrc: "http://img.b2bpic.net/free-photo/positive-shaved-head-male-dressed-grey-suit-dark-grey-background_613910-11352.jpg?_wi=1"},
        {
          id: "t2",          name: "David L.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-successful-businessman-posing-outside_74855-2003.jpg"},
        {
          id: "t3",          name: "Sarah R.",          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-business-man-using-laptop-cafe_1303-20036.jpg"},
        {
          id: "t4",          name: "James K.",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-drinking-coffee_23-2148415807.jpg"},
        {
          id: "t5",          name: "Elena V.",          imageSrc: "http://img.b2bpic.net/free-photo/positive-shaved-head-male-dressed-grey-suit-dark-grey-background_613910-11352.jpg?_wi=2"},
      ]}
      cardTitle="Client Success"
      cardTag="Trusted by 50+ clients"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Let's Get Started"
      description="Ready to build your digital future? Reach out via email at Lugixlost@gmail.com or use the form below."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name"},
        {
          name: "email",          type: "email",          placeholder: "Your Email"},
      ]}
      textarea={{
        name: "message",        placeholder: "Tell me about your project"}}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BbKaG5MU7AzeemkkhGGd2xlO3B/a-serene-modern-office-desk-setup-in-dar-1774752420394-be3d3927.png"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Spencer Brown"
      copyrightText="© 2025 Spencer Brown Designs"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
