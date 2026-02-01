// Video Generation Models Scores
var video_gen_scores_minitest = {
  "1": {
    "Model": "Sora 2",
    "Average": 31.6,
    "Eyeballing Point": 50,
    "Eyeballing Line": 35,
    "Eyeballing Shape": 25,
    "Visual Symmetry": 80,
    "Visual Gradient": 35,
    "Visual Compositionality": 53,
    "ARC-AGI-2": 2.8,
    "Maze Square": 35.3,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "2": {
    "Model": "Veo 3.1",
    "Average": 27.7,
    "Eyeballing Point": 34,
    "Eyeballing Line": 24,
    "Eyeballing Shape": 30,
    "Visual Symmetry": 78,
    "Visual Gradient": 40,
    "Visual Compositionality": 70,
    "ARC-AGI-2": 0.7,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "3": {
    "Model": "MiniMax Hailuo 2.3",
    "Average": 26.0,
    "Eyeballing Point": 37,
    "Eyeballing Line": 34,
    "Eyeballing Shape": 28,
    "Visual Symmetry": 73,
    "Visual Gradient": 45,
    "Visual Compositionality": 43,
    "ARC-AGI-2": 0.0,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "4": {
    "Model": "doubao-seedance-1-0-pro-250528",
    "Average": 12.4,
    "Eyeballing Point": 22,
    "Eyeballing Line": 24,
    "Eyeballing Shape": 35,
    "Visual Symmetry": 25,
    "Visual Gradient": 10,
    "Visual Compositionality": 8,
    "ARC-AGI-2": 0.0,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "5": {
    "Model": "Wan2.2-TI2V-5B",
    "Average": 7.5,
    "Eyeballing Point": 18,
    "Eyeballing Line": 10,
    "Eyeballing Shape": 20,
    "Visual Symmetry": 8,
    "Visual Gradient": 10,
    "Visual Compositionality": 8,
    "ARC-AGI-2": 0.7,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  }
};

// Image Generation Models Scores
var image_gen_scores_minitest = {
  "1": {
    "Model": "Nano Banana 2",
    // "Model": "Gemini 3 Pro Image (Nano Banana 2)",
    "Average": 29.8,
    "Eyeballing Point": 24,
    "Eyeballing Line": 30,
    "Eyeballing Shape": 35,
    "Visual Symmetry": 85,
    "Visual Gradient": 50,
    "Visual Compositionality": 73,
    "ARC-AGI-2": 0.71,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "2": {
    "Model": "Seedream 4.5",
    "Average": 24.5,
    "Eyeballing Point": 26,
    "Eyeballing Line": 16,
    "Eyeballing Shape": 30,
    "Visual Symmetry": 75,
    "Visual Gradient": 35,
    "Visual Compositionality": 63,
    "ARC-AGI-2": 0.0,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "3": {
    "Model": "GPT-Image 1.5",
    "Average": 19.3,
    "Eyeballing Point": 24,
    "Eyeballing Line": 15,
    "Eyeballing Shape": 18,
    "Visual Symmetry": 38,
    "Visual Gradient": 50,
    "Visual Compositionality": 48,
    "ARC-AGI-2": 0.0,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  }
};

// Vision-Language Models Scores
var vision_lang_scores_minitest = {
  "1": {
    "Model": "Claude Sonnet 4.5",
    "Average": 37.3,
    "Eyeballing Point": 40,
    "Eyeballing Line": 34,
    "Eyeballing Shape": 60,
    "Visual Symmetry": 75,
    "Visual Gradient": 75,
    "Visual Compositionality": 83,
    "ARC-AGI-2": 5.7,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "2": {
    "Model": "Gemini 2.5 Pro",
    "Average": 35.6,
    "Eyeballing Point": 33,
    "Eyeballing Line": 23,
    "Eyeballing Shape": 40,
    "Visual Symmetry": 95,
    "Visual Gradient": 95,
    "Visual Compositionality": 68,
    "ARC-AGI-2": 2.1,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "3": {
    "Model": "GPT5 high",
    "Average": 35.5,
    "Eyeballing Point": 39,
    "Eyeballing Line": 30,
    "Eyeballing Shape": 23,
    "Visual Symmetry": 98,
    "Visual Gradient": 80,
    "Visual Compositionality": 85,
    "ARC-AGI-2": 0.0,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "4": {
    "Model": "Qwen3-VL-235B-A22B",
    "Average": 30.2,
    "Eyeballing Point": 24,
    "Eyeballing Line": 17,
    "Eyeballing Shape": 30,
    "Visual Symmetry": 93,
    "Visual Gradient": 55,
    "Visual Compositionality": 83,
    "ARC-AGI-2": 0.0,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "5": {
    "Model": "Qwen3-VL-32B",
    "Average": 29.6,
    "Eyeballing Point": 33,
    "Eyeballing Line": 21,
    "Eyeballing Shape": 20,
    "Visual Symmetry": 85,
    "Visual Gradient": 55,
    "Visual Compositionality": 78,
    "ARC-AGI-2": 4.1,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "6": {
    "Model": "Qwen3-VL-Plus",
    "Average": 29.4,
    "Eyeballing Point": 32,
    "Eyeballing Line": 29,
    "Eyeballing Shape": 30,
    "Visual Symmetry": 90,
    "Visual Gradient": 35,
    "Visual Compositionality": 78,
    "ARC-AGI-2": 0.0,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  }
};
