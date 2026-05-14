export const mockLotteryData = {
  sixFiftEightUltra: {
    gameType: '6/58 Ultra Lotto',
    drawTimes: [
      { time: '2:00 PM', numbers: [12, 28, 35, 42, 51, 58], status: 'completed' },
      { time: '5:00 PM', numbers: [8, 19, 31, 44, 53, 57], status: 'completed' },
      { time: '9:00 PM', numbers: [5, 15, 27, 38, 49, 56], status: 'completed' },
    ],
    jackpot: '₱25,000,000',
    description: 'Pick 6 numbers from 1-58 for a chance to win the Ultra Lotto jackpot.',
  },
  sixFiftyFiveGrand: {
    gameType: '6/55 Grand Lotto',
    drawTimes: [
      { time: '2:00 PM', numbers: [3, 17, 24, 36, 45, 52], status: 'completed' },
      { time: '5:00 PM', numbers: [9, 22, 33, 41, 48, 55], status: 'completed' },
      { time: '9:00 PM', numbers: [11, 26, 39, 43, 50, 54], status: 'completed' },
    ],
    jackpot: '₱15,000,000',
    description: 'Pick 6 numbers from 1-55 for a chance to win the Grand Lotto jackpot.',
  },
  threeDSwertres: {
    gameType: '3D Swertres',
    drawTimes: [
      { time: '11:00 AM', numbers: [4, 2, 7], status: 'completed' },
      { time: '4:00 PM', numbers: [6, 8, 3], status: 'completed' },
      { time: '9:00 PM', numbers: [9, 1, 5], status: 'completed' },
    ],
    jackpot: '₱4,500',
    description: 'Pick 3 numbers from 0-9 and guess the correct arrangement.',
  },
  twoD: {
    gameType: '2D Swertres',
    drawTimes: [
      { time: '11:00 AM', numbers: [4, 2], status: 'completed' },
      { time: '4:00 PM', numbers: [6, 8], status: 'completed' },
      { time: '9:00 PM', numbers: [9, 1], status: 'completed' },
    ],
    jackpot: '₱450',
    description: 'Pick 2 numbers from 0-9 and guess the correct arrangement.',
  },
};

export const drawSchedule = [
  {
    game: 'PCSO Lotto',
    draws: ['Mon, Wed, Sat'],
    time: '2:00 PM, 5:00 PM, 9:00 PM',
  },
  {
    game: 'PCSO Mega Lotto 6/45',
    draws: ['Tue, Thu, Sat'],
    time: '2:00 PM, 5:00 PM, 9:00 PM',
  },
  {
    game: 'PCSO Super Lotto 6/49',
    draws: ['Wed, Sat, Sun'],
    time: '2:00 PM, 5:00 PM, 9:00 PM',
  },
  {
    game: 'Swertres 3D & 2D',
    draws: ['Daily'],
    time: '11:00 AM, 4:00 PM, 9:00 PM',
  },
];

export function generateLuckyNumbers(seed: number = Date.now()) {
  const numbers: number[] = [];
  let value = seed;

  while (numbers.length < 6) {
    value = (value * 9301 + 49297) % 233280;
    const num = (value / 233280) * 58;
    if (!numbers.includes(Math.ceil(num))) {
      numbers.push(Math.ceil(num));
    }
  }

  return numbers.sort((a, b) => a - b);
}

export function getCurrentDateString() {
  const date = new Date();
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
