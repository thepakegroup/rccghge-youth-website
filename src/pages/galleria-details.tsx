import api from "@/utils/axios-interceptor";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import { v4 as uuidv4 } from "uuid";

const GalleriaDetails = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const perPage = searchParams.get("perPage") || 20;
  //
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  //
  const { data: galleryItems, isLoading: loadingGalleryItems } = useQuery({
    queryKey: ["galleryItems", id, page],
    queryFn: async () => {
      const res = await api.get(
        `/gallery/items?page=${page}&perPage=${perPage}&folder_id=${id}&ctx=rccghge-youth`
      );
      const data = res.data.data.data;
      setImages(data.map((item: any) => item.imageUrl));
      return res.data;
    },
    select: (data) => data.data,
  });
  //
  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  //
  return (
    <div className="w-[90%] mx-auto">
      {loadingGalleryItems && (
        <div className="h-[25px] w-[250px] bg-light-200 animate-pulse" />
      )}
      {galleryItems && (
        <h1 className="header-one !text-dark-100 text-center">
          {galleryItems?.data[0]?.folder?.folderName} Items
        </h1>
      )}
      <div className="relative mx-auto bg-[linear-gradient(to_right,#12234E,#4473BA)] h-[3px] mt-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] bg-light-100 px-4 py-2">
          <img className="w-full" src="/logo.svg" alt="" />
        </div>
      </div>
      {/*  */}
      <div className="side-space mt-[60px] mb-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-8">
        {loadingGalleryItems &&
          [...Array(9)].map((item: any) => (
            <div
              className="w-full h-[300px] bg-light-200 rounded-md animate-pulse"
              key={uuidv4() + item}
            />
          ))}
        {galleryItems && galleryItems?.data?.length < 1 && (
          <div className="text-center font-bold text-dark-100/70 col-span-3">
            No Gallery Item Found
          </div>
        )}
        {galleryItems &&
          galleryItems?.data?.map((item: any, index: number) => {
            return (
              <div
                className="w-full 476:w-[300px] sm:w-full mx-auto h-full bg-light-200 rounded-md"
                key={item?.id}
              >
                <img
                  className="w-full h-full object-cover"
                  src={item?.imageUrl}
                  alt=""
                  onClick={() => openImageViewer(index)}
                />
              </div>
            );
          })}
        {galleryItems && isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)",
            }}
            closeOnClickOutside={true}
          />
        )}
      </div>
    </div>
  );
};

export default GalleriaDetails;
