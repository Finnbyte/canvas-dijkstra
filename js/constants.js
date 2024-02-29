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

export const RESULT_PATH_NODE_COLOR = "orange";
export const START_NODE_COLOR = "red";
export const END_NODE_COLOR = "orange";
export const VISITED_NODE_COLOR = "darkgreen";
export const WALL_COLOR = "black";
export const EMPTY_NODE_COLOR = "white";