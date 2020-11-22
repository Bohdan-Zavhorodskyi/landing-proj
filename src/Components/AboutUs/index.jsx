import React, { useState } from "react";

import "./styles.scss";

const AboutUs = () => {
  const [images, setImages] = useState([
    {
      key: 0,
      image: "images/imagePicker/image1.jpg",
      alt: "image1",
      isActive: true,
    },
    {
      key: 1,
      image: "images/imagePicker/image2.jpg",
      alt: "image2",
      isActive: false,
    },
    {
      key: 2,
      image: "images/imagePicker/image3.jpg",
      alt: "image3",
      isActive: false,
    },
  ]);

  const changeActiveImage = (index) => {
    let arr = [...images];
    const itemToChange = arr.filter((item) => item.isActive);

    arr.splice(itemToChange[0].key, 1, {
      ...itemToChange[0],
      isActive: !itemToChange[0].isActive,
    });

    arr.splice(arr[index].key, 1, {
      ...arr[index],
      isActive: !arr[index].isActive,
    });

    setImages(arr);
  };

  return (
    <div className="about-us-wrapper">
      <div className="picker">
        {images.map(
          (item) =>
            item.isActive && (
              <div key={item.key} className="picker__item-active">
                <img src={item.image} alt={item.alt} />
              </div>
            )
        )}
        <div className="picker__preview">
          {images.map((item) => (
            <div
              key={item.key}
              className={
                item.isActive ? "picker__item-active-mini" : "picker__item"
              }
              onClick={() => changeActiveImage(item.key)}
            >
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laboriosam aspernatur aut dolorem eveniet voluptates quos cupiditate, animi consequatur iure nulla quasi deleniti rem excepturi vero tenetur, explicabo consectetur adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ea, fugiat autem exercitationem perferendis sed ullam voluptates doloribus temporibus natus fugit eaque possimus at molestiae error reprehenderit molestias quos laudantium. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa consequuntur aut cum nulla veritatis perferendis, quisquam aliquid minus dolores alias, odio nihil quo nam molestias, fugiat facilis corrupti! Facere, soluta!
        </div>
      </div>
      <div className="about-wrapper">
        <div>1-st</div>
        <div>2-nd</div>
      </div>
    </div>
  );
};

export default AboutUs;
