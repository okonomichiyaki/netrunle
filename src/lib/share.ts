import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE } from '../constants/strings'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex - 40} ${lost ? 'X' : guesses.length}/6${
      isHardMode ? '*' : ''
    }\n\n` + generateEmojiGrid(guesses)
  )
}

function getBlank(): string {
  if (localStorage.getItem('theme') === 'dark') {
    return '⬛'
  }
  return '⬜'
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      var padded = guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return getBlank();
          }
        })
        .join('');
        if (guess.length < 25) {
          for (var i = guess.length + 1; i <= 25; i++) {
            padded = padded + getBlank();
          }
        }
        return padded;
    })
    .join('\n')
}
