document.addEventListener('DOMContentLoaded', (event) => {


    const labels = ["CoronaVac (Sinovac)", "Comirnaty (BioNTech)", "Others"]
    const data = {
        labels: labels,
        datasets: [{
            axis: 'y',
            data: [],
            fill: false,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }],
    };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Chart of types of vaccines',
                    font: {
                        size: 24
                    },
                    padding: 20
                },
                legend: {
                    display: true
                }
            },
            radius: "90%"
        }
    };
    var myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

});