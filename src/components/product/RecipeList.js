import React, { useEffect, useRef, useState } from "react";
import {
  Wishheart,
  BookmarkBt,
  CommentBt,
  RateBt,
  Syoutube,
  Sgit,
  Sinstar,
  Skakao,
  LabelR,
  LabelC,
  LabelPw,
  Viewicon,
  Carticon,
  Wishicon,
  Bookicon,
  Badges,
} from "../common/util/_icon";

import recipedb from "../../data/recipe.json";
import recipecard from "./RecipeList.module.scss";

export default function RecipeList({ id, className }) {
  const buttonsRef = useRef([]);
  const [heartnumer, setHNum] = useState(1512);

  useEffect(() => {
    const toggleClass = (event) => {
      const button = event.currentTarget;
      button.classList.toggle("active");
      // console.log("Toggled classList:", button.classList);

      if (button.classList.contains("wishicon")) {
        setHNum((prev) =>
          button.classList.contains("active") ? prev + 1 : prev - 1
        );
      }
    };

    buttonsRef.current.forEach((button) => {
      if (button) {
        button.addEventListener("click", toggleClass);
      }
    });

    return () => {
      buttonsRef.current.forEach((button) => {
        if (button) {
          button.removeEventListener("click", toggleClass);
        }
      });
    };
  }, []);

  const RecipeData = recipedb[0];

  return (
    <div id={id} className={className}>
      <div className="col-6">
        {/* Image Section */}
        <div className="col-12 bg-dark rounded-3 thumbwrap">
          <div className={recipecard["commu-img"]}>

            <div className="d-flex gap-3 position-absolute top-50 start-50 translate-middle">
              {[Wishheart, BookmarkBt].map((Icon, index) => (
                <div
                  key={`icon${index}`}
                  className={recipecard["icon-bg"]}
                >
                  <Icon
                    ref={(el) => (buttonsRef.current[index] = el)}
                    className={`ms-auto w_icon ${
                      index === 0 ? "wishicon" : ""
                    }`}
                    style= {{ width: "16px" }}
                  />
                </div>
              ))}
            </div>
            
            <img
              src={RecipeData.img_url}
              alt={RecipeData.recipename}
              className="img-fluid"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="h-100">
          {/* Recipe Title */}
          <h2 className="kr-h4 py-3">{RecipeData.recipename}</h2>

          {/* Metadata */}
          <div className="d-flex justify-content-between align-items-center w-100">
            <span className="kr-body fw-bolder">{RecipeData.writer}</span>
            <div className="d-flex align-items-center gap-3">
              <span className="kr-body text-muted opacity-50">스크랩</span>
              <span className="kr-body text-muted opacity-50">
                {RecipeData.scrap}
              </span>
              <span className="kr-body text-muted opacity-50">·</span>
              <span className="kr-body text-muted opacity-50">조회수</span>
              <span className="kr-body text-muted opacity-50">
                {RecipeData.view}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
