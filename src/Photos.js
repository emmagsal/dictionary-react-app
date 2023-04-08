import React from "react";

import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return (
            <section className="Photos">
                <div className="grid">
                {props.photos.map(function (photo, index) {
                    return (
                        <div key={index}>
                    <img src={photo.src.landscape} className="img-fluid" alt="whoops" />
                    </div>
                    );
                })}
                </div>
            </section>
        )
    } else {
        return null;
    }
}