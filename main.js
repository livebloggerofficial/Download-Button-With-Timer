const downloadButton = document.querySelector(
  ".download-button-container .download-button"
);
const downloadHeading = document.querySelector(".download-info h3");
const downloadInfo = document.querySelector(".download-info");

let downloadTimer;
let remainingTime = 5;
let linkDisplayed = false;

const showDownloadLink = () => {
  if (!linkDisplayed) {
    const downloadLink = document.createElement("a");
    downloadLink.href = "#";
    downloadLink.innerHTML = "Click Here";
    downloadLink.classList.add("download-link");
    downloadInfo.appendChild(downloadLink);
  }
  linkDisplayed = true;
};

downloadButton.addEventListener("click", () => {
  downloadButton.classList.add("active");

  downloadTimer = setInterval(() => {
    remainingTime--;

    if (remainingTime <= 0) {
      clearInterval(downloadTimer);
      showDownloadLink();
      downloadHeading.innerHTML = "Here is the download link.";
    } else {
      downloadHeading.innerHTML = `Your download link will appear in ${remainingTime} seconds.`;
    }
  }, 1000);
});
