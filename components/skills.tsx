"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Server, Cloud, Database, Code2, Braces } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Ruby", "Python"],
    gradient: "from-primary to-primary/50"
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: ["React.js", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
    gradient: "from-primary to-primary/50"
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "Ruby on Rails"],
    gradient: "from-accent to-accent/50"
  },
  {
    title: "APIs",
    icon: Braces,
    skills: ["REST APIs", "GraphQL", "Hasura GraphQL"],
    gradient: "from-accent to-accent/50"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
    gradient: "from-accent to-accent/50"
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    skills: ["Docker", "AWS", "Vercel", "Heroku", "Git", "CI/CD", "Linux", "Jira", "GitHub/GitLab"],
    gradient: "from-primary via-accent to-primary"
  },
  {
    title: "CMS/Platforms",
    icon: Server,
    skills: ["Maglev CMS", "Salesforce CRM", "LWC", "Apex"],
    gradient: "from-primary via-accent to-primary"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
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
            Technical <span className="text-primary">Skills</span>
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
            A comprehensive toolkit for building modern, scalable web applications
          </motion.p>
        </motion.div>
        
        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card 
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 h-full"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-primary-foreground`}
                    >
                      <category.icon className="h-6 w-6" />
                    </motion.div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div key={skillIndex} variants={badgeVariants}>
                        <Badge 
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
