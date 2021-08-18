import FAQCard from "./FAQCard";

const FAQ = () => {
  return (
    <div className="pt-4">
      <h4 className="center">Frequently Asked Questions</h4>
      <ul>
        <FAQCard
          question="What happens after I order?"
          answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        />
        <FAQCard
          question="Where I can access my plan?"
          answer={
            <>
              Your plan will be accessible in <strong>Positive Yoga's</strong>{" "}
              web app with a special link generated after your purchase.
            </>
          }
        />
        <FAQCard
          question="How can I cancel my subscription?"
          answer="You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app"
        />
        <FAQCard
          question="Why this program is paid?"
          answer="We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback! "
        />
      </ul>
    </div>
  );
};

export default FAQ;
