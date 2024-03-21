import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsInfo } from "@/constants";
import MaxWidthWrapper from "./max-width-wrapper";

export default function FAQsSection() {
  return (
    <section>
      <MaxWidthWrapper className="mb-28 mt-28">
        <div className="font-bold text-6xl text-center mb-10">FAQs</div>
        {faqsInfo.map((item) => (
          <Accordion key={item.id} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </MaxWidthWrapper>
    </section>
  );
}
