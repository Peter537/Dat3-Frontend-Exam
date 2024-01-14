import KeyPoints from "../../../../components/key-points/KeyPoints";
import QuestionElement from "../../../../components/question-element/QuestionElement";

function DesignPrinciples() {
  return (
    <div>
      <h2>Styling - Design Principles</h2>
      <QuestionElement
        questions={[
          "3. Describe some important design principles when developing a website that should be working well on mobile, tablet, as well as desktop browsers.",
        ]}
      />
      <KeyPoints
        keypoints={[
          "Responsive Design",
          "Mobile-First Approach: Nemmere at opskale end at nedskalere",
          "Flexible Images",
          "Touch Friendly",
          "Performance: Hvis hjemmesiden er langsom, så forlader brugeren siden",
          "Cross-Browser Testing",
          "Consistent User Experience: På tværs af skærmstørrelser skal brugeren have samme oplevelse",
        ]}
      />
    </div>
  );
}

export default DesignPrinciples;
