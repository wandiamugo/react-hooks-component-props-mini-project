import React from "react";

function emojiList(minutes) {
    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? "☕️" : "🍱";

    let emojisToDiplay = "";
    for(let i=0; i<minutes; i += interval) {
        emojisToDiplay += emoji;
    }

    return emojisToDiplay;
}

function Article({ title, date = "January 1,1970", preview, minutes}) {
    const emojisToDiplay = emojiList(minutes);

    return (
        <article>
            <h3>{}title</h3>
            <small>
                <p>{preview}</p>
            </small>
        </article>
    );
}

export default Article;