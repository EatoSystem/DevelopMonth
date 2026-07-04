import Image from "next/image";
import developMonthIcon from "../DevelopMonth - Icon.png";

type GrowthMapIconProps = {
  className?: string;
  size?: number | string;
  ariaLabel?: string;
  priority?: boolean;
};

/**
 * The approved DevelopMonth icon supplied in the project folder.
 *
 * Always render the complete artwork with contain sizing. The source is a
 * square PNG with generous white space; do not enlarge it inside a cropped
 * wrapper because that removes the upper GrowthMap blocks.
 */
export function GrowthMapIcon({
  className = "",
  size,
  ariaLabel,
  priority = false,
}: GrowthMapIconProps) {
  return (
    <span
      className={`growth-map-icon ${className}`}
      style={
        size
          ? { width: typeof size === "number" ? `${size}px` : size }
          : undefined
      }
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      <Image
        className="growth-map-artwork"
        src={developMonthIcon}
        alt=""
        priority={priority}
        sizes={typeof size === "number" ? `${size}px` : undefined}
        style={{ width: "100%", height: "auto" }}
      />
    </span>
  );
}
