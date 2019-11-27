import { Chart } from 'react-chartjs-2';

Chart.pluginService.register({
  afterDatasetsDraw: function(chart, easing) {
    // Only activate the plugin if it's made available
    // in the options
    if (
      !chart.options.plugins.xLabelsOnTop ||
      (chart.options.plugins.xLabelsOnTop &&
        chart.options.plugins.xLabelsOnTop.active === false)
    ) {
      return;
    }

    // To only draw at the end of animation, check for easing === 1
    const ctx = chart.ctx;

    let mamberCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    chart.data.datasets.forEach(function(dataset, i) {
      const meta = chart.getDatasetMeta(i);

      if (!meta.hidden) {
        meta.data.forEach(function(element, index) {
          mamberCount[index] += Number(dataset.data[index]);
          if ((index + 2) % 3 !== 0 || i !== chart.data.datasets.length - 1)
            return;

          // Draw the text in black, with the specified font
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          const fontSize = 13;
          const fontStyle = 'normal';
          const fontFamily =
            'Noto Sans TC, Muli, Roboto, Helvetica Neue, Arial, sans-serif';
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

          // Just naively convert to string for now
          // const dataString = dataset.data[index].toString() + ' 位';
          const dataString = mamberCount[index].toString() + ' 位';

          // Make sure alignment settings are correct
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const padding = 15;
          const startY = 24;
          const position = element.tooltipPosition();
          ctx.fillText(dataString, position.x, startY);

          ctx.save();

          ctx.beginPath();
          ctx.setLineDash([5, 3]);
          ctx.moveTo(position.x, startY + padding);
          ctx.lineTo(position.x, position.y - padding);
          ctx.strokeStyle = 'rgba(255,255,255,0.54)';
          ctx.stroke();

          ctx.restore();
        });
      }
    });
  }
});
