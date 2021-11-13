document.addEventListener('DOMContentLoaded', (event) => {
    const labels = ["Community Vaccination Centers", "General Outpatient Clinics", "Private Doctors or Clinics", "Others"]
    const data = {
        labels: labels,
        datasets: [{
            axis: 'y',
            /*label: 'My First Dataset',*/
            data: [10725, 8990, 8399, 8219],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
            ],
            borderWidth: 1
        }],
    };
    const config = {
        type: 'bar',
        data: data,
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "per person",
                        font: {
                            size: 12
                        },
                        padding: 10
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Vaccination Venue',
                    font: {
                        size: 24
                    },
                    padding: 20
                },
                legend: {
                    display: false
                }
            },
        },
    }
    var myChart = new Chart(
        document.getElementById('myChart1'),
        config
    );
});