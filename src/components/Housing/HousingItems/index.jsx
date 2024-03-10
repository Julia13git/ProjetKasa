import React from "react";
import "./housingitem.scss";
import Tag from "../../Tag";
import Rating from "../../Rating";
import Host from "../../Host";
import Collapse from "../../Collapse";

import Carousel from "../../Carousel";

function HousingItems({ housing }) {
  return (
    <>
      <Carousel id={housing.id} />

      <div key={housing.id}>
        <div className="card-layout">
          <div className="title-location-tags">
            <div className="housing-info">
              <h1 className="housing-title">{housing.title}</h1>
              <p className="housing-location">{housing.location}</p>
            </div>
            <div className="tag-list">
              {housing.tags.map((tag, index) => {
                return <Tag key={index} tag={tag} />;
              })}
            </div>
          </div>
          <div className="rating-host">
            <div>
              <Rating score={housing.rating} />
            </div>
            <div>
              <Host name={housing.host.name} src={housing.host.picture} />
            </div>
          </div>
        </div>
        <div className="description-equipment">
          <Collapse title="Description" content={housing.description} />
          <Collapse
            title="Équipements"
            content={housing.equipments}
            modeList={true}
          />
        </div>
      </div>
    </>
  );
}

export default HousingItems;
