import KeyPoints from "../../../../components/key-points/KeyPoints";
import QuestionElement from "../../../../components/question-element/QuestionElement";

function SecurityCORS() {
  return (
    <div>
      <h2>Security - CORS</h2>
      <QuestionElement
        questions={[
          "5. Describe conceptually what Same Origin Policy and CORS is, and how we avoid getting CORS errors when fetching data from an API.",
        ]}
      />
      <KeyPoints
        keypoints={[
          "SOP forhindrer websider i at få adgang til resurser fra andre domæner",
          "CORS (Cross-Origin Resource Sharing) er en mekanisme som tillader begrænset ressource deling på tværs af domæner",
          "SOP forebygger mod fx XSS (Cross-Site Scripting) og CSRF (Cross-Site Request Forgery)",
          "CORS kan vælge hvilke slags requests der skal tillades, og hvilke der skal blokeres",
          "Vi håndterer CORS fejl ved at sætte CORS headers på serveren",
        ]}
      />
    </div>
  );
}

export default SecurityCORS;
