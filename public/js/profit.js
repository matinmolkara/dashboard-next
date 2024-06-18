


const ctx = document.getElementById("canvas").getContext("2d");
ctx.canvas.height = 100;

gradient = ctx.createLinearGradient(0, 25, 0, 300);
gradient.addColorStop(0, colors.purple.half);
gradient.addColorStop(0.35, colors.purple.quarter);
gradient.addColorStop(1, colors.purple.zero);

const options = {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        fill: true,
        backgroundColor: gradient,
        pointBackgroundColor: colors.purple.default,
        borderColor: colors.purple.default,
        data: weight,
        lineTension: 0.2,
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  },
  options: {
    layout: {
      padding: 10,
    },
    responsive: true,
    legend: {
      display: false,
    },

    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            padding: 10,
            autoSkip: false,
            maxRotation: 15,
            minRotation: 15,
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Profit",
            padding: 10,
          },
          gridLines: {
            display: true,
            color: colors.indigo.quarter,
          },
          ticks: {
            beginAtZero: false,
            max: 150,
            min: 120,
            padding: 5,
          },
        },
      ],
    },
  },
};

window.onload = function () {
  window.myLine = new Chart(ctx, options);
  Chart.defaults.global.defaultFontColor = colors.indigo.default;
  Chart.defaults.global.defaultFontFamily = "Fira Sans";
};
