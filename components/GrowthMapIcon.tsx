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
 * The source presentation artwork includes generous white space, so the image
 * is framed consistently without changing or reconstructing the mark.
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
      />
    </span>
  );
}
