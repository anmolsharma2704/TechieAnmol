"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Layers, ShoppingCart, FileCode, Globe } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "CoachVantage",
    description: "SaaS platform focused on efficient coaching workflows and scalable integrations.",
    tech: ["Ruby on Rails", "Vue.js", "Hasura GraphQL", "PostgreSQL"],
    highlights: [
      "Engineered scalable backend modules and integrated GraphQL APIs for efficient data handling.",
      "Enabled real-time data synchronization between frontend and backend services.",
      "Contributed to feature development, performance optimization, and product reliability.",
      "Integrated Cronofy, Zoom, Stripe, and PayPal services.",
      "Deployed applications using CI/CD pipelines for streamlined releases."
    ],
    icon: Layers,
    liveUrl: "https://www.coachvantage.com",
    featured: true
  },
  {
    title: "Manidweep",
    description: "Organizational portfolio website with CMS-driven content and donation flows.",
    tech: ["Ruby on Rails", "PostgreSQL"],
    highlights: [
      "Built a dynamic portfolio website with CMS-driven content management.",
      "Created modular components enabling easy content updates by non-technical users.",
      "Optimized performance and improved page load speed.",
      "Integrated Razorpay payment gateway for donation-based payments.",
      "Deployed and maintained the application in production."
    ],
    icon: Globe,
    featured: false
  },
  {
    title: "Agxcel",
    description: "Agricultural e-commerce platform with secure checkout and business-specific pricing.",
    tech: ["Ruby on Rails", "PostgreSQL"],
    highlights: [
      "Engineered a scalable e-commerce platform for agricultural products.",
      "Implemented product catalog and shopping workflows with secure payment systems.",
      "Built admin dashboards for managing products, orders, and inventory.",
      "Designed custom business logic for multiple customer types and dynamic pricing.",
      "Integrated Stripe for secure payment processing."
    ],
    icon: ShoppingCart,
    featured: true
  },
  {
    title: "Source Direct Imports",
    description: "Business portfolio website with strong focus on performance and SEO.",
    tech: ["Ruby on Rails", "PostgreSQL", "AWS"],
    highlights: [
      "Implemented a corporate website for a bathroom accessories manufacturer.",
      "Created product catalog and showcase modules.",
      "Crafted responsive layouts with a focus on performance and SEO."
    ],
    icon: Globe,
    featured: false
  },
  {
    title: "American Studio",
    description: "Fashion brand website built for product storytelling and responsive UX.",
    tech: ["Ruby on Rails", "PostgreSQL", "AWS"],
    highlights: [
      "Developed a responsive website showcasing product collections and brand identity.",
      "Created product galleries, contact forms, and UI components.",
      "Ensured performance optimization and mobile responsiveness."
    ],
    icon: Globe,
    featured: false
  },
  {
    title: "Custom CMS System (Maglev Editor)",
    description: "Custom CMS for dynamic website creation with role-based access control.",
    tech: ["Ruby on Rails", "Maglev CMS", "AWS"],
    highlights: [
      "Engineered a custom CMS enabling dynamic website creation.",
      "Built reusable content blocks and modular page components.",
      "Enabled non-technical users to manage content through an intuitive interface.",
      "Applied role-based access control for secure content management.",
      "Deployed a multi-site capable system similar to WordPress."
    ],
    icon: FileCode,
    featured: false
  },
  {
    title: "Echowest",
    description: "Salesforce CRM implementation with workflow automation and system integration.",
    tech: ["Salesforce"],
    highlights: [
      "Supported implementation of Salesforce CRM workflows and automation.",
      "Configured data models and customized business processes.",
      "Supported integration of Salesforce with existing systems."
    ],
    icon: Globe,
    featured: false
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full origin-center" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            A selection of projects that showcase my expertise in building scalable web applications
          </motion.p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card 
                className="group relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden h-full"
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] bg-card rounded-lg" />
                
                <div className="relative">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          <project.icon className="h-6 w-6" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          {project.featured && (
                            <Badge className="mt-1 bg-accent/20 text-accent border-accent/30 text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    {project.highlights && (
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-4">
                        {project.highlights.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.05 }}
                        >
                          <Badge 
                            variant="outline"
                            className="bg-secondary/30 border-border/50 text-xs"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
