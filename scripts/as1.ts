import * as fs from 'fs'

interface ConstellationEntry {
  symbol: string
  frequency: number
  amplitude: number
  phase: number
}

// const constellationTable: ConstellationEntry[] = [
//   { symbol: '0000', frequency: 1, amplitude: 2, phase: 0 },
//   { symbol: '0001', frequency: 1, amplitude: 2, phase: 90 },
//   { symbol: '0010', frequency: 1, amplitude: 2, phase: 180 },
//   { symbol: '0011', frequency: 1, amplitude: 2, phase: 270 },
//   { symbol: '0100', frequency: 1, amplitude: 4, phase: 45 },
//   { symbol: '0101', frequency: 1, amplitude: 4, phase: 135 },
//   { symbol: '0110', frequency: 1, amplitude: 4, phase: 225 },
//   { symbol: '0111', frequency: 1, amplitude: 4, phase: 315 },
//   { symbol: '1000', frequency: 1, amplitude: 6, phase: 0 },
//   { symbol: '1001', frequency: 1, amplitude: 6, phase: 90 },
//   { symbol: '1010', frequency: 1, amplitude: 6, phase: 180 },
//   { symbol: '1011', frequency: 1, amplitude: 6, phase: 270 },
//   { symbol: '1100', frequency: 1, amplitude: 8, phase: 45 },
//   { symbol: '1101', frequency: 1, amplitude: 8, phase: 135 },
//   { symbol: '1110', frequency: 1, amplitude: 8, phase: 225 },
//   { symbol: '1111', frequency: 1, amplitude: 8, phase: 315 },
// ]

const constellationTable = [
  { symbol: '0000', frequency: 1, amplitude: 3, phase: 0 },
  { symbol: '0001', frequency: 1, amplitude: 3, phase: 90 },
  { symbol: '0010', frequency: 1, amplitude: 3, phase: 180 },
  { symbol: '0011', frequency: 1, amplitude: 3, phase: 270 },
  { symbol: '0100', frequency: 1, amplitude: 5, phase: 45 },
  { symbol: '0101', frequency: 1, amplitude: 5, phase: 135 },
  { symbol: '0110', frequency: 1, amplitude: 5, phase: 225 },
  { symbol: '0111', frequency: 1, amplitude: 5, phase: 315 },
  { symbol: '1000', frequency: 1, amplitude: 7, phase: 0 },
  { symbol: '1001', frequency: 1, amplitude: 7, phase: 90 },
  { symbol: '1010', frequency: 1, amplitude: 7, phase: 180 },
  { symbol: '1011', frequency: 1, amplitude: 7, phase: 270 },
  { symbol: '1100', frequency: 1, amplitude: 9, phase: 45 },
  { symbol: '1101', frequency: 1, amplitude: 9, phase: 135 },
  { symbol: '1110', frequency: 1, amplitude: 9, phase: 225 },
  { symbol: '1111', frequency: 1, amplitude: 9, phase: 315 },
]

/**
 *
 * @param amplitude - The amplitude of the signal
 * @param phase - The phase of the signal in degrees
 * @param frequency - The frequency of the signal in Hz
 * @returns
 */
const calculateCoordinates = (
  amplitude: number,
  phase: number,
  frequency: number,
) => {
  const theta = (phase * Math.PI) / 180

  const x = amplitude * Math.cos(theta)
  const y = amplitude * Math.sin(theta)

  return { x, y }
}

const coordinatesAndYValues = constellationTable.map((entry) => {
  const { x, y } = calculateCoordinates(
    entry.amplitude,
    entry.phase,
    entry.frequency,
  )

  return {
    symbol: entry.symbol,
    amplitude: entry.amplitude,
    phase: entry.phase,
    frequency: entry.frequency,
    x: x.toFixed(2),
    y: y.toFixed(2),
  }
})

console.log(coordinatesAndYValues)

const coordinates = coordinatesAndYValues.map((entry) => {
  return { x: entry.x, y: entry.y }
})

console.log(coordinates)

const formulas = constellationTable.map((entry) => {
  const amplitude = entry.amplitude
  const phase = entry.phase
  const frequency = entry.frequency
  const x = [0.3, 0.7]

  const result: { x: number; y: string | number }[] = []

  x.map((x) => {
    const theta = (phase * Math.PI) / 180
    const y = amplitude * Math.sin(2 * Math.PI * frequency * x + theta)

    console.log(`Symbol ${entry.symbol}: {${x}: ${y.toFixed(2)}}`)

    result.push({
      x,
      y: y.toFixed(2),
    })
  })

  return result
})

const csvContent = `Symbol (binary),Amplitude, Frequency (Hz), Phase (degrees),X,Y\n${coordinatesAndYValues
  .map(
    (entry) =>
      `${entry.symbol},${entry.amplitude},${entry.frequency},${entry.phase},${entry.x},${entry.y}`,
  )
  .join('\n')}`

fs.writeFileSync('results.csv', csvContent, 'utf8')

console.log('Results written to results.csv')
