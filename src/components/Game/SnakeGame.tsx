"use client"
import React, { useState, useEffect, useRef } from 'react';
import "./SnakeGame.css";

// TypeScript interfaces
interface Position {
  x: number;
  y: number;
}

interface CellProps {
  position: Position;
  isFood: boolean;
  isSnake: boolean;
  isHead: boolean;
  snakeOpacity: number;
  direction: string;
}

const Cell: React.FC<CellProps> = ({ 
  position, 
  isFood, 
  isSnake, 
  isHead, 
  snakeOpacity, 
  direction 
}) => {
  const cellSize = window.innerWidth > 1536 ? "10px" : "8px";
  const style: React.CSSProperties = {
    width: cellSize,
    height: cellSize,
    display: "flex",
    flexShrink: 0,
    backgroundColor: isSnake ? "#43D9AD" : isFood ? "#43D9AD" : "transparent",
    opacity: isSnake ? snakeOpacity : 1,
  };

  if (isFood && !isSnake) {
    style.borderRadius = "50%";
    style.boxShadow = "0 0 10px #43D9AD";
  }

  if (isHead) {
    const headRadius = "5px";
    if (direction === "up") {
      style.borderTopLeftRadius = headRadius;
      style.borderTopRightRadius = headRadius;
    } else if (direction === "down") {
      style.borderBottomLeftRadius = headRadius;
      style.borderBottomRightRadius = headRadius;
    } else if (direction === "left") {
      style.borderTopLeftRadius = headRadius;
      style.borderBottomLeftRadius = headRadius;
    } else if (direction === "right") {
      style.borderTopRightRadius = headRadius;
      style.borderBottomRightRadius = headRadius;
    }
  }

  return <div className="cell" style={style}></div>;
};

const FoodIndicator: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div className="food" style={{ opacity: active ? 1 : 0.3 }}></div>
  );
};

