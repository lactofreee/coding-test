function solution(brown, yellow) {
    let answer = []
    const area = brown + yellow;
    for(let height=3; height<=Math.sqrt(area); height++){
        if(area % height === 0) {
          let width = area/height
          if((width-2)*(height-2)===yellow){
              answer.push(width, height)
          }
        }
    }
    return answer;
}