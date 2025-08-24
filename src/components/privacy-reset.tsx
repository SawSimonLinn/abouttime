// components/privacy-reset.tsx
"use client";
export function PrivacyReset() {
  return (
    <button
      className="text-xs underline opacity-70 hover:opacity-100"
      onClick={() => {
        localStorage.setItem("consent:analytics", "unknown");
        location.reload();
      }}
    >
      Privacy settings
    </button>
  );
}
