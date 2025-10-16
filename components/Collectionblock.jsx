const Collectionblock = () => {
  const collections = [
    {
      id: 1,
      title: "new skirt",
      image: "/212banner.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "blazers",
      image: "/blazers-fashion-banner.jpg",
      link: "#",
    },
  ];

  return (
    <div className="collection_block">
      <div className="shop_wpr flex flex-wrap">
        {collections.map((item) => (
          <div key={item.id} className="shop_col w-1/2">
            <div className="shop_block relative">
              <div className="shop_block_img">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[16/13.7] object-cover"
                />
              </div>
              <div className="shop_block_info absolute inset-0 p-6 flex flex-col justify-end items-center">
                <h2 className="text-6xl uppercase text-[#fff] mb-4">
                  {item.title}
                </h2>
                <a
                  href={item.link}
                  className="uppercase text-[#fff] text-[14px] tracking-[2px] underline-offset-[6px] border-[#fff] border-b"
                >
                  shop new collection
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collectionblock;
