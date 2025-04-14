import { motion } from "framer-motion";
import { GradientBorder } from "@/components/ui/gradient-border";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why is ShareZet the best choice for sharing text, files, and code online?",
    answer: "ShareZet is designed for speed, simplicity, and privacy. With no sign-ups, no tracking, and instant room creation, it makes sharing seamless and secure. Whether you're sharing code snippets, documents, or  files, everything is done in real-time with end-to-end privacy in mind."
  }
,  
  {
    question: "Is ShareZet really free to use?",
    answer: "Yes, ShareZet is completely free with no hidden costs or premium tiers. We believe in accessible file sharing for everyone."
  },
  {
    question: "How long are files stored on ShareZet?",
    answer: "We don't store your files on our servers. Files are transferred directly between participants and disappear when your session ends."
  },
  {
    question: "How many people can join a room?",
    answer: "There's no specific limit to room participants, though performance may vary with extremely large groups."
  },
  {
    question: "Can I password-protect my room?",
    answer: "Custom room codes act as passwords. Create a unique, complex room code for maximum security."
  },

  {
    question: "What devices are supported?",
    answer: "ShareZet works on any device with a modern web browser, including desktops, laptops, tablets, and smartphones."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="pt-28 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-card/30 to-background"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about ShareZet's instant sharing platform.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GradientBorder className="p-1 mb-4">
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="bg-card rounded-t-lg px-6 py-4 text-xl font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="bg-card rounded-b-lg px-6 py-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </GradientBorder>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
