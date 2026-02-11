function searchImage() {
    const query = document.getElementById('searchInput').value.trim();
    const imageContainer = document.getElementById('imageContainer');
    const loader = document.getElementById('loader');
    const buttonText = document.getElementById('buttonText');

    if (query === '') {
        imageContainer.innerHTML = 'Please enter a search query.';
        return;
    }

    // Show loader, hide text
    loader.style.display = 'block';
    buttonText.style.visibility = 'hidden';
    imageContainer.innerHTML = '';

    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=1`;

    fetch(url, {
        headers: {
            'Authorization': 'Client-ID M7OGjjDYc_CQ68Tor4V2P_Xpk1YJ9VcyWtMvlYgb59U',
            'Accept-Version': 'v1'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.results.length > 0) {
            const img = document.createElement('img');
            img.src = data.results[0].urls.regular;
            imageContainer.appendChild(img);
        } else {
            imageContainer.innerHTML = 'No images found.';
        }
    })
    .catch(() => {
        imageContainer.innerHTML = 'Error fetching image.';
    })
    .finally(() => {
        // Hide loader, show text
        loader.style.display = 'none';
        buttonText.style.visibility = 'visible';
    });
}

