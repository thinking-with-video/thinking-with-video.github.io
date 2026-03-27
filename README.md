# sora-reasoner.github.io
sora-reasoner.github.io

### Leaderboard 

Vision-Language Models (VLM馃搩)

|  #   |       Model        | Average | Eyeballing Point | Eyeballing Line | Eyeballing Shape | Visual Symmetry | Visual Gradient | Visual Compositionality | ARC-AGI-2 |
| :--: | :----------------: | :-----: | :--------------: | :-------------: | :--------------: | :-------------: | :-------------: | :---------------------: | :-------: |
|  1   | Claude Sonnet 4.5  |   50    |        36        |       26        |        51        |       80        |       70        |           82            |    5.3    |
|  2   |     GPT-5 high      |  48.9   |        34        |       24        |        33        |       99        |       67        |           85            |    0.5    |
|  3   |   Gemini 2.5 Pro   |  47.4   |        28        |       21        |        35        |       95        |       84        |           67            |    1.9    |
|  4   | Qwen3-VL-235B-A22B |  43.1   |        24        |       17        |        30        |       93        |       55        |           83            |     0     |
|  5   |    Qwen3-VL-32B    |  42.3   |        33        |       21        |        20        |       85        |       55        |           78            |    4.1    |
|  6   |   Qwen3-VL-Plus    |   42    |        32        |       29        |        30        |       90        |       35        |           78            |     0     |

---

Video Generation Models (Video馃帪锔?

|  #   |             Model              | Average | Eyeballing Point | Eyeballing Line | Eyeballing Shape | Visual Symmetry | Visual Gradient | Visual Compositionality | ARC-AGI-2 |
| :--: | :----------------------------: | :-----: | :--------------: | :-------------: | :--------------: | :-------------: | :-------------: | :---------------------: | :-------: |
|  1   |             Sora 2             |  44.5   |        45        |       38        |        35        |       82        |       52        |           58            |    1.3    |
|  2   |            Veo 3.1             |  39.5   |        34        |       24        |        30        |       78        |       40        |           70            |   0.71    |
|  3   |       MiniMax Hailuo 2.3       |  37.1   |        37        |       34        |        28        |       73        |       45        |           43            |     0     |
|  4  | Seedance 1.0 Pro |  17.7   |        22        |       24        |        35        |       25        |       10        |            8            |     0     |
|  5  |         Wan2.2-TI2V-5B         |  10.7   |        18        |       10        |        20        |        8        |       10        |            8            |   0.71    |

---

|  #   |               Model                | Average | Eyeballing Point | Eyeballing Line | Eyeballing Shape | Visual Symmetry | Visual Gradient | Visual Compositionality | ARC-AGI-2 |
| :--: | :--------------------------------: | :-----: | :--------------: | :-------------: | :--------------: | :-------------: | :-------------: | :---------------------: | :-------: |
|  1   | Gemini 3 Pro Image (Nano Banana Pro) |  42.5   |        24        |       30        |        35        |       85        |       50        |           73            |   0.71    |
|  2   |            Seedream 4.5            |  35.0   |        26        |       16        |        30        |       75        |       35        |           63            |     0     |
|  3   |           GPT image 1.5            |  27.6   |        24        |       15        |        18        |       38        |       50        |           48            |     0     |

---

|  #   |             Model              | Model Type | Average | Eyeballing Point | Eyeballing Line | Eyeballing Shape | Visual Symmetry | Visual Gradient | Visual Compositionality | ARC-AGI-2 |
| :--: | :----------------------------: | :--------: | :-----: | :--------------: | :-------------: | :--------------: | :-------------: | :-------------: | :---------------------: | :-------: |
|  1   |       Claude Sonnet 4.5        |    VLM馃搩    |   50    |        36        |       26        |        51        |       80        |       70        |           82            |    5.3    |
|  2   |           GPT-5 high            |    VLM馃搩    |  48.9   |        34        |       24        |        33        |       99        |       67        |           85            |    0.5    |
|  3   |         Gemini 2.5 Pro         |    VLM馃搩    |  47.4   |        28        |       21        |        35        |       95        |       84        |           67            |    1.9    |
|  4   |             Sora 2             |   Video馃帪锔?  |  44.5   |        45        |       38        |        35        |       82        |       52        |           58            |    1.3    |
|  5   |       Qwen3-VL-235B-A22B       |    VLM馃搩    |  43.1   |        24        |       17        |        30        |       93        |       55        |           83            |     0     |
|  6   |          Qwen3-VL-32B          |    VLM馃搩    |  42.3   |        33        |       21        |        20        |       85        |       55        |           78            |    4.1    |
|  7   |         Qwen3-VL-Plus          |    VLM馃搩    |   42    |        32        |       29        |        30        |       90        |       35        |           78            |     0     |
|  8   |            Veo 3.1             |   Video馃帪锔?  |  39.5   |        34        |       24        |        30        |       78        |       40        |           70            |   0.71    |
|  9   |       MiniMax Hailuo 2.3       |   Video馃帪锔?  |  37.1   |        37        |       34        |        28        |       73        |       45        |           43            |     0     |
|  10  | Seedance 1.0 Pro |   Video馃帪锔?  |  17.7   |        22        |       24        |        35        |       25        |       10        |            8            |     0     |
|  11  |         Wan2.2-TI2V-5B         |   Video馃帪锔?  |  10.7   |        18        |       10        |        20        |        8        |       10        |            8            |   0.71    |

**Notes:**

* **Model Type**
  * **Video馃帪锔?** Video Generation Model
  * **Image馃柤锔忥細**Image Generation Model
  * **VLM馃搩:** Vision-Language Model
* **Eyeballing Puzzles**
  * **Eyeballing Point/Line/Shape in the table.** They refer to the Point Tasks, Line Tasks and Shape Tasks in Eyeballing Puzzles.
  * The results are Major Frame evaluation results.
* **Visual Puzzles**
  * **Visual Symmetry/Gradient/Compositionality in the table.** They refer to the Symmetry Tasks, Gradient Tasks and Compositionality Tasks in Visual Puzzles.





|  #   |       Model       | Model Type | Average | Eyeballing Point | Eyeballing Line | Eyeballing Shape | Visual Symmetry | Visual Gradient | Visual Compositionality | ARC-AGI-2 |
| :--: | :---------------: | :--------: | :-----: | :--------------: | :-------------: | :--------------: | :-------------: | :-------------: | :---------------------: | :-------: |
|  1   | Claude Sonnet 4.5 |    VLM馃搩    |   50    |        36        |       26        |        51        |       80        |       70        |           82            |    5.3    |
|  2   |     GPT-5 high     |    VLM馃搩    |  48.9   |        34        |       24        |        33        |       99        |       67        |           85            |    0.5    |
|  3   |  Gemini 2.5 Pro   |    VLM馃搩    |  47.4   |        28        |       21        |        35        |       95        |       84        |           67            |    1.9    |
|  4   |      Sora 2       |   Video馃帪锔?  |  44.5   |        45        |       38        |        35        |       82        |       52        |           58            |    1.3    |

