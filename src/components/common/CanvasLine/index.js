import React, { Component } from "react";

import { updateLine } from "helpers.js";

class CanvasLine extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const advantageItemId = this.props.advantageItemId;

    const advantage = this.props.advantage;
    const canvasId = advantage ? `canvas-${advantage.id}` : "canvas";

    const advantageItem = document.getElementById(advantageItemId);
    const advantageSubTitle = advantageItem.childNodes[1];

    const startLine1X = advantageSubTitle.getBoundingClientRect().width + 20;
    const startLine1Y = advantageSubTitle.getBoundingClientRect().height + 40;

    updateLine(
      canvasId,
      startLine1X,
      startLine1Y,
      startLine1X + 100,
      startLine1Y,

      startLine1X + 100,
      startLine1Y,
      startLine1X + advantage.startLine2X,
      startLine1Y - advantage.startLine2Y
    );
  }
  render() {
    const advantageItem = this.props.advantage;
    const canvasId = advantageItem ? `canvas-${advantageItem.id}` : "canvas";
    return (
      <div className="canvas-line">
        <canvas id={canvasId} ref="canvas" width="500" height="100"></canvas>
      </div>
    );
  }
}

export default CanvasLine;
