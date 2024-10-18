export function shuffle(array: string[]){
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array; 
}

export function pickAndSplice(array: string[]) : string
{
  return array.splice(Math.floor(Math.random()*array.length), 1)[0];
}
