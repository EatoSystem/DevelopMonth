import Image from "next/image";

type BumpMapIconProps = {
  size?: number | string;
  className?: string;
  variant?: "standard" | "soft";
  ariaLabel?: string;
  priority?: boolean;
};

/**
 * The approved PregMonth icon supplied in the project folder.
 *
 * Always render the complete artwork with contain sizing. Do not reconstruct,
 * crop, mask, or place it inside an overflow-hidden wrapper.
 */
export function BumpMapIcon({
  size,
  className = "",
  variant = "standard",
  ariaLabel,
  priority = false,
}: BumpMapIconProps) {
  return (
    <Image
      className={`bump-map-icon ${className}`}
      src="/brand/pregmonth-icon.png"
      width={1250}
      height={1250}
      unoptimized
      alt={ariaLabel ?? ""}
      aria-hidden={ariaLabel ? undefined : true}
      priority={priority}
      sizes={typeof size === "number" ? `${size}px` : undefined}
      style={{
        width: typeof size === "number" ? `${size}px` : size,
        height: "auto",
        opacity: variant === "soft" ? 0.58 : 1,
      }}
    />
  );
}
