function pasteFromClipboard() {
    navigator.clipboard.readText()
        .then(text => {
            const userLinkInput = document.getElementById('userLink');
            userLinkInput.value = text;
            updateLinkPreview();
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
}

function updateLinkPreview() {
    const userLink = document.getElementById('userLink').value;
    const linkPreview = document.getElementById('linkPreview');
    linkPreview.innerHTML = `<a href="${userLink}" target="_blank">${userLink}</a>`;
}

function copyLink() {
    const userLink = document.getElementById('userLink').value;
    const hour = document.getElementById('hour').value;
    const minute = document.getElementById('minute').value;
    const second = document.getElementById('second').value;
    
    const timestamp = (parseInt(hour) * 3600) + (parseInt(minute) * 60) + parseInt(second);
    const linkWithTimestamp = `${userLink}?t=${timestamp}`;

    // Create a temporary textarea to copy the link to the clipboard
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = linkWithTimestamp;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    
    alert('Link with timestamp copied to clipboard!');
}