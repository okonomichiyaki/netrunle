import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the Netrunner card in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>
      <br />

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" status="correct" />
        <Cell value="E" />
        <Cell value="A" />
        <Cell value="R" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="I" />
        <Cell value="L" status="present" />
        <Cell value="O" />
        <Cell value="T" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="V" />
        <Cell value="A" />
        <Cell value="G" />
        <Cell value="U" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the word in any spot.
      </p>
      <br />
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Possible solutions are drawn from the NISEI Startup card pool: System Gateway, System Update 2021, and Ashes (Downfall and Uprising).
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Card titles have had spaces and accents removed.
        Runner identities do not include their subtitles, while Corp identities do not include their faction.
        For instance, to guess <i>René "Loup" Arcemont: Party Animal</i>, type <i>renelouparcemont</i>.
        And to guess <i>Haas-Bioroid: Precision Design </i>, type <i>precisiondesign</i>.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Card titles with numbers are omitted (<i>Bass CH1R180G4</i> will never be a solution).
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The solution word might be any length from 3 (Lat, Tyr, Imp) to 25 (Luminal Transubstantiation).
        The grid will always accept up to 25 letter long guesses to make room for Luminal.
      </p>
    </BaseModal>
  )
}
