const transliteration = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'e',
  ж: 'j',
  з: 'z',
  и: 'i',
  й: 'i',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'c',
  ч: 'ch',
  ш: 'sh',
  щ: 'sc',
  ь: '',
  ы: 'y',
  ъ: '',
  э: 'e',
  ю: 'iu',
  я: 'ia',
  ' ': '-'
}



export const getPath = (title) => {
  let path = '';
  for (let i = 0; i < title.length; i++) {
    path += transliteration[title[i].toLowerCase()]
  }

  return path;
}