async function searchGoogle(query) {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${query}&key=YOUR_API_KEY&cx=YOUR_CX`);
    const data = await response.json();
    return data.items.map(item => item.link);
}

searchGoogle('Your Name').then(links => {
    console.log('Search Results:', links);
});