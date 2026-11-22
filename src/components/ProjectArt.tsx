export function ProjectArt({ theme }: { theme: string }) {
  return (
    <div className={`project-art ${theme}`} aria-hidden="true">
      {theme === "narrativex" && (
        <>
          <div className="art-topline">
            NARRATIVEX<span>OPERATING SYSTEM</span>
          </div>
          <div className="workflow-art">
            <div className="workflow-small">IDEA</div>
            <div className="workflow-rule" />
            <div className="workflow-core">
              n<span>×</span>
            </div>
            <div className="workflow-rule" />
            <div className="workflow-small">IMPACT</div>
          </div>
          <div className="art-bottomline">
            <span>CREATE. CONNECT. AUTOMATE.</span>
            <span className="art-symbol">✳</span>
          </div>
        </>
      )}
      {theme === "pickleball" && (
        <>
          <span className="court-caption">
            GOOD PEOPLE.
            <br />
            GREAT GAME.
          </span>
          <div className="court">
            <div className="court-center" />
            <div className="court-net" />
            <div className="court-ball" />
          </div>
          <span className="court-stamp">
            HYDERABAD
            <br />
            PICKLEBALL ASSOCIATION
          </span>
        </>
      )}
      {theme === "scoring" && (
        <>
          <div className="art-topline">
            CREATIVE INTELLIGENCE<span>PRE-FLIGHT</span>
          </div>
          <div className="signal-bars">
            {[
              24, 46, 33, 61, 48, 86, 64, 97, 75, 55, 82, 42, 61, 35, 49, 23,
              65, 43, 78, 54, 95, 63, 40, 72, 32,
            ].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="score-word">
            An instinct.
            <br />
            <em>With evidence.</em>
          </div>
          <span className="art-footnote">VISUALS + LANGUAGE + DATA</span>
        </>
      )}
      {theme === "nextstep" && (
        <>
          <div className="art-topline">
            NEXT STEP HR<span>RESEARCH → RELEVANCE</span>
          </div>
          <div className="editorial-word">
            What’s
            <br />
            <em>next?</em>
            <span className="editorial-star">✳</span>
          </div>
          <div className="art-bottomline">
            <span>
              AN INDUSTRY SIGNAL.
              <br />A USEFUL STORY.
            </span>
            <div className="editorial-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
        </>
      )}
      {theme === "austridge" && (
        <>
          <div className="art-topline">
            AUSTRIDGE GROUP<span>MAKING CONNECTIONS</span>
          </div>
          <div className="austridge-grid">
            <span>People</span>
            <span>Process</span>
            <span>Presence</span>
            <div className="austridge-cross">+</div>
          </div>
          <div className="art-bottomline">
            <span>FROM HANDOFF TO FOLLOW-THROUGH.</span>
            <span>AG</span>
          </div>
        </>
      )}
    </div>
  );
}
