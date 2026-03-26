// Configuration for MINITEST: Set to true to merge tables, false to show separately
var MERGE_LEADERBOARD_TABLES_MINITEST = false;

// Configuration for MINITEST: Set to true to highlight top 3 models with medals and red text
var HIGHLIGHT_TOP_MODELS_MINITEST = true;

// Configuration for TEST: Set to true to merge tables, false to show separately
var MERGE_LEADERBOARD_TABLES_TEST = true;

// Configuration for TEST: Set to true to highlight top 3 models with medals and red text
var HIGHLIGHT_TOP_MODELS_TEST = false;

function formatScoreOneDecimal(value) {
  return Number(value).toFixed(1);
}

var TEXT_CENTRIC_SUBSETS_MINITEST = [
  'GSM8K',
  'MATH-500',
  'AIME24',
  'AIME25',
  'BBH',
  'MMLU',
  'MMLU-Pro',
  'GPQA',
  'SuperGPQA',
  'MathVista',
  'MathVision',
  'MMBench',
  'MMMU'
];

// ==================== MINITEST LEADERBOARD ====================

// Generate merged leaderboard table (minitest)
function generateMergedTable() {
  // Merge both data sources
  var mergedData = [];
  
  // Add video generation models
  var videoKeys = Object.keys(video_gen_scores_minitest);
  for (var i = 0; i < videoKeys.length; i++) {
    var entry = Object.assign({}, video_gen_scores_minitest[videoKeys[i]]);
    entry.ModelType = 'Video🎞️';
    mergedData.push(entry);
  }
  
  // Add image generation models
  var imageKeys = Object.keys(image_gen_scores_minitest);
  for (var i = 0; i < imageKeys.length; i++) {
    var entry = Object.assign({}, image_gen_scores_minitest[imageKeys[i]]);
    entry.ModelType = 'Image🖼️';
    mergedData.push(entry);
  }
  
  // Add vision-language models
  var visionKeys = Object.keys(vision_lang_scores_minitest);
  for (var i = 0; i < visionKeys.length; i++) {
    var entry = Object.assign({}, vision_lang_scores_minitest[visionKeys[i]]);
    entry.ModelType = 'VLM📃';
    mergedData.push(entry);
  }
  
  // Sort by Average score (descending)
  mergedData.sort(function(a, b) {
    return b.Average - a.Average;
  });
  
  // Generate table
  var table = '<table class="js-sort-table" id="merged-results">';
  
  // Table header
  table += `<thead><tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort"><strong>Model Type</strong></td>
          <td class="js-sort-number"><strong><u>Average</u></strong></td>
          <td class="js-sort-number"><strong>Eyeballing Point</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Line</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Shape</strong></td>
          <td class="js-sort-number"><strong>Visual Symmetry</strong></td>
          <td class="js-sort-number"><strong>Visual Gradient</strong></td>
          <td class="js-sort-number"><strong>Visual Compositionality</strong></td>
          <td class="js-sort-number"><strong>ARC&nbsp;AGI&nbsp;2</strong></td>
      </tr></thead><tbody>`;
  
  // Generate rows
  for (var i = 0; i < mergedData.length; i++) {
    var entry = mergedData[i];
    var rank = i + 1;
    
    // Add medal emoji if HIGHLIGHT_TOP_MODELS_MINITEST is enabled
    var modelName = entry.Model;
    if (HIGHLIGHT_TOP_MODELS_MINITEST && rank <= 3) {
      var medals = ['🥇', '🥈', '🥉'];
      modelName = entry.Model + medals[rank - 1];
    }
    
    table += '<tr>';
    table += `<td>${rank}</td>`;
    
    // Highlight top 3 with red text if HIGHLIGHT_TOP_MODELS_MINITEST is enabled
    if (HIGHLIGHT_TOP_MODELS_MINITEST && rank <= 3) {
      table += `<td><b class="best-score-text">${modelName}</b></td>`;
      table += `<td>${entry.ModelType}</td>`;
      table += `<td><b class="best-score-text">${formatScoreOneDecimal(entry.Average)}</b></td>`;
    } else {
      table += `<td><b>${modelName}</b></td>`;
      table += `<td>${entry.ModelType}</td>`;
      table += `<td><b>${formatScoreOneDecimal(entry.Average)}</b></td>`;
    }
    
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Point"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Line"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Shape"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Symmetry"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Gradient"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Compositionality"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["ARC-AGI-2"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Square"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Hexagon"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Labyrinth"])}</td>`;
    table += '</tr>';
  }
  
  table += '</tbody></table>';
  document.getElementById('merged-leaderboard').innerHTML = table;
}

// Generate Video Generation Models Table (minitest)
function generateVideoGenTable() {
  var data = video_gen_scores_minitest;
  var table = '<table class="js-sort-table" id="video-gen-results">';
  
  // Table header
  table += `<thead><tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort-number"><strong><u>Average</u></strong></td>
          <td class="js-sort-number"><strong>Eyeballing Point</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Line</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Shape</strong></td>
          <td class="js-sort-number"><strong>Visual Symmetry</strong></td>
          <td class="js-sort-number"><strong>Visual Gradient</strong></td>
          <td class="js-sort-number"><strong>Visual Compositionality</strong></td>
          <td class="js-sort-number"><strong>ARC&nbsp;AGI&nbsp;2</strong></td>
          <td class="js-sort-number"><strong>Maze Square</strong></td>
          <td class="js-sort-number"><strong>Maze Hexagon</strong></td>
          <td class="js-sort-number"><strong>Maze Labyrinth</strong></td>
      </tr></thead><tbody>`;

  var keys = Object.keys(data);
  var topRanks = ["1", "2", "3"];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var entry = data[key];
    
    // Add medal emoji if HIGHLIGHT_TOP_MODELS_MINITEST is enabled
    var modelName = entry.Model;
    if (HIGHLIGHT_TOP_MODELS_MINITEST && topRanks.includes(key)) {
      var medals = {'1': '🥇', '2': '🥈', '3': '🥉'};
      modelName = entry.Model + medals[key];
    }
    
    table += '<tr>';
    table += `<td>${key}</td>`;
    
    // Highlight top 3 with red text if HIGHLIGHT_TOP_MODELS_MINITEST is enabled
    if (HIGHLIGHT_TOP_MODELS_MINITEST && topRanks.includes(key)) {
      table += `<td><b class="best-score-text">${modelName}</b></td>`;
      table += `<td><b class="best-score-text">${formatScoreOneDecimal(entry.Average)}</b></td>`;
    } else {
      table += `<td><b>${modelName}</b></td>`;
      table += `<td><b>${formatScoreOneDecimal(entry.Average)}</b></td>`;
    }
    
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Point"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Line"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Shape"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Symmetry"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Gradient"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Compositionality"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["ARC-AGI-2"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Square"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Hexagon"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Labyrinth"])}</td>`;
    table += '</tr>';
  }
  
  table += '</tbody></table>';
  document.getElementById('video-gen-leaderboard').innerHTML = table;
}

// Generate Image Generation Models Table (minitest)// Generate Image Generation Models Table (minitest)
function generateImageGenTable() {
  var data = image_gen_scores_minitest;
  var table = '<table class="js-sort-table" id="image-gen-results">';
  
  // Table header
  table += `<thead><tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort-number"><strong><u>Average</u></strong></td>
          <td class="js-sort-number"><strong>Eyeballing Point</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Line</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Shape</strong></td>
          <td class="js-sort-number"><strong>Visual Symmetry</strong></td>
          <td class="js-sort-number"><strong>Visual Gradient</strong></td>
          <td class="js-sort-number"><strong>Visual Compositionality</strong></td>
          <td class="js-sort-number"><strong>ARC&nbsp;AGI&nbsp;2</strong></td>
          <td class="js-sort-number"><strong>Maze Square</strong></td>
          <td class="js-sort-number"><strong>Maze Hexagon</strong></td>
          <td class="js-sort-number"><strong>Maze Labyrinth</strong></td>
      </tr></thead><tbody>`;

  var keys = Object.keys(data);
  var topRanks = ["1", "2", "3"];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var entry = data[key];
    
    // Add medal emoji if HIGHLIGHT_TOP_MODELS_MINITEST is enabled
    var modelName = entry.Model;
    if (HIGHLIGHT_TOP_MODELS_MINITEST && topRanks.includes(key)) {
      var medals = {'1': '🥇', '2': '🥈', '3': '🥉'};
      modelName = entry.Model + medals[key];
    }
    
    table += '<tr>';
    table += `<td>${key}</td>`;
    
    // Highlight top 3 with red text if HIGHLIGHT_TOP_MODELS_MINITEST is enabled
    if (HIGHLIGHT_TOP_MODELS_MINITEST && topRanks.includes(key)) {
      table += `<td><b class="best-score-text">${modelName}</b></td>`;
      table += `<td><b class="best-score-text">${formatScoreOneDecimal(entry.Average)}</b></td>`;
    } else {
      table += `<td><b>${modelName}</b></td>`;
      table += `<td><b>${formatScoreOneDecimal(entry.Average)}</b></td>`;
    }
    
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Point"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Line"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Shape"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Symmetry"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Gradient"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Compositionality"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["ARC-AGI-2"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Square"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Hexagon"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Labyrinth"])}</td>`;
    table += '</tr>';
  }
  
  table += '</tbody></table>';
  document.getElementById('image-gen-leaderboard').innerHTML = table;
}

// Generate Vision-Language Models Table (minitest)
function generateVisionLangTable() {
  var data = vision_lang_scores_minitest;
  var table = '<table class="js-sort-table" id="vision-lang-results">';
  
  // Table header
  table += `<thead><tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort-number"><strong><u>Average</u></strong></td>
          <td class="js-sort-number"><strong>Eyeballing Point</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Line</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Shape</strong></td>
          <td class="js-sort-number"><strong>Visual Symmetry</strong></td>
          <td class="js-sort-number"><strong>Visual Gradient</strong></td>
          <td class="js-sort-number"><strong>Visual Compositionality</strong></td>
          <td class="js-sort-number"><strong>ARC&nbsp;AGI&nbsp;2</strong></td>
          <td class="js-sort-number"><strong>Maze Square</strong></td>
          <td class="js-sort-number"><strong>Maze Hexagon</strong></td>
          <td class="js-sort-number"><strong>Maze Labyrinth</strong></td>
      </tr></thead><tbody>`;

  var keys = Object.keys(data);
  var topRanks = ["1", "2", "3"];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var entry = data[key];
    
    // Add medal emoji if HIGHLIGHT_TOP_MODELS_MINITEST is enabled
    var modelName = entry.Model;
    if (HIGHLIGHT_TOP_MODELS_MINITEST && topRanks.includes(key)) {
      var medals = {'1': '🥇', '2': '🥈', '3': '🥉'};
      modelName = entry.Model + medals[key];
    }
    
    table += '<tr>';
    table += `<td>${key}</td>`;
    
    // Highlight top 3 with red text if HIGHLIGHT_TOP_MODELS_MINITEST is enabled
    if (HIGHLIGHT_TOP_MODELS_MINITEST && topRanks.includes(key)) {
      table += `<td><b class="best-score-text">${modelName}</b></td>`;
      table += `<td><b class="best-score-text">${formatScoreOneDecimal(entry.Average)}</b></td>`;
    } else {
      table += `<td><b>${modelName}</b></td>`;
      table += `<td><b>${formatScoreOneDecimal(entry.Average)}</b></td>`;
    }
    
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Point"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Line"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Shape"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Symmetry"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Gradient"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Compositionality"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["ARC-AGI-2"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Square"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Hexagon"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Labyrinth"])}</td>`;
    table += '</tr>';
  }
  
  table += '</tbody></table>';
  document.getElementById('vision-lang-leaderboard').innerHTML = table;
}

function renderTextCentricTableMinitest(data, containerId, tableId) {
  var keys = Object.keys(data);
  if (!keys.length) {
    document.getElementById(containerId).innerHTML = '<p style="font-size: 1.6rem; margin: 0.6rem 0 1.6rem;">暂无。</p>';
    return;
  }

  var table = '<table class="js-sort-table" id="' + tableId + '">';
  table += '<thead><tr>';
  table += '<td class="js-sort-number"><strong>#</strong></td>';
  table += '<td class="js-sort"><strong>Model</strong></td>';
  table += '<td class="js-sort-number"><strong><u>Average</u></strong></td>';

  for (var i = 0; i < TEXT_CENTRIC_SUBSETS_MINITEST.length; i++) {
    table += '<td class="js-sort-number"><strong>' + TEXT_CENTRIC_SUBSETS_MINITEST[i] + '</strong></td>';
  }

  table += '</tr></thead><tbody>';

  var topRanks = ['1', '2', '3'];
  for (var j = 0; j < keys.length; j++) {
    var key = keys[j];
    var entry = data[key];
    var modelName = entry.Model;

    if (HIGHLIGHT_TOP_MODELS_MINITEST && topRanks.includes(key)) {
      var medals = { '1': '🥇', '2': '🥈', '3': '🥉' };
      modelName = entry.Model + medals[key];
    }

    table += '<tr>';
    table += '<td>' + key + '</td>';
    if (HIGHLIGHT_TOP_MODELS_MINITEST && topRanks.includes(key)) {
      table += '<td><b class="best-score-text">' + modelName + '</b></td>';
      table += '<td><b class="best-score-text">' + formatScoreOneDecimal(entry.Average) + '</b></td>';
    } else {
      table += '<td><b>' + modelName + '</b></td>';
      table += '<td><b>' + formatScoreOneDecimal(entry.Average) + '</b></td>';
    }

    for (var k = 0; k < TEXT_CENTRIC_SUBSETS_MINITEST.length; k++) {
      var subset = TEXT_CENTRIC_SUBSETS_MINITEST[k];
      table += '<td>' + formatScoreOneDecimal(entry[subset]) + '</td>';
    }

    table += '</tr>';
  }

  table += '</tbody></table>';
  document.getElementById(containerId).innerHTML = table;
}

function generateTextCentricMinitestTables() {
  renderTextCentricTableMinitest(
    video_gen_text_centric_scores_minitest,
    'video-gen-leaderboard-text-minitest',
    'video-gen-results-text-minitest'
  );
  renderTextCentricTableMinitest(
    image_gen_text_centric_scores_minitest,
    'image-gen-leaderboard-text-minitest',
    'image-gen-results-text-minitest'
  );
  renderTextCentricTableMinitest(
    vision_lang_text_centric_scores_minitest,
    'vision-lang-leaderboard-text-minitest',
    'vision-lang-results-text-minitest'
  );
}

// Call the functions when the window loads
window.addEventListener('DOMContentLoaded', function() {
  // Minitest tables
  if (MERGE_LEADERBOARD_TABLES_MINITEST) {
    // Merged table mode
    document.getElementById('merged-table-container').style.display = 'block';
    document.getElementById('separate-tables-container').style.display = 'none';
    document.getElementById('merged-note').style.display = 'block';
    document.getElementById('separate-note').style.display = 'none';
    generateMergedTable();
  } else {
    // Separate tables mode
    document.getElementById('merged-table-container').style.display = 'none';
    document.getElementById('separate-tables-container').style.display = 'block';
    document.getElementById('merged-note').style.display = 'none';
    document.getElementById('separate-note').style.display = 'block';
    generateVideoGenTable();
    generateImageGenTable();
    generateVisionLangTable();
  }

  generateTextCentricMinitestTables();
  
  // Test tables
  if (MERGE_LEADERBOARD_TABLES_TEST) {
    // Merged table mode
    document.getElementById('merged-table-container-test').style.display = 'block';
    document.getElementById('separate-tables-container-test').style.display = 'none';
    generateMergedTableTest();
  } else {
    // Separate tables mode
    document.getElementById('merged-table-container-test').style.display = 'none';
    document.getElementById('separate-tables-container-test').style.display = 'block';
    generateVideoGenTableTest();
    generateImageGenTableTest();
    generateVisionLangTableTest();
  }
});

// ==================== TEST LEADERBOARD ====================

// Generate merged leaderboard table (test)
function generateMergedTableTest() {
  // Merge both data sources
  var mergedData = [];
  
  // Add video generation models
  var videoKeys = Object.keys(video_gen_scores_test);
  for (var i = 0; i < videoKeys.length; i++) {
    var entry = Object.assign({}, video_gen_scores_test[videoKeys[i]]);
    entry.ModelType = 'Video🎞️';
    mergedData.push(entry);
  }
  
  // Add image generation models
  var imageKeys = Object.keys(image_gen_scores_test);
  for (var i = 0; i < imageKeys.length; i++) {
    var entry = Object.assign({}, image_gen_scores_test[imageKeys[i]]);
    entry.ModelType = 'Image🖼️';
    mergedData.push(entry);
  }
  
  // Add vision-language models
  var visionKeys = Object.keys(vision_lang_scores_test);
  for (var i = 0; i < visionKeys.length; i++) {
    var entry = Object.assign({}, vision_lang_scores_test[visionKeys[i]]);
    entry.ModelType = 'VLM📃';
    mergedData.push(entry);
  }
  
  // Sort by Average score (descending)
  mergedData.sort(function(a, b) {
    return b.Average - a.Average;
  });
  
  // Generate table
  var table = '<table class="js-sort-table" id="merged-results-test">';
  
  // Table header
  table += `<thead><tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort"><strong>Model Type</strong></td>
          <td class="js-sort-number"><strong><u>Average</u></strong></td>
          <td class="js-sort-number"><strong>Eyeballing Point</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Line</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Shape</strong></td>
          <td class="js-sort-number"><strong>Visual Symmetry</strong></td>
          <td class="js-sort-number"><strong>Visual Gradient</strong></td>
          <td class="js-sort-number"><strong>Visual Compositionality</strong></td>
          <td class="js-sort-number"><strong>ARC&nbsp;AGI&nbsp;2</strong></td>
          <td class="js-sort-number"><strong>Maze Square</strong></td>
          <td class="js-sort-number"><strong>Maze Hexagon</strong></td>
          <td class="js-sort-number"><strong>Maze Labyrinth</strong></td>
      </tr></thead><tbody>`;
  
  // Generate rows
  for (var i = 0; i < mergedData.length; i++) {
    var entry = mergedData[i];
    var rank = i + 1;
    
    // Add medal emoji if HIGHLIGHT_TOP_MODELS_TEST is enabled
    var modelName = entry.Model;
    if (HIGHLIGHT_TOP_MODELS_TEST && rank <= 3) {
      var medals = ['🥇', '🥈', '🥉'];
      modelName = entry.Model + medals[rank - 1];
    }
    
    table += '<tr>';
    table += `<td>${rank}</td>`;
    
    // Highlight top 3 with red text if HIGHLIGHT_TOP_MODELS_TEST is enabled
    if (HIGHLIGHT_TOP_MODELS_TEST && rank <= 3) {
      table += `<td><b class="best-score-text">${modelName}</b></td>`;
      table += `<td>${entry.ModelType}</td>`;
      table += `<td><b class="best-score-text">${formatScoreOneDecimal(entry.Average)}</b></td>`;
    } else {
      table += `<td><b>${modelName}</b></td>`;
      table += `<td>${entry.ModelType}</td>`;
      table += `<td><b>${formatScoreOneDecimal(entry.Average)}</b></td>`;
    }
    
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Point"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Line"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Shape"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Symmetry"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Gradient"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Compositionality"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["ARC-AGI-2"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Square"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Hexagon"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Labyrinth"])}</td>`;
    table += '</tr>';
  }
  
  table += '</tbody></table>';
  document.getElementById('merged-leaderboard-test').innerHTML = table;
}

// Generate Video Generation Models Table (test)
function generateVideoGenTableTest() {
  var data = video_gen_scores_test;
  var table = '<table class="js-sort-table" id="video-gen-results-test">';
  
  // Table header
  table += `<thead><tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort-number"><strong><u>Average</u></strong></td>
          <td class="js-sort-number"><strong>Eyeballing Point</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Line</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Shape</strong></td>
          <td class="js-sort-number"><strong>Visual Symmetry</strong></td>
          <td class="js-sort-number"><strong>Visual Gradient</strong></td>
          <td class="js-sort-number"><strong>Visual Compositionality</strong></td>
          <td class="js-sort-number"><strong>ARC&nbsp;AGI&nbsp;2</strong></td>
          <td class="js-sort-number"><strong>Maze Square</strong></td>
          <td class="js-sort-number"><strong>Maze Hexagon</strong></td>
          <td class="js-sort-number"><strong>Maze Labyrinth</strong></td>
      </tr></thead><tbody>`;

  var keys = Object.keys(data);
  var topRanks = ["1", "2", "3"];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var entry = data[key];
    
    // Add medal emoji if HIGHLIGHT_TOP_MODELS_TEST is enabled
    var modelName = entry.Model;
    if (HIGHLIGHT_TOP_MODELS_TEST && topRanks.includes(key)) {
      var medals = {'1': '🥇', '2': '🥈', '3': '🥉'};
      modelName = entry.Model + medals[key];
    }
    
    table += '<tr>';
    table += `<td>${key}</td>`;
    
    // Highlight top 3 with red text if HIGHLIGHT_TOP_MODELS_TEST is enabled
    if (HIGHLIGHT_TOP_MODELS_TEST && topRanks.includes(key)) {
      table += `<td><b class="best-score-text">${modelName}</b></td>`;
      table += `<td><b class="best-score-text">${formatScoreOneDecimal(entry.Average)}</b></td>`;
    } else {
      table += `<td><b>${modelName}</b></td>`;
      table += `<td><b>${formatScoreOneDecimal(entry.Average)}</b></td>`;
    }
    
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Point"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Line"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Shape"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Symmetry"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Gradient"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Compositionality"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["ARC-AGI-2"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Square"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Hexagon"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Labyrinth"])}</td>`;
    table += '</tr>';
  }
  
  table += '</tbody></table>';
  document.getElementById('video-gen-leaderboard-test').innerHTML = table;
}

// Generate Image Generation Models Table (test)
function generateImageGenTableTest() {
  var data = image_gen_scores_test;
  var table = '<table class="js-sort-table" id="image-gen-results-test">';
  
  // Table header
  table += `<thead><tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort-number"><strong><u>Average</u></strong></td>
          <td class="js-sort-number"><strong>Eyeballing Point</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Line</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Shape</strong></td>
          <td class="js-sort-number"><strong>Visual Symmetry</strong></td>
          <td class="js-sort-number"><strong>Visual Gradient</strong></td>
          <td class="js-sort-number"><strong>Visual Compositionality</strong></td>
          <td class="js-sort-number"><strong>ARC&nbsp;AGI&nbsp;2</strong></td>
          <td class="js-sort-number"><strong>Maze Square</strong></td>
          <td class="js-sort-number"><strong>Maze Hexagon</strong></td>
          <td class="js-sort-number"><strong>Maze Labyrinth</strong></td>
      </tr></thead><tbody>`;

  var keys = Object.keys(data);
  var topRanks = ["1", "2", "3"];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var entry = data[key];
    
    // Add medal emoji if HIGHLIGHT_TOP_MODELS_TEST is enabled
    var modelName = entry.Model;
    if (HIGHLIGHT_TOP_MODELS_TEST && topRanks.includes(key)) {
      var medals = {'1': '🥇', '2': '🥈', '3': '🥉'};
      modelName = entry.Model + medals[key];
    }
    
    table += '<tr>';
    table += `<td>${key}</td>`;
    
    // Highlight top 3 with red text if HIGHLIGHT_TOP_MODELS_TEST is enabled
    if (HIGHLIGHT_TOP_MODELS_TEST && topRanks.includes(key)) {
      table += `<td><b class="best-score-text">${modelName}</b></td>`;
      table += `<td><b class="best-score-text">${formatScoreOneDecimal(entry.Average)}</b></td>`;
    } else {
      table += `<td><b>${modelName}</b></td>`;
      table += `<td><b>${formatScoreOneDecimal(entry.Average)}</b></td>`;
    }
    
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Point"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Line"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Shape"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Symmetry"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Gradient"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Compositionality"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["ARC-AGI-2"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Square"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Hexagon"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Labyrinth"])}</td>`;
    table += '</tr>';
  }
  
  table += '</tbody></table>';
  document.getElementById('image-gen-leaderboard-test').innerHTML = table;
}

// Generate Vision-Language Models Table (test)
function generateVisionLangTableTest() {
  var data = vision_lang_scores_test;
  var table = '<table class="js-sort-table" id="vision-lang-results-test">';
  
  // Table header
  table += `<thead><tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort-number"><strong><u>Average</u></strong></td>
          <td class="js-sort-number"><strong>Eyeballing Point</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Line</strong></td>
          <td class="js-sort-number"><strong>Eyeballing Shape</strong></td>
          <td class="js-sort-number"><strong>Visual Symmetry</strong></td>
          <td class="js-sort-number"><strong>Visual Gradient</strong></td>
          <td class="js-sort-number"><strong>Visual Compositionality</strong></td>
          <td class="js-sort-number"><strong>ARC&nbsp;AGI&nbsp;2</strong></td>
          <td class="js-sort-number"><strong>Maze Square</strong></td>
          <td class="js-sort-number"><strong>Maze Hexagon</strong></td>
          <td class="js-sort-number"><strong>Maze Labyrinth</strong></td>
      </tr></thead><tbody>`;

  var keys = Object.keys(data);
  var topRanks = ["1", "2", "3"];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var entry = data[key];
    
    // Add medal emoji if HIGHLIGHT_TOP_MODELS_TEST is enabled
    var modelName = entry.Model;
    if (HIGHLIGHT_TOP_MODELS_TEST && topRanks.includes(key)) {
      var medals = {'1': '🥇', '2': '🥈', '3': '🥉'};
      modelName = entry.Model + medals[key];
    }
    
    table += '<tr>';
    table += `<td>${key}</td>`;
    
    // Highlight top 3 with red text if HIGHLIGHT_TOP_MODELS_TEST is enabled
    if (HIGHLIGHT_TOP_MODELS_TEST && topRanks.includes(key)) {
      table += `<td><b class="best-score-text">${modelName}</b></td>`;
      table += `<td><b class="best-score-text">${formatScoreOneDecimal(entry.Average)}</b></td>`;
    } else {
      table += `<td><b>${modelName}</b></td>`;
      table += `<td><b>${formatScoreOneDecimal(entry.Average)}</b></td>`;
    }
    
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Point"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Line"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Eyeballing Shape"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Symmetry"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Gradient"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Visual Compositionality"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["ARC-AGI-2"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Square"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Hexagon"])}</td>`;
    table += `<td>${formatScoreOneDecimal(entry["Maze Labyrinth"])}</td>`;
    table += '</tr>';
  }
  
  table += '</tbody></table>';
  document.getElementById('vision-lang-leaderboard-test').innerHTML = table;
}

