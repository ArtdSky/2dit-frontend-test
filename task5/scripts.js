const ctx1 = document.getElementById('myDoughnutChart1').getContext('2d');
const ctx2 = document.getElementById('myDoughnutChart2').getContext('2d');

const ctx3 = document.getElementById('myDoughnutChart3').getContext('2d');
const ctx4 = document.getElementById('myDoughnutChart4').getContext('2d');

const myDoughnutChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Россия', 'Казахстан', 'Узбекистан'],
        datasets: [{
            data: [167, 134, 34],
            borderWidth: 3,
            backgroundColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ]
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        cutout: 80,
        plugins: {
            legend: {
                position: 'bottom',
                fill: true,
                labels: {
                    usePointStyle: true
                }

            },
            title: {
                display: true,
                text: 'Страны',
                align: 'start'
            },

        }
    },

  
});

const myDoughnutChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Тюмень', 'Петербург', 'Нур-Султан', 'Алма-Аты', 'Ташкент'],
        datasets: [{
            data: [213, 319.5, 176.79, 176.79, 176.79],
            borderWidth: 3,
            backgroundColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(128, 128, 128, 1)',
                'rgba(0, 0, 0, 1)'
            ]
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        cutout: 80,
        plugins: {
            legend: {
                position: 'bottom',
                fill: true,
                labels: {
                    usePointStyle: true
                }

            },
            title: {
                display: true,
                text: 'Города',
                align: 'start'
            },

        }
    },

  
});

const myDoughnutChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Россия', 'Казахстан', 'Узбекистан'],
        datasets: [{
            data: [167, 134, 34],
            borderWidth: 3,
            backgroundColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(0, 0, 0, 1)'
            ]
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        cutout: 80,
        plugins: {
            legend: {
                position: 'bottom',
                fill: true,
                labels: {
                    usePointStyle: true
                }

            },
            title: {
                display: true,
                text: 'Страны',
                align: 'start'
            },

        }
    },

  
});

const myDoughnutChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['Тюмень', 'Петербург', 'Нур-Султан', 'Алма-Аты', 'Ташкент'],
        datasets: [{
            data: [213, 319.5, 176.79, 176.79, 176.79],
            borderWidth: 3,
            backgroundColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(255, 255, 0, 1)',
                'rgba(128, 128, 128, 1)',
                'rgba(0, 0, 0, 1)'
            ]
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        cutout: 80,
        plugins: {
            legend: {
                position: 'bottom',
                fill: true,
                labels: {
                    usePointStyle: true
                }

            },
            title: {
                display: true,
                text: 'Города',
                align: 'start'
            },

        }
    },

  
});
