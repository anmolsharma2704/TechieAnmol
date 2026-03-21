"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "InitCoders",
    period: "July 2024 - Present",
    description: "Leading development of scalable web applications, focusing on backend architecture, API design, and cloud deployment. Collaborating with cross-functional teams to deliver high-quality solutions.",
    highlights: [
      "Built and maintained RESTful APIs serving 10k+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Architected microservices infrastructure on AWS",
      "Mentored junior developers and conducted code reviews"
    ],
    tech: ["React", "Node.js", "Ruby on Rails", "PostgreSQL", "AWS", "Docker"]
  },
  {
    title: "Web Developer Intern",
    company: "Afame Technologies",
    period: "Jan 2024 - Jun 2024",
    description: "Worked as a Web Developer Intern, contributing to the development of responsive and scalable web applications. Focused on writing clean, maintainable code and improving user experience.",
    highlights: [
      "Developed and maintained web application features using modern technologies",
      "Collaborated with senior developers to build responsive and user-friendly interfaces",
      "Assisted in API integration and backend functionality",
      "Optimized performance and improved page load efficiency",
      "Gained hands-on experience with real-world development workflows and deployment"
    ],
    tech: ["JavaScript", "React", "HTML", "CSS", "Node.js", "Git"]
  }
]

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const cardVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
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
            Work <span className="text-primary">Experience</span>
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
            My professional journey in software development
          </motion.p>
        </motion.div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            {/* Timeline line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 origin-top" 
            />
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={index % 2 === 0 ? cardVariantsRight : cardVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" 
                />
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          <Briefcase className="h-5 w-5" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Highlights */}
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, hIndex) => (
                          <motion.li 
                            key={hIndex} 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: hIndex * 0.1 }}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            {highlight}
                          </motion.li>
                        ))}
                      </ul>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                          >
                            <Badge 
                              variant="secondary"
                              className="bg-secondary/50 text-xs"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
