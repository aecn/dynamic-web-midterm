import React from "react";

// country (should be title)

function ArtCard ({
    art,
    artistDisplayName,
    primaryImage,
    objectDate,
    objectName,
    period,
    title,
}) {
    return (
        <div className="ArtCard">
            <h4>{art.title}</h4>
            <p>{art.artistDisplayName}</p>
            <p>{art.primaryImage}</p>
            <p>{art.objectDate}</p>
            <p>{art.objectName}</p>
            <p>{art.period}</p>
            <p>{art.title}</p>
        </div>
    );
}

export default ArtCard;