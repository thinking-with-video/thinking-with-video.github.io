// Video Generation Models Scores (Test)
var video_gen_scores_test = {
  "1": {
    "Model": "Sora 2",
    "Average": 35.0,
    "Eyeballing Point": 45,
    "Eyeballing Line": 38,
    "Eyeballing Shape": 35,
    "Visual Symmetry": 82,
    "Visual Gradient": 52,
    "Visual Compositionality": 58,
    "ARC-AGI-2": 1.3,
    "Maze Square": 40.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  }
};

// Image Generation Models Scores (Test)
var image_gen_scores_test = {
};

// Vision-Language Models Scores (Test)
var vision_lang_scores_test = {
  "1": {
    "Model": "Claude Sonnet 4.5",
    "Average": 35.0,
    "Eyeballing Point": 36,
    "Eyeballing Line": 26,
    "Eyeballing Shape": 51,
    "Visual Symmetry": 80,
    "Visual Gradient": 70,
    "Visual Compositionality": 82,
    "ARC-AGI-2": 5.3,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "2": {
    "Model": "GPT-5 high",
    "Average": 34.1,
    "Eyeballing Point": 34,
    "Eyeballing Line": 24,
    "Eyeballing Shape": 33,
    "Visual Symmetry": 99,
    "Visual Gradient": 67,
    "Visual Compositionality": 85,
    "ARC-AGI-2": 0.5,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  },
  "3": {
    "Model": "Gemini 2.5 Pro",
    "Average": 33.1,
    "Eyeballing Point": 28,
    "Eyeballing Line": 21,
    "Eyeballing Shape": 35,
    "Visual Symmetry": 95,
    "Visual Gradient": 84,
    "Visual Compositionality": 67,
    "ARC-AGI-2": 1.9,
    "Maze Square": 0.0,
    "Maze Hexagon": 0.0,
    "Maze Labyrinth": 0.0
  }
};

// Text-Centric Scores (Test, full set)
var text_centric_scores_test = {
  "1": {
    "Model": "GPT-5 high",
    "ModelType": "VLM📃",
    "Average": 85.8,
    "GSM8K": 100.0,
    "MATH-500": 99.0,
    "AIME24": 95.0,
    "AIME25": 94.6,
    "BBH": 94.6,
    "MMLU": 86.0,
    "MMLU-Pro": 91.4,
    "GPQA": 85.7,
    "SuperGPQA": 68.3,
    "MathVista": 67.5,
    "MathVision": 71.6,
    "MMBench": 84.2,
    "MMMU": 77.0
  },
  "2": {
    "Model": "Gemini 2.5 Pro",
    "ModelType": "VLM📃",
    "Average": 84.7,
    "GSM8K": 98.9,
    "MATH-500": 99.0,
    "AIME24": 93.3,
    "AIME25": 88.0,
    "BBH": 90.0,
    "MMLU": 87.7,
    "MMLU-Pro": 87.1,
    "GPQA": 86.4,
    "SuperGPQA": 71.1,
    "MathVista": 70.0,
    "MathVision": 63.3,
    "MMBench": 86.9,
    "MMMU": 79.0
  },
  "3": {
    "Model": "Claude Sonnet 4.5",
    "ModelType": "VLM📃",
    "Average": 83.7,
    "GSM8K": 100.0,
    "MATH-500": 98.0,
    "AIME24": 75.0,
    "AIME25": 87.0,
    "BBH": 93.8,
    "MMLU": 89.5,
    "MMLU-Pro": 95.7,
    "GPQA": 83.4,
    "SuperGPQA": 69.0,
    "MathVista": 72.5,
    "MathVision": 58.7,
    "MMBench": 82.5,
    "MMMU": 82.0
  },
  "4": {
    "Model": "Sora 2 (Audio)",
    "ModelType": "Video🎞️",
    "Average": 67.8,
    "GSM8K": 98.9,
    "MATH-500": 92.0,
    "AIME24": 46.7,
    "AIME25": 36.7,
    "BBH": 80.6,
    "MMLU": 67.3,
    "MMLU-Pro": 76.5,
    "GPQA": 57.6,
    "SuperGPQA": 44.5,
    "MathVista": 75.7,
    "MathVision": 46.7,
    "MMBench": 89.0,
    "MMMU": 69.2
  },
  "5": {
    "Model": "Sora 2 (Last Frame)",
    "ModelType": "Video🎞️",
    "Average": 57.0,
    "GSM8K": 75.7,
    "MATH-500": 67.0,
    "AIME24": 38.3,
    "AIME25": 33.3,
    "BBH": 69.8,
    "MMLU": 69.1,
    "MMLU-Pro": 72.0,
    "GPQA": 51.5,
    "SuperGPQA": 53.2,
    "MathVista": 67.6,
    "MathVision": 44.9,
    "MMBench": 60.4,
    "MMMU": 38.3
  }
};

