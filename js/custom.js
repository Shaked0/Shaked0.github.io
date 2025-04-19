document.addEventListener('DOMContentLoaded', function () {
    var downloadButton = document.getElementById("download-button");
    var tosModal = document.getElementById("tos-modal");
  
    if (downloadButton) {
      downloadButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action
        tosModal.style.display = "block"; // Show modal
      });
    }
  
    function acceptTOS() {
      tosModal.style.display = "none";
      window.location.href = downloadButton.href; // Redirect to the download
    }
  
    function closeTOS() {
      tosModal.style.display = "none"; // Close modal without downloading
    }
  
    // Make sure the TOS modal functions are accessible
    window.acceptTOS = acceptTOS;
    window.closeTOS = closeTOS;
  });

  document.addEventListener("DOMContentLoaded", function () {
    const meta = document.createElement('meta');
    meta.name = "robots";
    meta.content = "noindex, noarchive, nosnippet, nofollow";
    document.head.appendChild(meta);
  });