import React, { useCallback } from "react";
import { generateRandomUUID } from "../../utils/genRandomId";
import { defaultTemplate, defaultValues } from "./constants";
import { CarouselItemProps, CarouselProps } from "./types";

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
      },
      ref
    ) => {
      const [carouselItems, setCarouselItems] = React.useState<
        JSX.Element[] | undefined
      >([]);
      const [index, setIndex] = React.useState(0);

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

      const moveRightHandle = useCallback(() => {
        if (index + numOfVisible === value.length) {
          return setIndex(0);
        }
        setIndex((prev) => prev + 1);
      }, [index, numOfVisible, value.length]);

      const moveLeftHandle = () => {
        if (index === 0) {
          return setIndex(value.length - numOfVisible);
        }
        setIndex((prev) => prev - 1);
      };

      React.useEffect(() => {
        if (!autoChange) {
          return;
        }
        const interval = setInterval(() => {
          moveRightHandle();
        }, changeIntervalInMilli);

        return () => clearInterval(interval);
      }, [autoChange, changeIntervalInMilli, moveRightHandle]);

      return (
        <div
          ref={ref}
          className="w-full flex flex-row shadow-sm shadow-gray-600"
        >
          <button
            className="h-auto border-r p-4 text-2xl"
            onClick={moveLeftHandle}
          >
            {"<"}
          </button>
          <div className="w-full flex flex-row justify-center items-center space-x-6 p-5">
            {value.length && carouselItems}
          </div>
          <button
            className="h-auto border-l p-4 text-2xl"
            onClick={moveRightHandle}
          >
            {">"}
          </button>
        </div>
      );
    }
  )
);

export default Carousel;
