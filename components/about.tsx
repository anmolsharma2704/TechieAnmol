"use client"

import { Code2, Database, Cloud, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const highlights = [
  {
    icon: Code2,
    title: "Frontend Expert",
    description: "React, Next.js, Vue.js, and modern CSS frameworks"
  },
  {
    icon: Database,
    title: "Backend Proficiency",
    description: "Node.js, Ruby on Rails, PostgreSQL, and REST APIs"
  },
  {
    icon: Cloud,
    title: "DevOps Skills",
    description: "Docker, AWS, CI/CD pipelines, and cloud deployment"
  },
  {
    icon: Sparkles,
    title: "Quality Focus",
    description: "Clean code, testing, and performance optimization"
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full origin-center" 
            />
          </motion.div>
          
          {/* About Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed text-center text-pretty">
              I'm a Full Stack Developer with a passion for building scalable, user-centric web applications. 
              With expertise spanning both frontend and backend technologies, I bring ideas to life through 
              clean code and thoughtful architecture. I specialize in React, Next.js, Node.js, and Ruby on Rails, 
              with a strong foundation in PostgreSQL and modern cloud infrastructure.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed text-center text-pretty">
              My approach combines technical excellence with creative problem-solving, ensuring that every 
              project I work on delivers both exceptional user experiences and robust, maintainable codebases.
            </p>
          </motion.div>
          
          {/* Highlight Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card 
                  className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
