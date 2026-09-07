import { 
  Code2, 
  Palette, 
  Rocket, 
  Briefcase, 
  TrendingUp, 
  PenTool, 
  Camera, 
  Building2, 
  Award 
} from 'lucide-react';

/**
 * Preset Demo Configurations for Persona Switcher
 */

export const personaPresets = {
  developer: {
    id: "developer",
    name: "Software Developer",
    badge: "Full Stack Engineer",
    icon: Code2,
    personal: {
      name: "Alex Morgan",
      headline: "Building Scalable Web Applications & Enterprise Cloud APIs",
      role: "Senior Full Stack Engineer & Software Architect",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      shortBio: "Architecting high-performance React web applications, distributed APIs, and scalable cloud microservices.",
    }
  },
  designer: {
    id: "designer",
    name: "UI/UX Designer",
    badge: "Product Designer",
    icon: Palette,
    personal: {
      name: "Sophia Vance",
      headline: "Crafting Intuitive Interfaces & High-Converting Product Experiences",
      role: "Lead Product Designer & Design System Architect",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      shortBio: "Specializing in design systems, interactive Figma prototypes, motion design, and accessible user research.",
    }
  },
  freelancer: {
    id: "freelancer",
    name: "Creative Freelancer",
    badge: "Web & Brand Specialist",
    icon: Rocket,
    personal: {
      name: "Julian Cross",
      headline: "Turning Startup Visions into Award-Winning Digital Reality",
      role: "Creative Developer & Independent Consultant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      shortBio: "Helping ambitious founders and agencies design, build, and launch high-impact web products on time.",
    }
  },
  general: {
    id: "general",
    name: "General Freelancer",
    badge: "Multi-Service Specialist",
    icon: Briefcase,
    personal: {
      name: "Samira Ahmed",
      headline: "Delivering Professional Custom Freelance Services & Client Solutions",
      role: "Professional Freelance Consultant & Specialist",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
      shortBio: "Helping businesses and individual clients worldwide with custom freelance services, digital solutions, and quality project management.",
    }
  },
  marketer: {
    id: "marketer",
    name: "Digital Marketer",
    badge: "SEO & Growth Manager",
    icon: TrendingUp,
    personal: {
      name: "Elena Rostova",
      headline: "Driving Revenue Growth Through Data-Driven Marketing & SEO",
      role: "Senior Digital Marketer & Performance Growth Lead",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      shortBio: "Helping brands scale through organic SEO strategies, paid ad performance campaigns, and conversion rate optimization.",
    }
  },
  writer: {
    id: "writer",
    name: "Content Writer",
    badge: "Copywriter & Editor",
    icon: PenTool,
    personal: {
      name: "Clara Bennett",
      headline: "Crafting Compelling Copy & Technical Stories that Connect",
      role: "Content Strategist & Senior Copywriter",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      shortBio: "Writing high-converting landing page copy, brand narratives, press releases, and in-depth industry case studies.",
    }
  },
  creator: {
    id: "creator",
    name: "Photographer & Creator",
    badge: "Media & Video Director",
    icon: Camera,
    personal: {
      name: "Marcus Vance",
      headline: "Visual Storytelling Through Commercial Photography & Film",
      role: "Creative Director & Commercial Photographer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      shortBio: "Capturing striking commercial photography, editorial portraits, and high-end video campaigns for global brands.",
    }
  },
  agency: {
    id: "agency",
    name: "Digital Agency",
    badge: "Product Studio",
    icon: Building2,
    personal: {
      name: "Nexus Digital Studio",
      headline: "Engineering High-Performance Web & Mobile Products for Enterprises",
      role: "Boutique Engineering & Product Studio",
      avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      shortBio: "A boutique team of senior engineers, product designers, and cloud architects crafting elite web applications.",
    }
  },
  executive: {
    id: "executive",
    name: "Executive & Advisor",
    badge: "CTO / Tech Advisor",
    icon: Award,
    personal: {
      name: "David Sterling",
      headline: "Strategic Engineering Leadership & Cloud Architecture Advisory",
      role: "Fractional CTO & Enterprise Technology Consultant",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
      shortBio: "Advising scale-up founders and enterprise boards on engineering velocity, technical due diligence, and cloud scaling.",
    }
  }
};
