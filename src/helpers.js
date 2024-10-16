/*
function checkLineIntersection(line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX, line2EndY) {
  // if the lines intersect, the result contains the x and y of the intersection (treating the lines as infinite) and booleans for whether line segment 1 or line segment 2 contain the point
  var denominator, a, b, numerator1, numerator2, result = {
      x: null,
      y: null,
      onLine1: false,
      onLine2: false
  };
  denominator = ((line2EndY - line2StartY) * (line1EndX - line1StartX)) - ((line2EndX - line2StartX) * (line1EndY - line1StartY));
  if (denominator === 0) {
      return result;
  }
  a = line1StartY - line2StartY;
  b = line1StartX - line2StartX;
  numerator1 = ((line2EndX - line2StartX) * a) - ((line2EndY - line2StartY) * b);
  numerator2 = ((line1EndX - line1StartX) * a) - ((line1EndY - line1StartY) * b);
  a = numerator1 / denominator;
  b = numerator2 / denominator;

  result.x = line1StartX + (a * (line1EndX - line1StartX));
  result.y = line1StartY + (a * (line1EndY - line1StartY));

  // if line1 is a segment and line2 is infinite, they intersect if:
  if (a > 0 && a < 1) {
      result.onLine1 = true;
  }
  // if line2 is a segment and line1 is infinite, they intersect if:
  if (b > 0 && b < 1) {
      result.onLine2 = true;
  }
  // if line1 and line2 are segments, they intersect if both of the above are true
  return result;
};
*/

export const drawLine = ( canvasId, line, color) => {
  const context = document.getElementById(canvasId).getContext("2d");
  context.strokeStyle = color;
  context.beginPath();
  context.moveTo(line.startX, line.startY);
  context.lineTo(line.endX, line.endY);
  context.stroke();
};


function drawPoint(canvasId,x, y, color) {
  const context = document.getElementById(canvasId).getContext("2d");
  context.fillStyle = color || '#fff';
  context.beginPath();
  context.arc(x, y, 4, 0, 2 * Math.PI, true);
  context.fill();
};

export const updateLine = (contextId, line1StartX, line1StartY, line1EndX, line1EndY, line2StartX, line2StartY, line2EndX, line2EndY) => {
  const line1 = {
      startX: line1StartX,
      startY: line1StartY,
      endX: line1EndX,
      endY: line1EndY
    },
    line2 = {
      startX: line2StartX,
      startY: line2StartY,
      endX: line2EndX,
      endY: line2EndY
    };
  drawLine(contextId, line1, "#fff");
  drawLine(contextId, line2, "#fff");
  drawPoint(contextId, line2.endX, line2.endY, "#fff");


  // results = checkLineIntersection(line1.startX, line1.startY, line1.endX, line1.endY, line2.startX, line2.startY, line2.endX, line2.endY);
};


