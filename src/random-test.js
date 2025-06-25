function simulateReactRandom() {
  const options = ['A', 'B', 'C', 'D'];
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomType = options[randomIndex];
  return randomType;
}

function runSimulation(times) {
  const result = { A: 0, B: 0, C: 0, D: 0 };

  for (let i = 0; i < times; i++) {
    const value = simulateReactRandom();
    result[value]++;
  }

  return result;
}

const trials = 500;
const distribution = runSimulation(trials);

console.log(`🧪 ผลลัพธ์หลังจากสุ่ม ${trials} ครั้ง:`);
console.log(distribution);
