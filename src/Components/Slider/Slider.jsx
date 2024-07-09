const Slider = ({ slideId, img, prev, next }) => {
  return (
    
      <div id={slideId} className="carousel-item relative w-full">
      <img src={img} className="w-full rounded-xl" />
      <div className="absolute top-0  w-full left-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
       <div className="text-white w-1/2 space-y-7 mx-12">
        <h2 className="text-6xl font-semibold">Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div>
            <button className="btn bg-[#FF3811] mr-5 text-white">Discover More</button>
            <button className="btn btn-outline text-white">Latest Project</button>
        </div>
       </div>
      </div>
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
