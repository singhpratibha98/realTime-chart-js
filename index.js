const ctx = document.getElementById('realTimeChart').getContext('2d');
        let chart;
        
        // Initialising the  data info
        const initialData = {
            labels: [],
            datasets: [{
                label: 'Value',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false,
            }],
        };

        // Doing the Chart configuration over here
        const chartConfig = {
            type: 'line',
            data: initialData,
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Time',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Value',
                        },
                    },
                },
                animation: false,
            },
        };

        // Initializing  the chart
        chart = new Chart(ctx, chartConfig);

        //  This is the function to add random data here
        function addData() {
            const newData = Math.random() * 100; // Generating the random data
            chart.data.labels.push(chart.data.labels.length);
            chart.data.datasets[0].data.push(newData);
            chart.update(); // Updating  the chart here
        }

        // Add data at regular intervals (e.g., every 1 second)
        
        setInterval(addData, 1000);