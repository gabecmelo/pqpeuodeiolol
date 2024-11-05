import { useNavigate, useParams } from "react-router-dom";
import { helpers } from "../helpers/dbHelpers";
import { RoughNotation } from "react-rough-notation";

function PhrasePage() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const phraseId = Number(id);
  const selectedPhrase = helpers.getPhraseById(phraseId);

  const randomId = helpers.getRandomId();
  const newRandomId = helpers.getRandomId() !== phraseId ? randomId : helpers.getRandomId();

  if (!selectedPhrase)
    return (
      <p>
        Opa, você entrou aonde não deveria,{" "}
        <a onClick={() => navigate("/")} className="text-cyan-800 underline cursor-pointer">
          volte para o início
        </a>
        .
      </p>
    );

  return (
    <div className="flex h-screen justify-center items-center bg-white" style={{ width: "100vw" }}>
      <div className="" style={{ maxWidth: 600, marginTop: "-10%" }}>
        <blockquote
          className="text-lg"
          style={{
            borderWidth: "1px 0",
            borderStyle: "solid",
            borderColor: "rgb(206, 189, 189)",
            lineHeight: "30px",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            whiteSpace: "pre-wrap",
          }}
        >
          {selectedPhrase.phraseParts.map((part, index) => (
            <>
              {part.highlight ? (
                <RoughNotation
                  key={`${phraseId}-${index}`}
                  type={part.highlight.type}
                  show={true}
                  color={part.highlight.color}
                  strokeWidth={2}
                  animate={true}
                  animationDelay={200 * index}
                >
                  {part.highlight.type === "underline" ? <strong>{part.text}</strong> : part.text}
                </RoughNotation>
              ) : (
                <span key={index}>{part.text}</span>
              )}
              {part.break && <br />}
            </>
          ))}
        </blockquote>
        <a
          className="text-sm cursor-pointer"
          style={{ float: "right", color: "rgb(50, 69, 208)", marginTop: "14px" }}
          onClick={() => navigate(`/pqpeuodeiolol/${newRandomId}`)}
        >
          Outra opinião →
        </a>
      </div>
    </div>
  );
}

export default PhrasePage;
