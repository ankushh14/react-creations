import React from "react";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import { generateRandomUUID } from "../../utils/genRandomId";
import styles from "./Carousel.module.css";
import { defaultTemplate, defaultValues } from "./constants";
import { CarouselItemProps, CarouselProps, IndicatorProps } from "./types";

const CarouselItem = React.memo<CarouselItemProps>(({ template, item }) => {
  const content = template(item);
  const carouselRef = React.useRef<HTMLDivElement>(null);
  return (
    <div
      ref={carouselRef}
      className={styles["carousel-in-animation"]}
      aria-atomic
      role="group"
      aria-current="true"
    >
      {content}
    </div>
  );
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
        orientation = "horizontal",
        ...args
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

      const onKeyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowRight") {
          moveRightHandle();
        } else if (e.key === "ArrowLeft") {
          moveLeftHandle();
        } else {
          return;
        }
      };

      return (
        <div
          className="w-full flex flex-col shadow-sm shadow-gray-600 overflow-hidden focus:outline-blue-300"
          {...args}
          role="region"
          tabIndex={0}
          onKeyDown={onKeyDownHandler}
        >
          <div
            ref={ref}
            className={`w-full flex ${orientation === "horizontal" ? "flex-row" : "flex-col"}`}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <div className="h-auto p-4 flex justify-center items-center">
              <button
                className="w-fit rounded-full p-1 text-2xl text-blue-400 focus:outline-blue-500 bg-blue-100"
                onClick={moveLeftHandle}
                aria-label="Previous slide"
              >
                {orientation === "horizontal" ? (
                  <IoIosArrowBack />
                ) : (
                  <IoIosArrowUp />
                )}
              </button>
            </div>
            <div
              className={`w-full flex justify-center items-center p-5 ${orientation === "horizontal" ? "flex-row space-x-6" : "flex-col space-y-6"}`}
              aria-live={`${autoChange ? "polite" : "off"}`}
            >
              {value.length && carouselItems}
            </div>
            <div className="h-auto p-4 flex justify-center items-center">
              <button
                className="w-fit rounded-full p-1 text-2xl text-blue-400 focus:outline-blue-500 bg-blue-100"
                onClick={moveRightHandle}
                aria-label="Next slide"
              >
                {orientation === "horizontal" ? (
                  <IoIosArrowForward />
                ) : (
                  <IoIosArrowDown />
                )}
              </button>
            </div>
          </div>
          <div
            className={`w-full flex flex-row justify-center items-center space-x-4 py-3`}
            role="tablist"
            onKeyDown={(e) => e.stopPropagation()}
          >
            {Array.from({ length: noOfPages }).map((_, index) => {
              return orderedPages ? (
                <OrderedPageIndicator
                  page={page}
                  index={index}
                  key={index}
                  setPage={setPage}
                  setIndex={setIndex}
                  numOfVisible={numOfVisible}
                />
              ) : (
                <UnorderedPageIndicator
                  page={page}
                  index={index}
                  key={index}
                  setPage={setPage}
                  setIndex={setIndex}
                  numOfVisible={numOfVisible}
                />
              );
            })}
          </div>
        </div>
      );
    }
  )
);

const UnorderedPageIndicator = React.memo(
  ({ index, page, setPage, setIndex, numOfVisible }: IndicatorProps) => {
    const onClickHandler = () => {
      setIndex(index * numOfVisible);
      setPage(index);
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (e.key === "Enter" || e.key === "Space") {
        onClickHandler();
      }
    };

    return (
      <>
        <span
          className={`w-3 h-3 bg-transparent rounded-full cursor-pointer hover:border-blue-500 focus:outline-blue-500 ${index === page ? "border-blue-500 border-4" : "border-slate-500 border"}`}
          onClick={onClickHandler}
          tabIndex={0}
          role="button"
          aria-label={`click to go to page ${index} in carousel`}
          title={`page ${index}`}
          onKeyDown={onKeyDownHandler}
        ></span>
      </>
    );
  }
);

const OrderedPageIndicator = React.memo(
  ({ index, page, setPage, setIndex, numOfVisible }: IndicatorProps) => {
    const onClickHandler = () => {
      setIndex(index * numOfVisible);
      setPage(index);
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (e.key === "Enter" || e.key === "Space") {
        onClickHandler();
      }
    };

    return (
      <>
        <span
          className={`w-fit hover:bg-blue-200 border border-[#80ccfba4] focus:outline-blue-500 cursor-pointer rounded-full px-2 text-xs py-1 ${index === page ? "bg-blue-200" : "bg-transparent"}`}
          onClick={onClickHandler}
          tabIndex={0}
          role="button"
          aria-label={`click to go to page ${index} in carousel`}
          title={`page ${index}`}
          onKeyDown={onKeyDownHandler}
        >
          {index}
        </span>
      </>
    );
  }
);

export default Carousel;
