import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";
import ImagesZoom from "./ImagesZoom";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation" // 시각장애인이 img 태그를 button 으로 인식하는걸 방지
          src={`http://localhost:3065/${images[0].src}`}
          alt={`http://localhost:3065/${images[0].src}`}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation" // 시각장애인이 img 태그를 button 으로 인식하는걸 방지
          src={`http://localhost:3065/${images[0].src}`}
          alt={`http://localhost:3065/${images[0].src}`}
          style={{ width: "50%", display: "inline-block" }}
          onClick={onZoom}
        />
        <img
          role="presentation" // 시각장애인이 img 태그를 button 으로 인식하는걸 방지
          src={`http://localhost:3065/${images[1].src}`}
          style={{ width: "50%", display: "inline-block" }}
          alt={`http://localhost:3065/${images[1].src}`}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }

  return (
    <>
      <div>
        <img
          role="presentation"
          width="50%"
          src={`http://localhost:3065/${images[0].src}`}
          alt={`http://localhost:3065/${images[0].src}`}
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}개의 사진 더 보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostImages;
