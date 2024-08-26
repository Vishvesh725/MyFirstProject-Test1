const ctx = document.getElementById('dockerMetricsChart').getContext('2d');
const dockerMetrics = {
    labels: ['Memory Used', 'CPU Usage', 'Storage'],
    datasets: [{
        label: 'Docker Metrics',
        data: [45, 32, 72], // Replace with actual Docker metrics
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1
    }]
};

new Chart(ctx, {
    type: 'bar',
    data: dockerMetrics,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});