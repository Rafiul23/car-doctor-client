const Slider = ({ slideId, img, prev, next }) => {
  return (
    
      <div id={slideId} className="carousel-item relative w-full">
      <img src={img} className="w-full" />
      <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
        <a href={prev} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={next} className="btn btn-circle">
          ❯
        </a>
      </div>
      </div>
    
  );
};

export default Slider;
