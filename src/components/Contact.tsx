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
  const [sending, setSending] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check (if filled, likely bot)
    const form = e.target as HTMLFormElement;
    const honey = (form.querySelector("input[name='_honey']") as HTMLInputElement)?.value;
    if (honey) {
      // silently drop
      return;
    }

    try {
      setSending(true);
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("subject", formData.subject || "Website Contact");
      fd.append("message", formData.message);
      // Disable formsubmit captcha and set a subject override
      fd.append("_captcha", "false");
      fd.append("_subject", `Website Contact: ${formData.subject || "New message"}`);

      const res = await fetch("https://formsubmit.co/ajax/srujanmoolya21@gmail.com", {
        method: "POST",
        body: fd
      });

      const json = await res.json();
      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error(json);
        toast.error("Failed to send message. Please try again or email directly.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while sending. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
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
              {/* Honeypot field for bots */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input name="name"
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
            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="srujan-moolya" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/srujan-moolya?trk=profile-badge"><br /></a></div>

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

            <Card className="p-8 racing-border hover-lift bg-card/50 backdrop-blur-sm text-center">
              <h3 className="font-racing font-bold text-2xl mb-6">
                Download <span className="text-accent">Resume</span>
              </h3>

              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full racing-border hover-lift font-professional font-semibold"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;