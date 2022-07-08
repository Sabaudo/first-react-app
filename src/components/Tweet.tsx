import React from "react";

type TweetProps = {
    text: string;
}

export function Tweet (props: TweetProps) {
    return (
        <h2>{props.text}</h2>
    );
}