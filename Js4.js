// Expected Result : 
// [
//   { id: '1', name: 'Sherlock', score: 90 },
//   { id: '4', name: 'Budi', score: 85 }
// ]
// Direction :
// Return array of student for score is bigger than mean score (average score)

const students = [
  {
    id: "1",
    name: "Sherlock",
    score:90
  },
  {
    id: "2",
    name: "Genta",
    score: 75
  },
  {
    id: "3",
    name: "Ai",
    score: 80
  },
  {
    id: "4",
    name: "Budi",
    score:85
  }
]

function result() {
  result = []
  let avgScore;


  for(i = 0; i<students.length; i++){
      avgScore = (students.score[i]+students.score[i+1]+students.score[i+2]+students.score[i+3])/4
      if(avgScore<score[i]){
          result.push(students[i])
      }
  }
  return result
}

console.log(result());