import * as React from "react";
import { classMerge } from "../../utils/clsx";
import { defaultCardStyles } from "./constants";
import { CardProps } from "./types";

const Card = React.memo(
  React.forwardRef<HTMLDivElement, CardProps>(
    (
      {
        height,
        width,
        subtitle,
        title,
        header,
        footer,
        withImage = false,
        imageSrc,
        imageAlt,
        children,
        className,
        ...args
      },
      ref
    ) => {
      const customDimensions = {
        width: `${width}px`,
        height: `${height}px`,
      };
      return (
        <div
          {...args}
          ref={ref}
          style={customDimensions}
          className={classMerge(defaultCardStyles, className)}
          role="article"
          aria-labelledby="card-title"
        >
          <div className="w-full">{header}</div>
          {withImage && (
            <div className="w-full">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full aspect-video"
              />
            </div>
          )}
          <div className="w-full p-4">
            <div className="w-full flex flex-col pb-4">
              <div className="w-full">
                <h1 id="card-title" className="text-2xl font-bold">
                  {title}
                </h1>
              </div>
              <div className="w-full">
                <h1 className="text-base font-semibold">{subtitle}</h1>
              </div>
            </div>
            {children}
          </div>
          <div className="w-full pt-5">{footer}</div>
        </div>
      );
    }
  )
);

Card.displayName = "Card";

export default Card;
