import React, { useEffect } from "react";
import styles from "./PhotoModal.module.css";
import CloseIcon from "../../assets/Close.svg";

interface PhotoModalProps {
  urls: {
    full: string;
    regular: string;
  };
  alt: string | null;
  onClose: () => void;
}

const PhotoModal = ({ urls, alt, onClose }: PhotoModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const imageUrl = urls.full || urls.regular;

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          <img src={CloseIcon} alt="Close" className={styles.closeIcon} />
        </button>
        <img
          src={imageUrl}
          alt={alt || "Full size photo"}
          className={styles.modalImage}
        />
      </div>
    </div>
  );
};

export { PhotoModal };
