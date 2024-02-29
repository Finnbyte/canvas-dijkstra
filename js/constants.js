/**
 * Size of each cell in grid
 */
export const CELL_SIZE = 23;
/**
 * Size of the grid itself from a visual perspective
 */
export const GRID_SIZE = 600;
/**
 * Size of the underlying grid matrix
 */
export const GRID_ROWS_COLS_LENGTH = Math.floor(GRID_SIZE / CELL_SIZE);
/**
 * The visualization's where draws each node the algorithm has visited frames per second
 */
export const VISUALIZATION_FPS = 60;