// You are given two strings, s and t which only consist of lowercase letters. 
// t is generated by shuffling the letters in s as well as potentially adding an additional random character. 
// Return the letter that was randomly added to t if it exists, otherwise, return ’ ‘.
// Note: You may assume that at most one additional character can be added to t.

// Ex: Given the following strings...

const s = "oiugfidu"; const j = "barfoot"; // return 't'
// const s = "ide"; const t = "idea"; // return 'a'
// const s = "coding"; const t "ingcod"; // return ''

const insertBefore = (arr: string[], char: string): boolean => arr[0] >= char;

const spotDiff = (original, jumble) => {
  if(original.length === jumble.length) return '';
  // alphebatize s and t
  // compare and find where the diff char shows up, return it if found
  const ogArr: string[] = original.split('');
  const ogAlph: string[] = [];
  ogArr.map((item, index, arr) => {
    console.log(ogAlph);
    item
    if(!ogAlph.length || insertBefore(ogAlph, item)) ogAlph.unshift(item);
    else ogAlph.push(item);
    ogAlph
    
  })

}

spotDiff(s, j);