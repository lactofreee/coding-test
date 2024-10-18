function solution(answers) {
  const student1 = [1, 2, 3, 4, 5]
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5]
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  
  let scores = [0, 0, 0]
  for(let i=0; i<answers.length; i++){
      if(answers[i]===student1[i%student1.length]){scores[0]++}
      if(answers[i]===student2[i%student2.length]){scores[1]++}
      if(answers[i]===student3[i%student3.length]){scores[2]++}
  }
  
  const max_score = Math.max(...scores)
  let answer = [];
  scores.forEach((score, i)=>score===max_score&&answer.push(i+1))
  
  return answer;
}