// Helper function to convert time in seconds to a mm:ss format
export const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

/**
 * Triggers a file download with the given content and filename.
 *
 * @param {string} content The content to be downloaded.
 */
export const handleDownload = (content) => {
    // Create a Blob from the content string
    const blob = new Blob([content], {type: 'text/plain'});

    // Create a link element
    const link = document.createElement("a");

    // Set the download attribute with a filename
    link.download = `content-venue-generated-description.txt`;

    // Create a URL for the Blob and set it as href
    link.href = window.URL.createObjectURL(blob);

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger click to download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
};

/**
 * Formats the assets object into a comma-separated string.
 *
 * @param {Object} assets The assets object.
 * @return {string} The formatted string of assets.
 */
export const formatAssets = (assets) => {
    if (!assets) {
        return '';
    }
    let selectedAssets = [];
    for (const category in assets) {
        if (assets[category].length > 0) {
            selectedAssets = selectedAssets.concat(assets[category]);
        }
    }
    return selectedAssets.join(', ');
};
