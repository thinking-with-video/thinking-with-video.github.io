// Generate Video Generation Models Table
function generateVideoGenTable() {
  var data = video_gen_scores;
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
      </tr></thead><tbody>`;

  var keys = Object.keys(data);
  var topRanks = ["1", "2", "3"];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var entry = data[key];
    
    table += '<tr>';
    table += `<td>${key}</td>`;
    
    if (topRanks.includes(key)) {
      table += `<td><b class="best-score-text">${entry.Model}</b></td>`;
      table += `<td><b class="best-score-text">${entry.Average.toFixed(1)}</b></td>`;
    } else {
      table += `<td><b>${entry.Model}</b></td>`;
      table += `<td><b>${entry.Average.toFixed(1)}</b></td>`;
    }
    
    table += `<td>${entry["Eyeballing Point"]}</td>`;
    table += `<td>${entry["Eyeballing Line"]}</td>`;
    table += `<td>${entry["Eyeballing Shape"]}</td>`;
    table += `<td>${entry["Visual Symmetry"]}</td>`;
    table += `<td>${entry["Visual Gradient"]}</td>`;
    table += `<td>${entry["Visual Compositionality"]}</td>`;
    table += `<td>${entry["ARC-AGI-2"].toFixed(1)}</td>`;
    table += '</tr>';
  }
  
  table += '</tbody></table>';
  document.getElementById('video-gen-leaderboard').innerHTML = table;
}

// Generate Vision-Language Models Table
function generateVisionLangTable() {
  var data = vision_lang_scores;
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
      </tr></thead><tbody>`;

  var keys = Object.keys(data);
  var topRanks = ["1", "2", "3"];

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var entry = data[key];
    
    table += '<tr>';
    table += `<td>${key}</td>`;
    
    if (topRanks.includes(key)) {
      table += `<td><b class="best-score-text">${entry.Model}</b></td>`;
      table += `<td><b class="best-score-text">${entry.Average.toFixed(1)}</b></td>`;
    } else {
      table += `<td><b>${entry.Model}</b></td>`;
      table += `<td><b>${entry.Average.toFixed(1)}</b></td>`;
    }
    
    table += `<td>${entry["Eyeballing Point"]}</td>`;
    table += `<td>${entry["Eyeballing Line"]}</td>`;
    table += `<td>${entry["Eyeballing Shape"]}</td>`;
    table += `<td>${entry["Visual Symmetry"]}</td>`;
    table += `<td>${entry["Visual Gradient"]}</td>`;
    table += `<td>${entry["Visual Compositionality"]}</td>`;
    table += `<td>${entry["ARC-AGI-2"].toFixed(1)}</td>`;
    table += '</tr>';
  }
  
  table += '</tbody></table>';
  document.getElementById('vision-lang-leaderboard').innerHTML = table;
}

// Call the functions when the window loads
window.addEventListener('DOMContentLoaded', function() {
  generateVideoGenTable();
  generateVisionLangTable();
});
