export function getSearchParamFromUrl(): string {
  const searchParams = new URLSearchParams(window.location.search);
  const keyword = searchParams.get("search");
  return keyword || "";
}
