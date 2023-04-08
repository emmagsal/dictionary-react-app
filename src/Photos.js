import React from "react";

export default function Photos(props) {
    if (props.photos) {
        return "hello from Photos";
    } else {
        return null;
    }
}