import React from "react";

import { FAQinfo } from "../../data";
import FAQCard from "./FAQCard";

const FAQ = () => {
  return (
    <div className="pt-4">
      <h4 className="center">Frequently Asked Questions</h4>
      <ul>
        {FAQinfo.map((FAQitem) => {
          return (
            <FAQCard
              question={FAQitem.question}
              answer={FAQitem.answer}
              key={FAQitem.question + FAQitem.answer}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
