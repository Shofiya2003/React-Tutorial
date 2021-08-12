import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import {Helmet} from "react-helmet";


function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function Emoji() {
  return (
    <div className="emoji-section">
      <Helmet>
        <link rel="stylesheet" href="stylesEmoji.css" />
      </Helmet>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default Emoji;
