import { coordinatesFromIndices } from "./canvas_helpers.js";
import { CELL_SIZE, GRID_SIZE } from "./constants.js";

export class GridNode {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.visited = false;
    this.prev = null;
    this.isWall = false;
  }

  /**
   * Draws this node to the canvas with a color via CanvasRenderingContext2D
   * @param {CanvasRenderingContext2D} ctx
   * @param {string} color - A color as string (e.g. green)
   */
  draw(ctx, color) {
    // Maybe assign color dynamically based on class variables?
    const [x, y] = coordinatesFromIndices(this.y, this.x);
    ctx.fillStyle = color;
    ctx.fillRect(x+1, y+1, CELL_SIZE-1, CELL_SIZE-1);
  }
}

export class Grid {
  _grid;
  _grid_size;

  constructor(grid, grid_size) {
    this._grid = grid;
    this._grid_size = grid_size;
  }

  /**
   * Gets a node from the grid matrix via row, col
   * @param {number} row
   * @param {number} col
   * @returns {GridNode}
   */
  getNode(row, col) {
    return this._grid[row][col];
  }

  /**
   * Draws the initial grid node outlines
   * @param {CanvasRenderingContext2D} ctx 
   */
  draw_initial(ctx) {
    for (let y = 1; y < GRID_SIZE; y += CELL_SIZE) {
      for (let x = 1; x < GRID_SIZE; x += CELL_SIZE) {
        ctx.strokeStyle = "gray";
        ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE);
      }
    }
  }

  /**
   * Initializes grid of nodes of size `length`
   * @param {number} length
   * @returns {Grid}
   */
  static initialize(length) {
    const grid = Array.from({ length }).map((_, y) =>
      Array.from({ length: Math.floor(GRID_SIZE / CELL_SIZE) }).map(
        (_, x) => new GridNode(x, y)
      )
    );
    return new Grid(grid, length);
  }

  /**
   * Gets neighbors of a GridNode via `y`, `x`
   * @param {number} y
   * @param {number} x
   * @returns {GridNode[]}
   */
  getNeighbors(y, x) {
    const neighbors = [];
    for (let i = y - 1; i <= y + 1; i++) {
      for (let j = x - 1; j <= x + 1; j++) {
        if (
          (i != y || j != x) &&
          0 <= i &&
          i <= this._grid_size - 1 &&
          0 <= j &&
          j <= this._grid_size - 1
        ) {
          neighbors.push(this.getNode(i, j));
        }
      }
    }
    return neighbors;
  }
}