export default function getRandomSubset(array, length) {
    // Copy the original array to avoid modifying it
    const copyArray = array.slice();
    
    // Shuffle the copied array
    for (let i = copyArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
    }
    
    // Return a slice of the shuffled array with the specified length
    return copyArray.slice(0, length);
}