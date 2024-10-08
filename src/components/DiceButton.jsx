// function DiceButton({ GetAdvice }) {
//   return (
//     <button
//       className="rounded-full bg-neonGreen h-16 w-16 flex justify-center items-center shadow-lg hover:shadow-xl absolute bottom-[-52px] left-28 md:left-40"
//       onClick={GetAdvice}
//     >
//       <img className="h-8 w-8" src="images/icon-dice.svg" alt="Dice Icon" />
//     </button>
//   );
// }

// export default DiceButton;
function DiceButton({ GetAdvice }) {
  return (
    <button
      className="rounded-full bg-neonGreen h-16 w-16 flex justify-center items-center absolute bottom-[-44px] left-[105px] lg:left-[220px] cursor-grab hover:shadow-neon"
      onClick={GetAdvice}
    >
      <img className="h-8 w-8" src="images/icon-dice.svg" alt="Dice Icon" />
    </button>
  );
}

export default DiceButton;
