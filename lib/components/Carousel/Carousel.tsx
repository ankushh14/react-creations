import React from "react";
import { generateRandomUUID } from "../../utils/genRandomId";
import { defaultTemplate, defaultValues } from "./constants";
import { CarouselItemProps, CarouselProps, IndicatorProps } from "./types";

const CarouselItem = React.memo<CarouselItemProps>(({ template, item }) => {
  const content = template(item);
  const carouselItemRef = React.useRef(null);

  return <div ref={carouselItemRef}>{content}</div>;
});

const Carousel = React.memo(
  React.forwardRef<HTMLDivElement, CarouselProps>(
    (
      {
        autoChange = false,
        childTemplate = defaultTemplate,
        numOfVisible = 2,
        value = defaultValues,
        changeIntervalInMilli = 500,
        orderedPages = false,
      },
      ref
    ) => {
      const [carouselItems, setCarouselItems] = React.useState<
        JSX.Element[] | undefined
      >([]);
      const [index, setIndex] = React.useState(0);
      const [noOfPages, setNoOfPages] = React.useState(0);
      const [page, setPage] = React.useState(0);

      const createCarouselItems = React.useCallback(() => {
        const carouselItems = [...value].splice(index, numOfVisible);
        const createdElements = carouselItems?.map((item) => {
          const carouselItemId = generateRandomUUID();
          return (
            <CarouselItem
              item={item}
              itemId={carouselItemId}
              template={childTemplate}
              key={carouselItemId}
            />
          );
        });
        return createdElements;
      }, [value, numOfVisible, childTemplate, index]);

      React.useEffect(() => {
        setCarouselItems(createCarouselItems);
      }, [createCarouselItems]);

      const moveRightHandle = React.useCallback(() => {
        if (index + numOfVisible >= value.length) {
          setPage(0);
          return setIndex(0);
        }
        setIndex((prev) => prev + numOfVisible);
        setPage((prev) => prev + 1);
      }, [index, numOfVisible, value.length]);

      const moveLeftHandle = React.useCallback(() => {
        if (index <= 0) {
          setPage(noOfPages - 1);
          return setIndex(value.length - numOfVisible);
        }
        setIndex((prev) => prev - numOfVisible);
        setPage((prev) => prev - 1);
      }, [index, numOfVisible, value.length, noOfPages]);

      React.useEffect(() => {
        if (!autoChange) {
          return;
        }
        const interval = setInterval(() => {
          moveRightHandle();
        }, changeIntervalInMilli);

        return () => clearInterval(interval);
      }, [autoChange, changeIntervalInMilli, moveRightHandle]);

      React.useEffect(() => {
        if (value.length <= numOfVisible) {
          setNoOfPages(1);
        } else {
          setNoOfPages(Math.ceil(value.length / numOfVisible));
        }
      }, [noOfPages, value.length, numOfVisible]);

      return (
        <div className="w-full flex flex-col shadow-sm shadow-gray-600">
          <div ref={ref} className="w-full flex flex-row">
            <button className="h-auto p-4 text-2xl" onClick={moveLeftHandle}>
              {"<"}
            </button>
            <div className="w-full flex flex-row justify-center items-center space-x-6 p-5">
              {value.length && carouselItems}
            </div>
            <button className="h-auto p-4 text-2xl" onClick={moveRightHandle}>
              {">"}
            </button>
          </div>
          <div className="w-full flex flex-row justify-center items-center space-x-4 py-3">
            {Array.from({ length: noOfPages }).map((_, index) => {
              return orderedPages ? (
                <OrderedPageIndicator
                  page={page}
                  index={index}
                  key={index}
                  setPage={setPage}
                />
              ) : (
                <UnorderedPageIndicator
                  page={page}
                  index={index}
                  key={index}
                  setPage={setPage}
                />
              );
            })}
          </div>
        </div>
      );
    }
  )
);

const UnorderedPageIndicator = ({ index, page, setPage }: IndicatorProps) => {
  const onClickHandler = () => {
    setPage(index);
  };

  return (
    <>
      <span
        className={`w-3 h-3 bg-transparent rounded-full cursor-pointer hover:border-blue-500 ${index === page ? "border-blue-500 border-4" : "border-slate-500 border"}`}
        onClick={onClickHandler}
      ></span>
    </>
  );
};

const OrderedPageIndicator = ({ index, page, setPage }: IndicatorProps) => {
  const onClickHandler = () => {
    setPage(index);
  };

  return (
    <>
      <span
        className={`w-fit bg-transparent hover:bg-[#87cefa3a] border border-[#80ccfba4] cursor-pointer rounded-full px-2 text-xs py-1 ${index === page ? "bg-[#80ccfba4]" : "bg-transparent"}`}
        onClick={onClickHandler}
      >
        {index}
      </span>
    </>
  );
};

export default Carousel;
