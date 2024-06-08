function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return 'A++';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== 'F';
}

function studentMsg(totalScores, studentScore) {
  const averageScore = getAverage(totalScores).toFixed(2);
  const studentGrade = getGrade(studentScore);
  const passing = studentGrade !== 'F';

  let message = `Class average: ${averageScore}. Your grade: ${studentGrade}. `;
  message += passing ? 'You passed the course.' : 'You failed the course.';

  return message;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
