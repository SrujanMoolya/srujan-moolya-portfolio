import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8660630502",
      href: "tel:+918660630502"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "SrujanMoolya3@gmail.com",
      href: "mailto:SrujanMoolya3@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Udupi, Karnataka, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/srujan-moolya",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://www.github.com/srvaaap",
      color: "hover:text-gray-900"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-muted/30 snap-start">
      <div className="container mx-auto px-4 md:px-6 py-12 max-h-screen overflow-y-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-racing font-bold mb-6">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-professional">
            Ready to bring innovation to your team? Let's discuss how my expertise 
            can drive your organization to new heights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 racing-border hover-lift bg-card/50 backdrop-blur-sm">
            <h3 className="font-racing font-bold text-2xl mb-6">
              Send a <span className="text-accent">Message</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="racing-border font-professional"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="racing-border font-professional"
                    required
                  />
                </div>
              </div>
              
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="racing-border font-professional"
                required
              />
              
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="racing-border font-professional min-h-32"
                required
              />
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full racing-border hover-lift font-professional font-semibold"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <Card className="p-8 racing-border hover-lift bg-card/50 backdrop-blur-sm">
              <h3 className="font-racing font-bold text-2xl mb-6">
                Get In <span className="text-accent">Touch</span>
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-professional font-medium">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-accent transition-colors font-professional"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-professional font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-accent/10 rounded-full hover-lift transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-8 racing-border hover-lift bg-card/50 backdrop-blur-sm">
              <h3 className="font-racing font-bold text-2xl mb-6">
                Career <span className="text-accent">Opportunities</span>
              </h3>
              
              <div className="space-y-4">
                <p className="font-professional text-muted-foreground">
                  I'm actively seeking opportunities with:
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {["FANG Companies", "AI Startups", "Gaming Studios", "Robotics Firms", "Tech Innovators"].map((type) => (
                    <Badge 
                      key={type}
                      variant="outline" 
                      className="racing-border font-professional"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full mt-6 racing-border hover-lift font-professional font-semibold"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;