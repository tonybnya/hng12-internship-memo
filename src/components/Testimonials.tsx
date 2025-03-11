import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote?: string;
  name?: string;
  role?: string;
  avatarUrl?: string;
}

interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  testimonials?: TestimonialProps[];
}

const Testimonials = ({
  title = "What People Say",
  description = "Feedback from mentors and team members during my HNG internship journey.",
  testimonials = [
    {
      quote:
        "Demonstrated exceptional problem-solving skills and a strong grasp of full-stack development concepts. Always delivered high-quality code ahead of deadlines.",
      name: "Sarah Johnson",
      role: "Technical Mentor",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      quote:
        "A collaborative team player who consistently brought innovative ideas to the table. Their frontend work showed great attention to detail and user experience.",
      name: "Michael Chen",
      role: "Project Lead",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      quote:
        "Quick to adapt to new technologies and frameworks. Their contributions to our backend architecture were invaluable to the project's success.",
      name: "Olivia Rodriguez",
      role: "Senior Developer",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=olivia",
    },
  ],
}: TestimonialsSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6 text-primary">
                  <Quote size={36} className="opacity-50" />
                </div>

                <p className="text-slate-700 mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
