import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, Shield, Cpu } from 'lucide-react';

const TechHavenHero: React.FC = () => {
  return (
    <div className="min-h-screen bg-tech-gradient-subtle relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/10 via-transparent to-tech-purple/10" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-tech-blue/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-tech-purple/20 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Tech Haven</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Get Started
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-tech-gradient bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              Next Generation Technology
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Innovation
            <span className="bg-tech-gradient bg-clip-text text-transparent"> Meets </span>
            Excellence
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience cutting-edge technology solutions designed to transform your business. 
            Our AI-powered support is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-tech-gradient hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow">
              Explore Solutions
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 text-center hover:shadow-elegant transition-all duration-300 group">
            <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Lightning Fast</h3>
            <p className="text-muted-foreground">Experience unparalleled speed and performance with our optimized infrastructure.</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 text-center hover:shadow-elegant transition-all duration-300 group">
            <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Secure & Reliable</h3>
            <p className="text-muted-foreground">Enterprise-grade security ensuring your data is protected at all times.</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 text-center hover:shadow-elegant transition-all duration-300 group">
            <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">AI-Powered</h3>
            <p className="text-muted-foreground">Intelligent automation and insights powered by advanced machine learning.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechHavenHero;