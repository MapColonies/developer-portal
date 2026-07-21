export function cosineSimilarity(left, right) {
  let dotProduct = 0;
  let leftMagnitude = 0;
  let rightMagnitude = 0;

  for (let index = 0; index < left.length; index += 1) {
    const leftValue = left[index] || 0;
    const rightValue = right[index] || 0;
    dotProduct += leftValue * rightValue;
    leftMagnitude += leftValue * leftValue;
    rightMagnitude += rightValue * rightValue;
  }

  if (!leftMagnitude || !rightMagnitude) {
    return 0;
  }

  return dotProduct / (Math.sqrt(leftMagnitude) * Math.sqrt(rightMagnitude));
}

export function findTopChunks(index, questionEmbedding, topK, currentUrl = '') {
  return index
    .map((chunk) => {
      const samePageBoost = currentUrl && currentUrl.includes(chunk.url.split('#')[0]) ? 0.05 : 0;
      return {
        ...chunk,
        score: cosineSimilarity(questionEmbedding, chunk.embedding) + samePageBoost,
      };
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, topK);
}