const SnakeGame: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [showCongrats, setShowCongrats] = useState<boolean>(false);
  const [showGameOver, setShowGameOver] = useState<boolean>(false);
  const [food, setFood] = useState<Position>({ x: 10, y: 5 });
  const [snake, setSnake] = useState<Position[]>([
    { x: 10, y: 12 },
    { x: 10, y: 13 },
    { x: 10, y: 14 },
    { x: 10, y: 15 },
    { x: 10, y: 16 },
    { x: 10, y: 17 },
    { x: 10, y: 18 },
    { x: 11, y: 18 },
    { x: 12, y: 18 },
    { x: 13, y: 18 },
    { x: 14, y: 18 },
    { x: 15, y: 18 },
    { x: 15, y: 19 },
    { x: 15, y: 20 },
    { x: 15, y: 21 },
    { x: 15, y: 22 },
    { x: 15, y: 23 },
    { x: 15, y: 24 },
  ]);
  
  // Use a ref for direction to avoid race conditions
  const [direction, setDirection] = useState<string>("up");
  const directionRef = useRef<string>("up");
  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Grid dimensions
  const GRID_WIDTH = 24;
  const GRID_HEIGHT = 40;

  const startGame = (): void => {
    setGameStarted(true);
    setGameOver(false);
    setShowGameOver(false);
    setShowCongrats(false);
    if (gameIntervalRef.current) {
      clearInterval(gameIntervalRef.current);
    }
    gameIntervalRef.current = setInterval(moveSnake, 50);
  };

  const generateNewFood = (): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_WIDTH),
        y: Math.floor(Math.random() * GRID_HEIGHT)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  };

  const startAgain = (): void => {
    setGameStarted(false);
    setGameOver(false);
    setShowGameOver(false);
    setShowCongrats(false);
    setScore(0);
    setFood({ x: 10, y: 5 });
    setSnake([
      { x: 10, y: 12 },
      { x: 10, y: 13 },
      { x: 10, y: 14 },
      { x: 10, y: 15 },
      { x: 10, y: 16 },
      { x: 10, y: 17 },
      { x: 10, y: 18 },
      { x: 11, y: 18 },
      { x: 12, y: 18 },
      { x: 13, y: 18 },
      { x: 14, y: 18 },
      { x: 15, y: 18 },
      { x: 15, y: 19 },
      { x: 15, y: 20 },
      { x: 15, y: 21 },
      { x: 15, y: 22 },
      { x: 15, y: 23 },
      { x: 15, y: 24 },
    ]);
    setDirection("up");
    directionRef.current = "up";

    if (gameIntervalRef.current) {
      clearInterval(gameIntervalRef.current);
      gameIntervalRef.current = null;
    }
  };

  const moveSnake = (): void => {
    setSnake(prevSnake => {
      let newX = prevSnake[0].x;
      let newY = prevSnake[0].y;

      // Use the ref for direction to ensure we're using the most current value
      const currentDirection = directionRef.current;

      switch (currentDirection) {
        case "up":
          newY--;
          break;
        case "down":
          newY++;
          break;
        case "left":
          newX--;
          break;
        case "right":
          newX++;
          break;
        default:
          break;
      }

      // Check if snake hits a wall or itself
      if (
        newX < 0 ||
        newX >= GRID_WIDTH ||
        newY < 0 ||
        newY >= GRID_HEIGHT ||
        prevSnake.some(segment => segment.x === newX && segment.y === newY)
      ) {
        if (gameIntervalRef.current) {
          clearInterval(gameIntervalRef.current);
          gameIntervalRef.current = null;
        }
        setGameStarted(false);
        setGameOver(true);
        setShowGameOver(true);
        return prevSnake; // Return unchanged snake
      }

      const newSnake = [{ x: newX, y: newY }, ...prevSnake];
      
      // Check if snake eats food
      if (newX === food.x && newY === food.y) {
        const newScore = score + 1;
        setScore(newScore);
        
        if (newScore === 10) {
          if (gameIntervalRef.current) {
            clearInterval(gameIntervalRef.current);
            gameIntervalRef.current = null;
          }
          setGameStarted(false);
          setGameOver(true);
          setShowCongrats(true);
          return newSnake; // Return the new snake with food eaten but no tail removal
        } else {
          // Generate new food
          setFood(generateNewFood());
          return newSnake; // Return the new snake with food eaten but no tail removal
        }
      } else {
        // Remove the last segment of the snake
        newSnake.pop();
        return newSnake;
      }
    });
  };

  const move = (moveDirection: string): void => {
    if (!gameStarted) return;
    
    // Fix for direction changes - use the current ref value to check against
    // This ensures we don't check against a potentially stale state value
    const currentDirection = directionRef.current;

    switch (moveDirection) {
      case "up":
        if (currentDirection !== "down") {
          setDirection("up");
          directionRef.current = "up";
        }
        break;
      case "down":
        if (currentDirection !== "up") {
          setDirection("down");
          directionRef.current = "down";
        }
        break;
      case "left":
        if (currentDirection !== "right") {
          setDirection("left");
          directionRef.current = "left";
        }
        break;
      case "right":
        if (currentDirection !== "left") {
          setDirection("right");
          directionRef.current = "right";
        }
        break;
      default:
        break;
    }
  };

  // Handle keyboard events
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent): void => {
      // Prevent default to stop page scrolling with arrow keys
      event.preventDefault();
      
      if (gameStarted) {
        // Use key instead of keyCode for better browser support
        switch (event.key) {
          case "ArrowLeft":
          case "a":
          case "A":
            move("left");
            break;
          case "ArrowUp":
          case "w":
          case "W":
            move("up");
            break;
          case "ArrowRight":
          case "d":
          case "D":
            move("right");
            break;
          case "ArrowDown":
          case "s":
          case "S":
            move("down");
            break;
        }
      } else {
        if (event.key === " " || event.key === "Enter") { // Space or Enter key
          if (gameOver) {
            startAgain();
          } else {
            startGame();
          }
        }
      }
    };

    // Prevent default behavior for arrow keys to avoid scrolling
    const preventDefaultHandler = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keydown", preventDefaultHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keydown", preventDefaultHandler);
    };
  }, [gameStarted, gameOver]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (gameIntervalRef.current) {
        clearInterval(gameIntervalRef.current);
      }
    };
  }, []);

  // Create grid cells
  const renderGrid = (): JSX.Element[] => {
    const cells: JSX.Element[] = [];
    
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        const position = { x, y };
        const isFood = x === food.x && y === food.y;
        const snakeIndex = snake.findIndex(segment => segment.x === x && segment.y === y);
        const isSnake = snakeIndex !== -1;
        const isHead = snakeIndex === 0;
        const snakeOpacity = isSnake ? 1 - (snakeIndex / snake.length) : 0;
        
        cells.push(
          <Cell
            key={`${x}-${y}`}
            position={position}
            isFood={isFood}
            isSnake={isSnake}
            isHead={isHead}
            snakeOpacity={snakeOpacity}
            direction={direction}
          />
        );
      }
    }
    
    return cells;
  };

  return (
    <div id="console" className="w-[530px] h-[475px] border border-black flex items-center justify-between bg-gradient-to-b from-[rgba(35,123,109,1)] to-[rgba(67,217,173,0.13)] rounded-[10px] p-[30px] relative">
      {/* bolts */}
      <img id="corner" src="/images/console/bolt-up-left.svg" alt="" className="absolute top-2 left-2 opacity-70" />
      <img id="corner" src="/images/console/bolt-up-right.svg" alt="" className="absolute top-2 right-2 opacity-70" />
      <img id="corner" src="/images/console/bolt-down-left.svg" alt="" className="absolute bottom-2 left-2 opacity-70" />
      <img id="corner" src="/images/console/bolt-down-right.svg" alt="" className="absolute bottom-2 right-2 opacity-70" />

      {/* Game Screen */}
      <div id="game-screen" className="w-[240px] h-[400px] rounded-[10px] bg-[rgba(1,22,39,0.84)] flex flex-wrap shadow-[inset_0_0_10px_#00000071]">
        {renderGrid()}
      </div>

      {!gameStarted && !gameOver && (
        <button 
          id="start-button" 
          className="font-fira_retina px-4 py-2 rounded-[10px] border border-black bg-[#FEA55F] absolute bottom-[20%] left-[17%] text-sm leading-5 hover:bg-[rgb(255,178,119)] cursor-pointer"
          onClick={startGame}
        >
          start-game
        </button>
      )}

      {/* Game Over */}
      {showGameOver && (
        <div id="game-over" className="absolute bottom-[12%] text-[#43D9AD] w-[240px]">
          <span className="font-fira_retina bg-bluefy-dark h-12 flex items-center justify-center text-2xl">GAME OVER!</span>
          <button 
            className="font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white" 
            onClick={startAgain}
          >
            start-again
          </button>
        </div>
      )}

      {/* Congratulations */}
      {showCongrats && (
        <div id="congrats" className="absolute bottom-[12%] text-[#43D9AD] w-[240px]">
          <span className="font-fira_retina bg-bluefy-dark h-12 flex items-center justify-center text-2xl">WELL DONE!</span>
          <button 
            className="font-fira_retina text-menu-text text-sm flex items-center justify-center w-full py-6 hover:text-white" 
            onClick={startAgain}
          >
            play-again
          </button>
        </div>
      )}

      <div id="console-menu" className="h-full flex flex-col items-end justify-between">
        <div>
          <div id="instructions" className="font-fira_retina text-sm text-white bg-[rgba(1,20,35,0.19)] rounded-[7px] p-[10px]">
            <p>&#x2F;&#x2F; use your keyboard</p>
            <p>&#x2F;&#x2F; arrows to play</p>

            <div id="buttons" className="w-full flex flex-col items-center gap-1 pt-5">
              <button 
                type="button"
                className="bg-[#010C15] rounded-[10px] flex justify-center items-center w-[50px] h-[30px] hover:bg-[#010c15d8] hover:shadow-[0_0_10px_#43D9AD]" 
                onClick={() => move('up')}
              >
                <img src="/images/console/arrow-button.svg" alt="move up" />
              </button>

              <div className="grid grid-cols-3 gap-1">
                <button 
                  type="button"
                  className="bg-[#010C15] rounded-[10px] flex justify-center items-center w-[50px] h-[30px] hover:bg-[#010c15d8] hover:shadow-[0_0_10px_#43D9AD]" 
                  onClick={() => move('left')}
                >
                  <img src="/images/console/arrow-button.svg" alt="move left" className="-rotate-90" />
                </button>

                <button 
                  type="button"
                  className="bg-[#010C15] rounded-[10px] flex justify-center items-center w-[50px] h-[30px] hover:bg-[#010c15d8] hover:shadow-[0_0_10px_#43D9AD]" 
                  onClick={() => move('down')}
                >
                  <img src="/images/console/arrow-button.svg" alt="move down" className="rotate-180" />
                </button>

                <button 
                  type="button"
                  className="bg-[#010C15] rounded-[10px] flex justify-center items-center w-[50px] h-[30px] hover:bg-[#010c15d8] hover:shadow-[0_0_10px_#43D9AD]" 
                  onClick={() => move('right')}
                >
                  <img src="/images/console/arrow-button.svg" alt="move right" className="rotate-90" />
                </button>
              </div>
            </div>
          </div>

          {/* score board */}
          <div id="score-board" className="w-full flex flex-col pl-5">
            <p className="font-fira_retina text-white pt-5">&#x2F;&#x2F; food left</p>

            <div id="score" className="grid grid-cols-5 gap-5 justify-items-center pt-5 w-fit">
              {[...Array(10)].map((_, i) => (
                <FoodIndicator key={i} active={score > i} />
              ))}
            </div>
          </div>
        </div>
        
        {/* skip */}
        <a id="skip-btn" href="/about-me" className="font-fira_retina flex hover:bg-white/20 text-white px-4 py-2 border-2 border-white rounded-lg text-sm">
          skip
        </a>
      </div>
    </div>
  );
};

export default SnakeGame;