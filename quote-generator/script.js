// let apiQuotes = [];

// show new quote
function newQuote() {
    // pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

// Get quotes from API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // catch error here
//     }
// }

// //  on load
// getQuotes();

newQuote();