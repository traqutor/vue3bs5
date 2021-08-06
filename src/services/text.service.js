export const getTextFromHtmlContent = (content) => {
  const span = document.createElement("span");
  span.innerHTML = content;
  return span.textContent || span.innerText;
};
