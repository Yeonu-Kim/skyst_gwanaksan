import html2canvas from "html2canvas";

const exportPNG = () => {
  html2canvas(document.body, {
    scale: window.devicePixelRatio
  })
  .then(canvas => downloadImage(canvas.toDataURL('image/png')))
  .catch(console.error);
}

const downloadImage = (uri: string) => {
  const fakeLink = window.document.createElement("a");
  document.body.appendChild(fakeLink);
  fakeLink.href = uri;
  fakeLink.setAttribute('download', 'full-page.png');
  fakeLink.click();
  document.body.removeChild(fakeLink);
}



export default exportPNG;