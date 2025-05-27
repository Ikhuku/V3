import * as React from "react"

import { cn } from "@/lib/utils"

import { Star } from "lucide-react";
function Card({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card"
      className={cn(
        "text-card-foreground flex flex-col",
        className
      )}
      {...props} />
  );
}

function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-1 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 mb-3",
        className
      )}
      {...props} />
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-bold text-xl text-[#2A8703]", className)}
      {...props} />
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-md text-[#021236] text-md", className)}
      {...props} />
  );
}

function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

function CardContent({
  className,
  ...props
}) {
  return (<div data-slot="card-content" className={cn("px-1", className)} {...props} />);
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-1 [.border-t]:pt-1", className)}
      {...props} />
  );
}

const StarRating = ({rating, people}) => {
  return (
    <div className="flex items-center space-x-1 text-[#021236]">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          className="w-3.5 h-3.5 transition-transform hover:scale-110"
        />
      ))} <p className="font-semibold text-[#021236]">{people}</p>
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  StarRating
}
