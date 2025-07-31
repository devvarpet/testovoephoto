import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PhotoCard } from "../PhotoCard";
import styles from "./PhotoGallery.module.css";
import { useGetImageQuery } from "../../api/galleryApi.ts";
import type { RootState } from "../../app/store/store.ts";
import { addData, nextPage } from "../../api/gallerySlice.ts";

const PhotoGallery = () => {
  const dispatch = useDispatch();
  const { data, page, inputReq } = useSelector(
    (state: RootState) => state.gallery,
  );

  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const {
    data: imagesData,
    isLoading,
    isFetching,
  } = useGetImageQuery(
    {
      query: inputReq,
      page,
    },
    {
      skip: !inputReq,
    },
  );

  useEffect(() => {
    if (imagesData?.results?.length) {
      dispatch(addData(imagesData.results));
    }
  }, [imagesData, dispatch]);

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      if (entries[0]?.isIntersecting && !isLoading && !isFetching) {
        dispatch(nextPage());
      }
    };

    observer.current = new IntersectionObserver(callback, {
      rootMargin: "100px",
      threshold: 0,
    });

    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [dispatch, isLoading, isFetching]);

  const hasSearched = inputReq !== "";
  const hasResults = data.length > 0;

  return (
    <div ref={galleryRef} className={styles.gallery}>
      {hasResults &&
        data.map((image) => <PhotoCard image={image} key={image.id} />)}

      <div
        ref={sentinelRef}
        style={{
          height: "20px",
          width: "100%",
          backgroundColor: "transparent",
        }}
      />
      {hasSearched && !hasResults && !(isLoading || isFetching) && (
        <div className={styles.noResults}>
          К сожалению, поиск не дал результатов
        </div>
      )}
    </div>
  );
};

export { PhotoGallery };
