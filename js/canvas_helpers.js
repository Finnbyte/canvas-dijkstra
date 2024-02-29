import { CELL_SIZE } from "./constants.js";


/**
 * Converts Javascript client coordinates (X, Y) to grid's rows and cols
 * @param {number} x 
 * @param {number} y 
 * @returns {number[]}
 */
export function indicesFromCoordinates(x, y) {
  const CANVAS_TOPLEFT_OFFSET = 10;
  const row = Math.floor((y - CANVAS_TOPLEFT_OFFSET) / CELL_SIZE);
  const col = Math.floor((x - CANVAS_TOPLEFT_OFFSET) / CELL_SIZE);
  return [row, col];
}

/**
 * Converts grid's rows and cols to Javascript coordinates
 * @param {number} row 
 * @param {number} col 
 * @returns {number[]}
 */
export function coordinatesFromIndices(row, col) {
  const x = Math.floor(col * CELL_SIZE);
  const y = Math.floor(row * CELL_SIZE);
  return [x, y];
}