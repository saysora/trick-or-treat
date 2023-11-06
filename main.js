// Simple Vanilla stuff
const fetchButton = document.getElementById('fetchRandom');
const promptElem = document.getElementById('prompt');
let previousCategory = "";

/**
 * TODO: Setup loading animation + try catch finally
 *
 */

const fetchRandomPrompt = async () => {
  try {
    const prompt = await fetch(`${import.meta.env.VITE_API_URL}`).then(data => data.json()).then(json => json);
    const candyAmount = Math.floor(Math.random() * (10 - 0 + 0) + 0);

    if (prompt.content = prompt.content.replace('<AMOUNT>', candyAmount > 1 || candyAmount < 1 ? `${candyAmount} candies` : `${candyAmount} candy`));

    prompt.content = prompt.content.replace('**', '<br /><strong>').replace('**', '</strong>');

    promptElem.innerHTML = `<p>${prompt.content}</p>`;

    promptElem.classList.add(prompt.category);
    if (previousCategory && previousCategory != prompt.category) {
      promptElem.classList.remove(previousCategory);
    }
    previousCategory = prompt.category;
  } catch (e) {
    console.error(e);
    promptElem
  }
}

fetchButton.addEventListener('click', fetchRandomPrompt);

window.addEventListener('load', () => {
  fetchRandomPrompt();
});
