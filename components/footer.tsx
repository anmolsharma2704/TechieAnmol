import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com/anmolsharma", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/anmolsharma", label: "LinkedIn" },
  { icon: Mail, href: "mailto:anmol@example.com", label: "Email" }
]

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-accent fill-accent" />
            <span>by Anmol Sharma</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          {/* Year */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
