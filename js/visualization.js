function visualization(bufferLength) {
    var frequencyData = new Uint8Array(bufferLength);
    
    var elem = document.getElementById("svg-content");
    var svgHeight = parseInt(window.getComputedStyle(elem,null).getPropertyValue("height"));
    var svgWidth =  parseInt(window.getComputedStyle(elem,null).getPropertyValue("width"));
    var barPadding = '1';

    function createSvg(parent, height, width) {
        return d3.select("#svg-content").append('svg').attr('height', height).attr('width', width);
    }

    var svg = createSvg('body', svgHeight, svgWidth);

    svg.selectAll('rect')
        .data(frequencyData)
        .enter()
        .append('rect')
        .attr('x', function (d, i) {
            return i * (svgWidth / frequencyData.length);
        })
        .attr('width', svgWidth / frequencyData.length - barPadding);

    function renderChart() {
        requestAnimationFrame(renderChart);
        analyser.getByteFrequencyData(frequencyData);

        svg.selectAll('rect')
            .data(frequencyData)
            .attr('y', function(d) {
                return svgHeight - d;
            })
            .attr('height', function(d) {
                return d;
            })
            .attr('fill', function(d) {
                return 'rgb(0, 0, ' + d + ')';
            });
        }

        renderChart();
}
