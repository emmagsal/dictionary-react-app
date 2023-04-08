import React from "react";
import axios from "axios";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return (
            <section className="Photos">
                <div className="grid">
                {props.photos.map(function (photo, index) {
                    return (
                        <div key={index}>
                    <img src={photo.src.landscape} className="img-fluid" />
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