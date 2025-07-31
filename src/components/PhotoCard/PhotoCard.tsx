import { useState } from "react";
import { PhotoModal } from "../PhotoModal";
import styles from "./PhotoCard.module.css";
import type { Result } from "../../types/types.ts";

interface PhotoCardProps {
  image: Result;
}

const PhotoCard = ({ image }: PhotoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.photo_card} onClick={openModal}>
        <img
          src={image.urls.small}
          alt={image.alt_description || "Photo"}
          className={styles.photo_img}
          loading="lazy"
        />
      </div>

      {isModalOpen && (
        <PhotoModal
          urls={image.urls}
          alt={image.alt_description}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export { PhotoCard };
