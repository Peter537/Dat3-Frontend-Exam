import KeyPoints from "../../../../components/key-points/KeyPoints";
import QuestionElement from "../../../../components/question-element/QuestionElement";

function Https() {
  return (
    <div>
      <h2>Deployment - Https</h2>
      <QuestionElement
        questions={[
          "4. Describe conceptually what HTTPS is and how we got it working on our deployed websites.",
        ]}
      />
      <KeyPoints
        keypoints={[
          "HTTPS (Hypertext Transfer Protocol Secure) - Kommunikation er krypteret mellem klient og server",
          "Kræver certifikat (udstedt af Certificate Authority) - Vi bruger Let's Encrypt",
          "Traefik håndterer HTTPS certifikater, og ACME (Automatic Certificate Management Environment) genererer certifikater",
        ]}
      />
    </div>
  );
}

export default Https;
