import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
import { FiChevronUp } from "react-icons/Fi";

export const HomeFaq = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleAccordionItemClick = (value: any) => {
    setActiveItem(value === activeItem ? null : value);
  };

  return (
    <section className="bg-neutral-100">
      <div className="mx-auto h-max w-full max-w-6xl px-4 py-6">
        <div className=" mb-14 mt-14 rounded-3xl bg-orange-800 p-10 text-white md:p-20">
          <div className="text-medus-darkblue-100 mb-12 text-center lg:mb-20">
            <h2
              className="mb-2 font-Poppins text-4xl font-semibold leading-9 md:text-5xl md:leading-[3.875rem]"
              data-aos="fade-up"
            >
              Got a Question?
            </h2>
            <p
              className="md:text-lg md:leading-7"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We may have an answer for you. Here are some of our common FAQ's:
            </p>
          </div>

          <Accordion.Root
            className=" bg-medus-aqua-100"
            type="single"
            collapsible
          >
            <Accordion.Item value="item-1" className="mb-8" data-aos="fade-up">
              <Accordion.Trigger
                onClick={() => handleAccordionItemClick("item-1")}
                className="flex cursor-pointer items-center gap-3 font-Poppins font-semibold"
              >
                <FiChevronUp
                  className={`h-auto w-10 ${
                    activeItem === "item-1" ? "rotate-0" : "rotate-180"
                  } transition-transform`}
                />
                <h3 className="w-full text-start text-xl md:text-2xl">
                  How do I set up a Medus account?
                </h3>
              </Accordion.Trigger>
              <Accordion.Content className="font-Nunito mt-4 text-base font-normal leading-5">
                <p>
                  Setting up a Medus account is quick and easy.
                  <br />
                  <br />
                  Simply visit our website and click on the `Sign Up` button in
                  the top right corner of the page.
                  <br />
                  <br />
                  From there, you'll be prompted to enter your email address and
                  create a password for your account.
                  <br />
                  <br />
                  Once you've created your account, you can start exploring our
                  platform and taking advantage of our innovative learning
                  tools.
                  <br />
                  <br />
                  And don't forget, we offer a free trial so you can experience
                  the power of MEDUS before committing to a subscription.
                </p>
              </Accordion.Content>
            </Accordion.Item>
            <div className="h-0.5 w-full bg-white bg-opacity-20"></div>
            <Accordion.Item
              value="item-2"
              className="my-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Accordion.Trigger
                onClick={() => handleAccordionItemClick("item-2")}
                className="flex cursor-pointer items-center gap-3 font-Poppins font-semibold"
              >
                <FiChevronUp
                  className={`h-auto w-10 ${
                    activeItem === "item-2" ? "rotate-0" : "rotate-180"
                  } transition-transform`}
                />
                <h3 className="w-full text-start text-xl md:text-2xl">
                  How do I set up an exam session?
                </h3>
              </Accordion.Trigger>
              <Accordion.Content className="font-Nunito mt-4 text-base font-normal leading-5">
                <p>
                  Setting up an exam session with our system is simple and can
                  be done entirely online.
                  <br />
                  <br />
                  Once you've created an account and logged in, simply select
                  the `Tests` option from the main menu.
                  <br />
                  <br />
                  From there, you can choose between `Student Mode` or `Test
                  Simulation` to customize your exam experience.
                  <br />
                  <br />
                  In `Student Mode`, you can select topics, years, and the
                  number of questions you want to practice, and our system will
                  generate a customized set of questions for you to answer.
                  <br />
                  <br />
                  In `Test Simulation`, you can simulate the actual exam
                  experience by taking a full-length practice exam that closely
                  mirrors the real thing.
                  <br />
                  <br />
                  Our system offers a range of customization options to help you
                  tailor your exam experience to your specific needs, so you can
                  get the most out of your study time.
                  <br />
                  <br />
                  If you have any questions or need assistance setting up an
                  exam session, our customer support team is always available to
                  help.
                </p>
              </Accordion.Content>
            </Accordion.Item>
            <div className="h-0.5 w-full bg-white bg-opacity-20"></div>
            <Accordion.Item
              value="item-3"
              className="my-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Accordion.Trigger
                onClick={() => handleAccordionItemClick("item-3")}
                className="flex cursor-pointer items-center gap-3 font-Poppins font-semibold"
              >
                <FiChevronUp
                  className={`h-auto w-10 ${
                    activeItem === "item-3" ? "rotate-0" : "rotate-180"
                  } transition-transform`}
                />
                <h3 className="w-full text-start text-xl md:text-2xl">
                  How can I use Medus to study for my IMLE exam?
                </h3>
              </Accordion.Trigger>
              <Accordion.Content className="font-Nunito mt-4 text-base font-normal leading-5">
                <p>
                  MEDUS is designed to help you succeed in your IMLE exam by
                  providing innovative learning tools and resources that are
                  tailored to your specific needs.
                  <br />
                  <br />
                  To use MEDUS to study for your IMLE exam, simply create an
                  account, and start exploring our platform.
                  <br />
                  <br />
                  Our Qbank provides real-case scenarios and explanations that
                  will help you prepare for the exam, and our customizable study
                  plans will help you stay on track and focus on the areas where
                  you need the most improvement.
                  <br />
                  <br />
                  Additionally, our platform offers interactive learning tools
                  such as exams to help you reinforce your knowledge and track
                  your progress.
                  <br />
                  <br />
                  With MEDUS, you'll have all the tools you need to succeed in
                  your IMLE exam and beyond.
                </p>
              </Accordion.Content>
            </Accordion.Item>
            <div className="h-0.5 w-full bg-white bg-opacity-20"></div>
            <Accordion.Item
              value="item-4"
              className="my-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Accordion.Trigger
                onClick={() => handleAccordionItemClick("item-4")}
                className="flex cursor-pointer items-center gap-3 font-Poppins font-semibold"
              >
                <FiChevronUp
                  className={`h-auto w-10 ${
                    activeItem === "item-4" ? "rotate-0" : "rotate-180"
                  } transition-transform`}
                />
                <h3 className="w-full text-start text-xl md:text-2xl">
                  Will my Medus membership automatically renew?
                </h3>
              </Accordion.Trigger>
              <Accordion.Content className="font-Nunito mt-4 text-base font-normal leading-5">
                <p>
                  Yes, your MEDUS membership will automatically renew on a
                  monthly basis after a payment has been made.
                  <br />
                  <br />
                  Our subscription plan is set up to ensure that you have
                  uninterrupted access to our platform and can continue to take
                  advantage of our innovative learning tools and resources.
                  <br />
                  <br />
                  If you wish to cancel your subscription, you can do so at any
                  time by contacting our customer support team.
                </p>
              </Accordion.Content>
            </Accordion.Item>
            <div className="h-0.5 w-full bg-white bg-opacity-20"></div>
            <Accordion.Item
              value="item-5"
              className="mt-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Accordion.Trigger
                onClick={() => handleAccordionItemClick("item-5")}
                className="flex cursor-pointer items-center gap-3 font-Poppins font-semibold"
              >
                <FiChevronUp
                  className={`h-auto w-10 ${
                    activeItem === "item-5" ? "rotate-0" : "rotate-180"
                  } transition-transform`}
                />
                <h3 className="w-full text-start text-xl md:text-2xl">
                  What can I do if I experience technical difficulties?
                </h3>
              </Accordion.Trigger>
              <Accordion.Content className="font-Nunito mt-4 text-base font-normal leading-5">
                <p>
                  If you experience technical difficulties while using MEDUS,
                  our customer support team is available to assist you with any
                  issues you may be experiencing.
                  <br />
                  <br />
                  We're dedicated to ensuring that your learning experience is
                  as smooth and seamless as possible, and we're committed to
                  resolving any technical issues as quickly as possible.
                  <br />
                  <br />
                  If you encounter a technical issue, we recommend reaching out
                  to our customer support team to get the help you need.
                  <br />
                  <br />
                  You can contact us through our website or by emailing our
                  support team directly, and we'll get back to you as soon as
                  possible.
                </p>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
};
