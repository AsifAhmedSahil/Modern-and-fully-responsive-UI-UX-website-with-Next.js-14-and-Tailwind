"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const items = [
    {
      question: "What does your website monitoring service track?",
      answer:
        "Our website monitoring service tracks various metrics including uptime, response time, and performance. We monitor your website for downtime, slow loading speeds, and other performance issues to ensure it remains operational and performs optimally.",
    },
    {
      question: "How often does your service check my website?",
      answer:
        "Our service performs checks at regular intervals, which can be customized based on your needs. Typically, we offer monitoring at intervals ranging from every minute to every 60 minutes, ensuring you receive timely alerts about any issues.",
    },
    {
      question: "What happens if my website goes down?",
      answer:
        "If your website goes down, our monitoring service immediately sends you an alert via email, SMS, or other preferred communication channels. We provide detailed reports on the incident, including the time of the outage and any possible causes, to help you resolve the issue quickly.",
    },
    {
      question: "Can I see historical performance data for my website?",
      answer:
        "Yes, our service provides detailed historical performance data and reports. You can access graphs and charts showing uptime, response times, and other key metrics over various periods. This data helps you analyze trends and make informed decisions about your website's performance.",
    },
    {
      question: "How can I integrate your monitoring service with my existing tools?",
      answer:
        "We offer integration options with various third-party tools and platforms, such as Slack, PagerDuty, and Zapier. You can set up automated alerts and notifications that fit seamlessly with your current workflow and incident management systems.",
    },
  ];
  



function Faq() {
  return (
    <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="py-4 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Lets clarify some of your questions
        </h1>
        <p className="text-[#36485C] pb-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left font-medium text-[#172026] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        src={Plus}
                        alt="See more"
                        className="h-10 w-10 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  )
}

export default Faq
