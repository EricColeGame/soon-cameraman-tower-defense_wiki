"use client";

export function LogoImage({ alt }: { alt: string }) {
  return (
    <img
      src="/images/logo.png"
      alt={alt}
      className="h-full w-full object-cover"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />
  );
}
