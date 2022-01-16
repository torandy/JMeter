/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 1672.0, "series": [{"data": [[0.0, 3.0], [0.1, 4.0], [0.2, 4.0], [0.3, 4.0], [0.4, 5.0], [0.5, 5.0], [0.6, 5.0], [0.7, 5.0], [0.8, 5.0], [0.9, 5.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 6.0], [1.4, 6.0], [1.5, 6.0], [1.6, 6.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 6.0], [2.3, 6.0], [2.4, 6.0], [2.5, 6.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 7.0], [3.8, 7.0], [3.9, 7.0], [4.0, 7.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 9.0], [6.4, 9.0], [6.5, 9.0], [6.6, 9.0], [6.7, 9.0], [6.8, 9.0], [6.9, 9.0], [7.0, 9.0], [7.1, 9.0], [7.2, 9.0], [7.3, 9.0], [7.4, 9.0], [7.5, 10.0], [7.6, 10.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 11.0], [8.6, 11.0], [8.7, 11.0], [8.8, 11.0], [8.9, 12.0], [9.0, 12.0], [9.1, 13.0], [9.2, 14.0], [9.3, 16.0], [9.4, 17.0], [9.5, 19.0], [9.6, 20.0], [9.7, 22.0], [9.8, 23.0], [9.9, 25.0], [10.0, 26.0], [10.1, 28.0], [10.2, 29.0], [10.3, 30.0], [10.4, 32.0], [10.5, 33.0], [10.6, 34.0], [10.7, 36.0], [10.8, 37.0], [10.9, 38.0], [11.0, 40.0], [11.1, 41.0], [11.2, 42.0], [11.3, 43.0], [11.4, 45.0], [11.5, 46.0], [11.6, 47.0], [11.7, 49.0], [11.8, 50.0], [11.9, 51.0], [12.0, 52.0], [12.1, 53.0], [12.2, 53.0], [12.3, 54.0], [12.4, 54.0], [12.5, 55.0], [12.6, 55.0], [12.7, 56.0], [12.8, 56.0], [12.9, 56.0], [13.0, 56.0], [13.1, 57.0], [13.2, 57.0], [13.3, 57.0], [13.4, 57.0], [13.5, 57.0], [13.6, 58.0], [13.7, 58.0], [13.8, 58.0], [13.9, 58.0], [14.0, 58.0], [14.1, 58.0], [14.2, 59.0], [14.3, 59.0], [14.4, 59.0], [14.5, 59.0], [14.6, 59.0], [14.7, 59.0], [14.8, 59.0], [14.9, 59.0], [15.0, 60.0], [15.1, 60.0], [15.2, 60.0], [15.3, 60.0], [15.4, 60.0], [15.5, 60.0], [15.6, 60.0], [15.7, 60.0], [15.8, 60.0], [15.9, 60.0], [16.0, 61.0], [16.1, 61.0], [16.2, 61.0], [16.3, 61.0], [16.4, 61.0], [16.5, 61.0], [16.6, 61.0], [16.7, 61.0], [16.8, 61.0], [16.9, 61.0], [17.0, 61.0], [17.1, 61.0], [17.2, 62.0], [17.3, 62.0], [17.4, 62.0], [17.5, 62.0], [17.6, 62.0], [17.7, 62.0], [17.8, 62.0], [17.9, 62.0], [18.0, 62.0], [18.1, 62.0], [18.2, 62.0], [18.3, 62.0], [18.4, 62.0], [18.5, 62.0], [18.6, 63.0], [18.7, 63.0], [18.8, 63.0], [18.9, 63.0], [19.0, 63.0], [19.1, 63.0], [19.2, 63.0], [19.3, 63.0], [19.4, 63.0], [19.5, 63.0], [19.6, 63.0], [19.7, 63.0], [19.8, 63.0], [19.9, 63.0], [20.0, 63.0], [20.1, 63.0], [20.2, 63.0], [20.3, 63.0], [20.4, 64.0], [20.5, 64.0], [20.6, 64.0], [20.7, 64.0], [20.8, 64.0], [20.9, 64.0], [21.0, 64.0], [21.1, 64.0], [21.2, 64.0], [21.3, 64.0], [21.4, 64.0], [21.5, 64.0], [21.6, 64.0], [21.7, 64.0], [21.8, 64.0], [21.9, 64.0], [22.0, 64.0], [22.1, 64.0], [22.2, 64.0], [22.3, 65.0], [22.4, 65.0], [22.5, 65.0], [22.6, 65.0], [22.7, 65.0], [22.8, 65.0], [22.9, 65.0], [23.0, 65.0], [23.1, 65.0], [23.2, 65.0], [23.3, 65.0], [23.4, 65.0], [23.5, 65.0], [23.6, 65.0], [23.7, 65.0], [23.8, 65.0], [23.9, 65.0], [24.0, 65.0], [24.1, 65.0], [24.2, 65.0], [24.3, 65.0], [24.4, 65.0], [24.5, 66.0], [24.6, 66.0], [24.7, 66.0], [24.8, 66.0], [24.9, 66.0], [25.0, 66.0], [25.1, 66.0], [25.2, 66.0], [25.3, 66.0], [25.4, 66.0], [25.5, 66.0], [25.6, 66.0], [25.7, 66.0], [25.8, 66.0], [25.9, 66.0], [26.0, 66.0], [26.1, 66.0], [26.2, 66.0], [26.3, 66.0], [26.4, 66.0], [26.5, 66.0], [26.6, 66.0], [26.7, 66.0], [26.8, 67.0], [26.9, 67.0], [27.0, 67.0], [27.1, 67.0], [27.2, 67.0], [27.3, 67.0], [27.4, 67.0], [27.5, 67.0], [27.6, 67.0], [27.7, 67.0], [27.8, 67.0], [27.9, 67.0], [28.0, 67.0], [28.1, 67.0], [28.2, 67.0], [28.3, 67.0], [28.4, 67.0], [28.5, 67.0], [28.6, 67.0], [28.7, 67.0], [28.8, 67.0], [28.9, 67.0], [29.0, 67.0], [29.1, 67.0], [29.2, 68.0], [29.3, 68.0], [29.4, 68.0], [29.5, 68.0], [29.6, 68.0], [29.7, 68.0], [29.8, 68.0], [29.9, 68.0], [30.0, 68.0], [30.1, 68.0], [30.2, 68.0], [30.3, 68.0], [30.4, 68.0], [30.5, 68.0], [30.6, 68.0], [30.7, 68.0], [30.8, 68.0], [30.9, 68.0], [31.0, 68.0], [31.1, 68.0], [31.2, 68.0], [31.3, 68.0], [31.4, 68.0], [31.5, 68.0], [31.6, 68.0], [31.7, 69.0], [31.8, 69.0], [31.9, 69.0], [32.0, 69.0], [32.1, 69.0], [32.2, 69.0], [32.3, 69.0], [32.4, 69.0], [32.5, 69.0], [32.6, 69.0], [32.7, 69.0], [32.8, 69.0], [32.9, 69.0], [33.0, 69.0], [33.1, 69.0], [33.2, 69.0], [33.3, 69.0], [33.4, 69.0], [33.5, 69.0], [33.6, 69.0], [33.7, 69.0], [33.8, 69.0], [33.9, 69.0], [34.0, 69.0], [34.1, 69.0], [34.2, 69.0], [34.3, 69.0], [34.4, 70.0], [34.5, 70.0], [34.6, 70.0], [34.7, 70.0], [34.8, 70.0], [34.9, 70.0], [35.0, 70.0], [35.1, 70.0], [35.2, 70.0], [35.3, 70.0], [35.4, 70.0], [35.5, 70.0], [35.6, 70.0], [35.7, 70.0], [35.8, 70.0], [35.9, 70.0], [36.0, 70.0], [36.1, 70.0], [36.2, 70.0], [36.3, 70.0], [36.4, 70.0], [36.5, 70.0], [36.6, 70.0], [36.7, 70.0], [36.8, 70.0], [36.9, 71.0], [37.0, 71.0], [37.1, 71.0], [37.2, 71.0], [37.3, 71.0], [37.4, 71.0], [37.5, 71.0], [37.6, 71.0], [37.7, 71.0], [37.8, 71.0], [37.9, 71.0], [38.0, 71.0], [38.1, 71.0], [38.2, 71.0], [38.3, 71.0], [38.4, 71.0], [38.5, 71.0], [38.6, 71.0], [38.7, 71.0], [38.8, 71.0], [38.9, 71.0], [39.0, 71.0], [39.1, 71.0], [39.2, 71.0], [39.3, 71.0], [39.4, 71.0], [39.5, 72.0], [39.6, 72.0], [39.7, 72.0], [39.8, 72.0], [39.9, 72.0], [40.0, 72.0], [40.1, 72.0], [40.2, 72.0], [40.3, 72.0], [40.4, 72.0], [40.5, 72.0], [40.6, 72.0], [40.7, 72.0], [40.8, 72.0], [40.9, 72.0], [41.0, 72.0], [41.1, 72.0], [41.2, 72.0], [41.3, 72.0], [41.4, 72.0], [41.5, 72.0], [41.6, 72.0], [41.7, 72.0], [41.8, 72.0], [41.9, 72.0], [42.0, 72.0], [42.1, 73.0], [42.2, 73.0], [42.3, 73.0], [42.4, 73.0], [42.5, 73.0], [42.6, 73.0], [42.7, 73.0], [42.8, 73.0], [42.9, 73.0], [43.0, 73.0], [43.1, 73.0], [43.2, 73.0], [43.3, 73.0], [43.4, 73.0], [43.5, 73.0], [43.6, 73.0], [43.7, 73.0], [43.8, 73.0], [43.9, 73.0], [44.0, 73.0], [44.1, 73.0], [44.2, 73.0], [44.3, 73.0], [44.4, 73.0], [44.5, 73.0], [44.6, 73.0], [44.7, 74.0], [44.8, 74.0], [44.9, 74.0], [45.0, 74.0], [45.1, 74.0], [45.2, 74.0], [45.3, 74.0], [45.4, 74.0], [45.5, 74.0], [45.6, 74.0], [45.7, 74.0], [45.8, 74.0], [45.9, 74.0], [46.0, 74.0], [46.1, 74.0], [46.2, 74.0], [46.3, 74.0], [46.4, 74.0], [46.5, 74.0], [46.6, 74.0], [46.7, 74.0], [46.8, 74.0], [46.9, 74.0], [47.0, 74.0], [47.1, 75.0], [47.2, 75.0], [47.3, 75.0], [47.4, 75.0], [47.5, 75.0], [47.6, 75.0], [47.7, 75.0], [47.8, 75.0], [47.9, 75.0], [48.0, 75.0], [48.1, 75.0], [48.2, 75.0], [48.3, 75.0], [48.4, 75.0], [48.5, 75.0], [48.6, 75.0], [48.7, 75.0], [48.8, 75.0], [48.9, 75.0], [49.0, 75.0], [49.1, 75.0], [49.2, 75.0], [49.3, 75.0], [49.4, 75.0], [49.5, 76.0], [49.6, 76.0], [49.7, 76.0], [49.8, 76.0], [49.9, 76.0], [50.0, 76.0], [50.1, 76.0], [50.2, 76.0], [50.3, 76.0], [50.4, 76.0], [50.5, 76.0], [50.6, 76.0], [50.7, 76.0], [50.8, 76.0], [50.9, 76.0], [51.0, 76.0], [51.1, 76.0], [51.2, 76.0], [51.3, 76.0], [51.4, 76.0], [51.5, 76.0], [51.6, 76.0], [51.7, 76.0], [51.8, 76.0], [51.9, 77.0], [52.0, 77.0], [52.1, 77.0], [52.2, 77.0], [52.3, 77.0], [52.4, 77.0], [52.5, 77.0], [52.6, 77.0], [52.7, 77.0], [52.8, 77.0], [52.9, 77.0], [53.0, 77.0], [53.1, 77.0], [53.2, 77.0], [53.3, 77.0], [53.4, 77.0], [53.5, 77.0], [53.6, 77.0], [53.7, 77.0], [53.8, 77.0], [53.9, 77.0], [54.0, 78.0], [54.1, 78.0], [54.2, 78.0], [54.3, 78.0], [54.4, 78.0], [54.5, 78.0], [54.6, 78.0], [54.7, 78.0], [54.8, 78.0], [54.9, 78.0], [55.0, 78.0], [55.1, 78.0], [55.2, 78.0], [55.3, 78.0], [55.4, 78.0], [55.5, 78.0], [55.6, 78.0], [55.7, 78.0], [55.8, 78.0], [55.9, 78.0], [56.0, 79.0], [56.1, 79.0], [56.2, 79.0], [56.3, 79.0], [56.4, 79.0], [56.5, 79.0], [56.6, 79.0], [56.7, 79.0], [56.8, 79.0], [56.9, 79.0], [57.0, 79.0], [57.1, 79.0], [57.2, 79.0], [57.3, 79.0], [57.4, 79.0], [57.5, 79.0], [57.6, 79.0], [57.7, 79.0], [57.8, 79.0], [57.9, 79.0], [58.0, 80.0], [58.1, 80.0], [58.2, 80.0], [58.3, 80.0], [58.4, 80.0], [58.5, 80.0], [58.6, 80.0], [58.7, 80.0], [58.8, 80.0], [58.9, 80.0], [59.0, 80.0], [59.1, 80.0], [59.2, 80.0], [59.3, 80.0], [59.4, 80.0], [59.5, 80.0], [59.6, 80.0], [59.7, 80.0], [59.8, 81.0], [59.9, 81.0], [60.0, 81.0], [60.1, 81.0], [60.2, 81.0], [60.3, 81.0], [60.4, 81.0], [60.5, 81.0], [60.6, 81.0], [60.7, 81.0], [60.8, 81.0], [60.9, 81.0], [61.0, 81.0], [61.1, 81.0], [61.2, 81.0], [61.3, 82.0], [61.4, 82.0], [61.5, 82.0], [61.6, 82.0], [61.7, 82.0], [61.8, 82.0], [61.9, 82.0], [62.0, 82.0], [62.1, 82.0], [62.2, 82.0], [62.3, 82.0], [62.4, 82.0], [62.5, 82.0], [62.6, 82.0], [62.7, 83.0], [62.8, 83.0], [62.9, 83.0], [63.0, 83.0], [63.1, 83.0], [63.2, 83.0], [63.3, 83.0], [63.4, 83.0], [63.5, 83.0], [63.6, 83.0], [63.7, 83.0], [63.8, 83.0], [63.9, 83.0], [64.0, 83.0], [64.1, 83.0], [64.2, 84.0], [64.3, 84.0], [64.4, 84.0], [64.5, 84.0], [64.6, 84.0], [64.7, 84.0], [64.8, 84.0], [64.9, 84.0], [65.0, 84.0], [65.1, 84.0], [65.2, 84.0], [65.3, 84.0], [65.4, 84.0], [65.5, 85.0], [65.6, 85.0], [65.7, 85.0], [65.8, 85.0], [65.9, 85.0], [66.0, 85.0], [66.1, 85.0], [66.2, 85.0], [66.3, 85.0], [66.4, 85.0], [66.5, 85.0], [66.6, 85.0], [66.7, 85.0], [66.8, 86.0], [66.9, 86.0], [67.0, 86.0], [67.1, 86.0], [67.2, 86.0], [67.3, 86.0], [67.4, 86.0], [67.5, 86.0], [67.6, 86.0], [67.7, 86.0], [67.8, 86.0], [67.9, 86.0], [68.0, 87.0], [68.1, 87.0], [68.2, 87.0], [68.3, 87.0], [68.4, 87.0], [68.5, 87.0], [68.6, 87.0], [68.7, 87.0], [68.8, 87.0], [68.9, 87.0], [69.0, 88.0], [69.1, 88.0], [69.2, 88.0], [69.3, 88.0], [69.4, 88.0], [69.5, 88.0], [69.6, 88.0], [69.7, 88.0], [69.8, 88.0], [69.9, 89.0], [70.0, 89.0], [70.1, 89.0], [70.2, 89.0], [70.3, 89.0], [70.4, 89.0], [70.5, 89.0], [70.6, 89.0], [70.7, 89.0], [70.8, 89.0], [70.9, 90.0], [71.0, 90.0], [71.1, 90.0], [71.2, 90.0], [71.3, 90.0], [71.4, 90.0], [71.5, 90.0], [71.6, 90.0], [71.7, 90.0], [71.8, 91.0], [71.9, 91.0], [72.0, 91.0], [72.1, 91.0], [72.2, 91.0], [72.3, 91.0], [72.4, 91.0], [72.5, 91.0], [72.6, 92.0], [72.7, 92.0], [72.8, 92.0], [72.9, 92.0], [73.0, 92.0], [73.1, 92.0], [73.2, 92.0], [73.3, 92.0], [73.4, 92.0], [73.5, 92.0], [73.6, 93.0], [73.7, 93.0], [73.8, 93.0], [73.9, 93.0], [74.0, 93.0], [74.1, 93.0], [74.2, 93.0], [74.3, 93.0], [74.4, 93.0], [74.5, 93.0], [74.6, 93.0], [74.7, 94.0], [74.8, 94.0], [74.9, 94.0], [75.0, 94.0], [75.1, 94.0], [75.2, 94.0], [75.3, 94.0], [75.4, 94.0], [75.5, 94.0], [75.6, 94.0], [75.7, 94.0], [75.8, 94.0], [75.9, 94.0], [76.0, 95.0], [76.1, 95.0], [76.2, 95.0], [76.3, 95.0], [76.4, 95.0], [76.5, 95.0], [76.6, 95.0], [76.7, 95.0], [76.8, 95.0], [76.9, 95.0], [77.0, 96.0], [77.1, 96.0], [77.2, 96.0], [77.3, 96.0], [77.4, 96.0], [77.5, 96.0], [77.6, 96.0], [77.7, 96.0], [77.8, 96.0], [77.9, 96.0], [78.0, 96.0], [78.1, 97.0], [78.2, 97.0], [78.3, 97.0], [78.4, 97.0], [78.5, 97.0], [78.6, 97.0], [78.7, 97.0], [78.8, 97.0], [78.9, 97.0], [79.0, 97.0], [79.1, 98.0], [79.2, 98.0], [79.3, 98.0], [79.4, 98.0], [79.5, 98.0], [79.6, 98.0], [79.7, 98.0], [79.8, 98.0], [79.9, 98.0], [80.0, 98.0], [80.1, 98.0], [80.2, 99.0], [80.3, 99.0], [80.4, 99.0], [80.5, 99.0], [80.6, 99.0], [80.7, 99.0], [80.8, 99.0], [80.9, 99.0], [81.0, 99.0], [81.1, 99.0], [81.2, 100.0], [81.3, 100.0], [81.4, 100.0], [81.5, 100.0], [81.6, 100.0], [81.7, 100.0], [81.8, 100.0], [81.9, 100.0], [82.0, 100.0], [82.1, 100.0], [82.2, 101.0], [82.3, 101.0], [82.4, 101.0], [82.5, 101.0], [82.6, 101.0], [82.7, 101.0], [82.8, 101.0], [82.9, 102.0], [83.0, 102.0], [83.1, 102.0], [83.2, 103.0], [83.3, 103.0], [83.4, 103.0], [83.5, 103.0], [83.6, 104.0], [83.7, 104.0], [83.8, 104.0], [83.9, 105.0], [84.0, 105.0], [84.1, 106.0], [84.2, 106.0], [84.3, 106.0], [84.4, 107.0], [84.5, 107.0], [84.6, 108.0], [84.7, 108.0], [84.8, 109.0], [84.9, 109.0], [85.0, 109.0], [85.1, 109.0], [85.2, 110.0], [85.3, 110.0], [85.4, 111.0], [85.5, 111.0], [85.6, 111.0], [85.7, 112.0], [85.8, 112.0], [85.9, 113.0], [86.0, 113.0], [86.1, 113.0], [86.2, 113.0], [86.3, 114.0], [86.4, 114.0], [86.5, 115.0], [86.6, 115.0], [86.7, 116.0], [86.8, 116.0], [86.9, 116.0], [87.0, 117.0], [87.1, 117.0], [87.2, 117.0], [87.3, 118.0], [87.4, 118.0], [87.5, 118.0], [87.6, 119.0], [87.7, 119.0], [87.8, 119.0], [87.9, 120.0], [88.0, 120.0], [88.1, 120.0], [88.2, 121.0], [88.3, 121.0], [88.4, 121.0], [88.5, 121.0], [88.6, 122.0], [88.7, 122.0], [88.8, 122.0], [88.9, 122.0], [89.0, 122.0], [89.1, 122.0], [89.2, 123.0], [89.3, 123.0], [89.4, 123.0], [89.5, 123.0], [89.6, 123.0], [89.7, 123.0], [89.8, 123.0], [89.9, 123.0], [90.0, 123.0], [90.1, 123.0], [90.2, 124.0], [90.3, 124.0], [90.4, 124.0], [90.5, 124.0], [90.6, 124.0], [90.7, 124.0], [90.8, 124.0], [90.9, 124.0], [91.0, 124.0], [91.1, 124.0], [91.2, 124.0], [91.3, 124.0], [91.4, 125.0], [91.5, 125.0], [91.6, 125.0], [91.7, 125.0], [91.8, 125.0], [91.9, 125.0], [92.0, 125.0], [92.1, 125.0], [92.2, 125.0], [92.3, 125.0], [92.4, 125.0], [92.5, 125.0], [92.6, 126.0], [92.7, 126.0], [92.8, 126.0], [92.9, 126.0], [93.0, 126.0], [93.1, 126.0], [93.2, 126.0], [93.3, 126.0], [93.4, 126.0], [93.5, 126.0], [93.6, 126.0], [93.7, 126.0], [93.8, 126.0], [93.9, 127.0], [94.0, 127.0], [94.1, 127.0], [94.2, 127.0], [94.3, 127.0], [94.4, 127.0], [94.5, 127.0], [94.6, 127.0], [94.7, 127.0], [94.8, 127.0], [94.9, 127.0], [95.0, 127.0], [95.1, 127.0], [95.2, 127.0], [95.3, 128.0], [95.4, 128.0], [95.5, 128.0], [95.6, 128.0], [95.7, 128.0], [95.8, 128.0], [95.9, 128.0], [96.0, 128.0], [96.1, 128.0], [96.2, 128.0], [96.3, 128.0], [96.4, 129.0], [96.5, 129.0], [96.6, 129.0], [96.7, 129.0], [96.8, 129.0], [96.9, 129.0], [97.0, 129.0], [97.1, 130.0], [97.2, 130.0], [97.3, 130.0], [97.4, 131.0], [97.5, 133.0], [97.6, 135.0], [97.7, 136.0], [97.8, 140.0], [97.9, 141.0], [98.0, 145.0], [98.1, 147.0], [98.2, 148.0], [98.3, 149.0], [98.4, 149.0], [98.5, 149.0], [98.6, 150.0], [98.7, 150.0], [98.8, 150.0], [98.9, 150.0], [99.0, 150.0], [99.1, 151.0], [99.2, 151.0], [99.3, 151.0], [99.4, 152.0], [99.5, 153.0], [99.6, 161.0], [99.7, 179.0], [99.8, 197.0], [99.9, 223.0]], "isOverall": false, "label": "GETListUsers", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 43518.0, "series": [{"data": [[0.0, 43518.0], [300.0, 13.0], [100.0, 10000.0], [200.0, 80.0], [400.0, 2.0], [1600.0, 1.0], [900.0, 1.0], [500.0, 1.0], [1000.0, 1.0]], "isOverall": false, "label": "GETListUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 34945.0, "series": [{"data": [[0.0, 34945.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 18668.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.64227728E12, "maxY": 28.944036337127887, "series": [{"data": [[1.64227746E12, 16.24817260080161], [1.64227728E12, 1.0], [1.64227734E12, 1.0], [1.64227764E12, 25.122792119565204], [1.64227752E12, 18.614084706214992], [1.64227758E12, 28.944036337127887], [1.6422774E12, 9.70934466019416]], "isOverall": false, "label": "GET User List", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64227764E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 22.66947115384615, "minX": 1.0, "maxY": 154.42608695652171, "series": [{"data": [[2.0, 77.0744680851064], [3.0, 79.89781021897808], [4.0, 81.01666666666665], [5.0, 81.60180995475116], [6.0, 79.63533834586472], [7.0, 77.73053892215577], [8.0, 75.14102564102564], [9.0, 59.54143646408846], [10.0, 77.39995019300198], [11.0, 63.314569536423825], [12.0, 22.66947115384615], [13.0, 45.30188679245286], [14.0, 37.21102362204725], [15.0, 38.83225806451611], [1.0, 86.76348547717856], [16.0, 40.13333333333337], [17.0, 71.58047493403697], [18.0, 68.79271070615027], [19.0, 63.97929606625256], [20.0, 72.60320629159118], [21.0, 73.26486486486488], [22.0, 76.06632653061222], [23.0, 74.24590163934424], [24.0, 76.98437500000003], [25.0, 93.27551020408163], [26.0, 68.10975609756099], [27.0, 89.3294797687861], [28.0, 154.42608695652171], [29.0, 92.52173913043484], [30.0, 88.60595588982558]], "isOverall": false, "label": "GETListUsers", "isController": false}, {"data": [[21.072439711285412, 77.450827163027]], "isOverall": false, "label": "GETListUsers-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 84.66666666666667, "minX": 1.64227728E12, "maxY": 638696.0666666667, "series": [{"data": [[1.64227746E12, 268535.9666666667], [1.64227728E12, 1264.5333333333333], [1.64227734E12, 20220.183333333334], [1.64227764E12, 215166.38333333333], [1.64227752E12, 519585.81666666665], [1.64227758E12, 638696.0666666667], [1.6422774E12, 208649.48333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64227746E12, 17953.566666666666], [1.64227728E12, 84.66666666666667], [1.64227734E12, 1352.55], [1.64227764E12, 5958.416666666667], [1.64227752E12, 13690.6], [1.64227758E12, 20982.516666666666], [1.6422774E12, 13953.066666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64227764E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 63.51170190200121, "minX": 1.64227728E12, "maxY": 98.675, "series": [{"data": [[1.64227746E12, 75.15208677198797], [1.64227728E12, 98.675], [1.64227734E12, 86.43974960876373], [1.64227764E12, 78.51613451086934], [1.64227752E12, 63.51170190200121], [1.64227758E12, 87.69264846071863], [1.6422774E12, 80.6564016990295]], "isOverall": false, "label": "GETListUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64227764E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 34.97348511631193, "minX": 1.64227728E12, "maxY": 98.54999999999997, "series": [{"data": [[1.64227746E12, 75.11377033718456], [1.64227728E12, 98.54999999999997], [1.64227734E12, 86.33176838810635], [1.64227764E12, 37.46824048913034], [1.64227752E12, 34.97348511631193], [1.64227758E12, 43.25138787640901], [1.6422774E12, 80.62211771844667]], "isOverall": false, "label": "GETListUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64227764E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 40.50506955906619, "minX": 1.64227728E12, "maxY": 67.97420512532943, "series": [{"data": [[1.64227746E12, 40.50506955906619], [1.64227728E12, 55.15], [1.64227734E12, 46.84194053208133], [1.64227764E12, 61.50254755434759], [1.64227752E12, 47.843314713992626], [1.64227758E12, 67.97420512532943], [1.6422774E12, 43.40442961165043]], "isOverall": false, "label": "GETListUsers", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64227764E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 43.0, "minX": 1.64227728E12, "maxY": 1672.0, "series": [{"data": [[1.64227746E12, 317.0], [1.64227728E12, 548.0], [1.64227734E12, 337.0], [1.64227764E12, 480.0], [1.64227752E12, 1672.0], [1.64227758E12, 1050.0], [1.6422774E12, 488.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64227746E12, 90.0], [1.64227728E12, 103.9], [1.64227734E12, 108.0], [1.64227764E12, 96.0], [1.64227752E12, 92.0], [1.64227758E12, 95.60000000000036], [1.6422774E12, 97.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64227746E12, 126.0], [1.64227728E12, 548.0], [1.64227734E12, 201.0], [1.64227764E12, 137.6800000000003], [1.64227752E12, 125.0], [1.64227758E12, 177.0], [1.6422774E12, 146.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64227746E12, 99.84999999999945], [1.64227728E12, 117.94999999999999], [1.64227734E12, 120.0], [1.64227764E12, 105.19999999999982], [1.64227752E12, 100.0], [1.64227758E12, 108.0], [1.6422774E12, 106.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64227746E12, 45.0], [1.64227728E12, 68.0], [1.64227734E12, 56.0], [1.64227764E12, 51.0], [1.64227752E12, 49.0], [1.64227758E12, 43.0], [1.6422774E12, 50.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64227746E12, 72.0], [1.64227728E12, 85.5], [1.64227734E12, 81.0], [1.64227764E12, 75.0], [1.64227752E12, 74.0], [1.64227758E12, 73.0], [1.6422774E12, 77.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64227764E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 5.0, "minX": 1.0, "maxY": 149.0, "series": [{"data": [[6.0, 90.5], [8.0, 93.0], [9.0, 81.5], [10.0, 87.0], [11.0, 84.0], [12.0, 80.0], [13.0, 78.0], [16.0, 77.5], [17.0, 78.0], [24.0, 82.0], [25.0, 73.0], [35.0, 82.0], [34.0, 76.0], [38.0, 75.0], [44.0, 77.0], [49.0, 79.0], [48.0, 85.0], [51.0, 73.0], [57.0, 85.0], [59.0, 81.0], [62.0, 76.5], [64.0, 73.0], [69.0, 75.0], [72.0, 79.0], [73.0, 78.0], [82.0, 76.0], [86.0, 76.0], [89.0, 76.0], [93.0, 75.0], [99.0, 78.0], [105.0, 73.0], [106.0, 72.5], [110.0, 81.0], [113.0, 79.0], [115.0, 78.0], [118.0, 80.0], [119.0, 77.0], [116.0, 83.0], [123.0, 77.0], [120.0, 77.0], [121.0, 78.0], [122.0, 79.0], [125.0, 75.0], [124.0, 77.0], [126.0, 75.5], [127.0, 75.0], [130.0, 75.0], [131.0, 74.0], [129.0, 74.0], [128.0, 76.0], [133.0, 73.0], [134.0, 72.0], [139.0, 72.0], [136.0, 73.0], [168.0, 73.5], [190.0, 145.0], [201.0, 71.0], [217.0, 73.0], [228.0, 74.0], [226.0, 78.5], [227.0, 74.0], [239.0, 74.0], [244.0, 76.0], [243.0, 73.0], [245.0, 72.0], [253.0, 72.0], [255.0, 75.0], [252.0, 74.0], [250.0, 80.0], [248.0, 70.0], [251.0, 77.5], [249.0, 79.0], [257.0, 72.0], [259.0, 73.0], [263.0, 73.0], [256.0, 73.0], [266.0, 72.0], [267.0, 73.0], [261.0, 75.0], [262.0, 80.0], [260.0, 74.0], [271.0, 72.0], [270.0, 71.0], [274.0, 71.0], [276.0, 71.0], [278.0, 70.0], [275.0, 70.0], [272.0, 72.0], [285.0, 75.0], [286.0, 74.5], [277.0, 71.0], [287.0, 75.0], [282.0, 75.0], [296.0, 76.0], [299.0, 75.0], [289.0, 74.0], [303.0, 72.0], [288.0, 72.0], [292.0, 78.0], [301.0, 71.5], [295.0, 79.0], [291.0, 77.0], [306.0, 73.0], [316.0, 74.0], [309.0, 76.0], [315.0, 71.0], [304.0, 71.5], [319.0, 73.0], [311.0, 76.0], [308.0, 72.0], [310.0, 72.0], [330.0, 71.5], [328.0, 78.0], [322.0, 73.0], [327.0, 74.0], [340.0, 71.5], [348.0, 84.0], [347.0, 91.0], [351.0, 74.0], [344.0, 75.0], [355.0, 73.5], [353.0, 73.0], [365.0, 75.0], [360.0, 71.0], [352.0, 73.0], [363.0, 71.0], [359.0, 73.0], [356.0, 79.0], [380.0, 78.0], [370.0, 72.0], [368.0, 75.0], [385.0, 72.0], [395.0, 73.0], [389.0, 71.0], [398.0, 75.0], [397.0, 72.5], [399.0, 73.0], [401.0, 71.0], [413.0, 69.0], [402.0, 74.0], [426.0, 69.0], [425.0, 75.0], [423.0, 73.5], [453.0, 75.0], [635.0, 71.0], [716.0, 69.0], [1.0, 72.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[635.0, 8.0], [716.0, 9.0], [106.0, 5.0], [228.0, 100.0], [226.0, 99.0], [227.0, 7.0], [239.0, 123.0], [237.0, 126.0], [236.0, 127.0], [244.0, 99.0], [243.0, 95.0], [245.0, 93.0], [240.0, 125.0], [241.0, 124.0], [242.0, 123.0], [246.0, 122.0], [250.0, 98.0], [248.0, 97.5], [251.0, 97.0], [249.0, 149.0], [256.0, 101.0], [261.0, 98.0], [271.0, 94.0], [260.0, 111.5], [262.0, 128.0], [267.0, 126.0], [257.0, 149.0], [285.0, 93.0], [286.0, 85.0], [272.0, 97.0], [277.0, 127.0], [274.0, 126.0], [287.0, 83.0], [282.0, 82.5], [296.0, 72.0], [299.0, 83.5], [289.0, 89.0], [303.0, 70.0], [288.0, 7.0], [292.0, 84.0], [301.0, 91.0], [295.0, 127.0], [291.0, 77.0], [316.0, 95.0], [309.0, 9.0], [306.0, 80.0], [315.0, 73.0], [311.0, 124.0], [308.0, 126.0], [310.0, 8.0], [330.0, 47.5], [328.0, 42.0], [322.0, 127.0], [327.0, 95.0], [340.0, 96.0], [348.0, 123.0], [347.0, 102.5], [351.0, 117.0], [344.0, 108.0], [355.0, 118.0], [353.0, 111.0], [365.0, 90.0], [360.0, 111.0], [352.0, 98.5], [363.0, 112.0], [359.0, 105.0], [356.0, 72.0], [380.0, 67.0], [370.0, 104.0], [368.0, 94.0], [385.0, 10.0], [389.0, 106.0], [398.0, 69.5], [397.0, 53.0], [399.0, 72.0], [402.0, 55.0], [426.0, 56.0], [425.0, 19.0], [423.0, 41.0], [453.0, 7.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 716.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 145.0, "series": [{"data": [[6.0, 90.0], [8.0, 93.0], [9.0, 81.5], [10.0, 87.0], [11.0, 84.0], [12.0, 80.0], [13.0, 78.0], [16.0, 77.5], [17.0, 78.0], [24.0, 82.0], [25.0, 73.0], [35.0, 82.0], [34.0, 76.0], [38.0, 75.0], [44.0, 77.0], [49.0, 79.0], [48.0, 85.0], [51.0, 73.0], [57.0, 85.0], [59.0, 81.0], [62.0, 76.5], [64.0, 73.0], [69.0, 75.0], [72.0, 79.0], [73.0, 78.0], [82.0, 76.0], [86.0, 76.0], [89.0, 76.0], [93.0, 75.0], [99.0, 78.0], [105.0, 73.0], [106.0, 72.5], [110.0, 81.0], [113.0, 78.0], [115.0, 78.0], [118.0, 80.0], [119.0, 77.0], [116.0, 83.0], [123.0, 77.0], [120.0, 77.0], [121.0, 78.0], [122.0, 79.0], [125.0, 75.0], [124.0, 77.0], [126.0, 75.5], [127.0, 75.0], [130.0, 75.0], [131.0, 74.0], [129.0, 74.0], [128.0, 75.5], [133.0, 73.0], [134.0, 72.0], [139.0, 72.0], [136.0, 72.5], [168.0, 73.5], [190.0, 145.0], [201.0, 71.0], [217.0, 73.0], [228.0, 74.0], [226.0, 78.5], [227.0, 74.0], [239.0, 74.0], [244.0, 76.0], [243.0, 73.0], [245.0, 72.0], [253.0, 72.0], [255.0, 75.0], [252.0, 74.0], [250.0, 80.0], [248.0, 70.0], [251.0, 77.5], [249.0, 79.0], [257.0, 72.0], [259.0, 73.0], [263.0, 73.0], [256.0, 73.0], [266.0, 72.0], [267.0, 73.0], [261.0, 75.0], [262.0, 80.0], [260.0, 73.5], [271.0, 72.0], [270.0, 71.0], [274.0, 71.0], [276.0, 71.0], [278.0, 70.0], [275.0, 70.0], [272.0, 72.0], [285.0, 75.0], [286.0, 74.5], [277.0, 71.0], [287.0, 74.5], [282.0, 75.0], [296.0, 76.0], [299.0, 75.0], [289.0, 74.0], [303.0, 72.0], [288.0, 72.0], [292.0, 78.0], [301.0, 71.5], [295.0, 79.0], [291.0, 77.0], [306.0, 73.0], [316.0, 74.0], [309.0, 76.0], [315.0, 71.0], [304.0, 71.5], [319.0, 73.0], [311.0, 76.0], [308.0, 72.0], [310.0, 72.0], [330.0, 71.5], [328.0, 78.0], [322.0, 73.0], [327.0, 74.0], [340.0, 71.5], [348.0, 84.0], [347.0, 91.0], [351.0, 74.0], [344.0, 75.0], [355.0, 73.0], [353.0, 73.0], [365.0, 75.0], [360.0, 71.0], [352.0, 73.0], [363.0, 71.0], [359.0, 73.0], [356.0, 79.0], [380.0, 78.0], [370.0, 72.0], [368.0, 75.0], [385.0, 72.0], [395.0, 73.0], [389.0, 71.0], [398.0, 75.0], [397.0, 72.5], [399.0, 73.0], [401.0, 71.0], [413.0, 69.0], [402.0, 74.0], [426.0, 69.0], [425.0, 75.0], [423.0, 73.5], [453.0, 75.0], [635.0, 71.0], [716.0, 69.0], [1.0, 72.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[635.0, 0.0], [716.0, 0.0], [106.0, 0.0], [228.0, 0.0], [226.0, 0.0], [227.0, 0.0], [239.0, 0.0], [237.0, 0.0], [236.0, 0.0], [244.0, 0.0], [243.0, 0.0], [245.0, 0.0], [240.0, 0.0], [241.0, 0.0], [242.0, 0.0], [246.0, 0.0], [250.0, 0.0], [248.0, 0.0], [251.0, 0.0], [249.0, 0.0], [256.0, 0.0], [261.0, 0.0], [271.0, 0.0], [260.0, 0.0], [262.0, 0.0], [267.0, 0.0], [257.0, 0.0], [285.0, 0.0], [286.0, 0.0], [272.0, 0.0], [277.0, 0.0], [274.0, 0.0], [287.0, 0.0], [282.0, 0.0], [296.0, 0.0], [299.0, 0.0], [289.0, 0.0], [303.0, 0.0], [288.0, 0.0], [292.0, 0.0], [301.0, 0.0], [295.0, 0.0], [291.0, 0.0], [316.0, 0.0], [309.0, 0.0], [306.0, 0.0], [315.0, 0.0], [311.0, 0.0], [308.0, 0.0], [310.0, 0.0], [330.0, 0.0], [328.0, 0.0], [322.0, 0.0], [327.0, 0.0], [340.0, 0.0], [348.0, 0.0], [347.0, 0.0], [351.0, 0.0], [344.0, 0.0], [355.0, 0.0], [353.0, 0.0], [365.0, 0.0], [360.0, 0.0], [352.0, 0.0], [363.0, 0.0], [359.0, 0.0], [356.0, 0.0], [380.0, 0.0], [370.0, 0.0], [368.0, 0.0], [385.0, 0.0], [389.0, 0.0], [398.0, 0.0], [397.0, 0.0], [399.0, 0.0], [402.0, 0.0], [426.0, 0.0], [425.0, 0.0], [423.0, 0.0], [453.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 716.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.64227728E12, "maxY": 297.7, "series": [{"data": [[1.64227746E12, 141.53333333333333], [1.64227728E12, 0.6833333333333333], [1.64227734E12, 10.633333333333333], [1.64227764E12, 97.65], [1.64227752E12, 235.38333333333333], [1.64227758E12, 297.7], [1.6422774E12, 110.03333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64227764E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.64227728E12, "maxY": 165.21666666666667, "series": [{"data": [[1.64227746E12, 141.36666666666667], [1.64227728E12, 0.6666666666666666], [1.64227734E12, 10.65], [1.64227764E12, 46.916666666666664], [1.64227752E12, 107.8], [1.64227758E12, 165.21666666666667], [1.6422774E12, 109.86666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.64227764E12, 51.21666666666667], [1.64227752E12, 127.91666666666667], [1.64227758E12, 132.0]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64227764E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.64227728E12, "maxY": 165.21666666666667, "series": [{"data": [[1.64227764E12, 51.21666666666667], [1.64227752E12, 127.91666666666667], [1.64227758E12, 132.0]], "isOverall": false, "label": "GETListUsers-failure", "isController": false}, {"data": [[1.64227746E12, 141.36666666666667], [1.64227728E12, 0.6666666666666666], [1.64227734E12, 10.65], [1.64227764E12, 46.916666666666664], [1.64227752E12, 107.8], [1.64227758E12, 165.21666666666667], [1.6422774E12, 109.86666666666666]], "isOverall": false, "label": "GETListUsers-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64227764E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.64227728E12, "maxY": 165.21666666666667, "series": [{"data": [[1.64227746E12, 141.36666666666667], [1.64227728E12, 0.6666666666666666], [1.64227734E12, 10.65], [1.64227764E12, 46.916666666666664], [1.64227752E12, 107.8], [1.64227758E12, 165.21666666666667], [1.6422774E12, 109.86666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.64227764E12, 51.21666666666667], [1.64227752E12, 127.91666666666667], [1.64227758E12, 132.0]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64227764E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

