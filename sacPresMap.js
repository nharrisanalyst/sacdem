//check for mobile

d3.select("body").attr("background-color","#696969");

window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


var mobile =window.mobilecheck();


//responsive design implentations
if(mobile){

d3.select("#introduction").remove();

d3.select("#introductionTwo").html("<p><p></p>The Democratic Primary was held on June 7th 2016. The race nationally and locally was primarily between two candidates Hilary Clinton and Bernie Sanders.</p> <p id ='bernie'>Bernie Sanders ran on a platform that was openly socialist and vary liberal( as Bernie Sanders is a self proclaimed socialist). Bernie Sanders garnered most of his support from young voters; through campaign promises for nationalized health care and free higher education.<p> Hillary Clinton ran as a moderite liberal; as one who had the experience and can work inside the system for change. Hillary also promised to continue to have a proactive international policy. Hillary Clinton garnered support from baby boomers; older more established democrats and African Americans.</p> <p> Knowing about both candidates bases we can learn a lot about our community through this interactive map. It shows that Bernie did the best in Midtown Sacramento where many young democrats live, and  the rent is cheap and bars are a plenty. This map displays that midtown attracts young more liberal people to live. Hillary did her best in The Pocket, East Sacramento and South Sacramento. The Pocket and East Sac communities are vary similar the communities are filled with upper middle class homes occupied by Educated baby boomers. While the South Sacramento is populated by many lower middle class housing and more minorities reside there.</p>");





}





 
//color clinton 0 Sanders 1 teis 2
var fill = d3.scale.ordinal().domain([0,1,2]).range(["#90B9EE","#E3B99B","#A9A9A9"])



//creating the legend 


var legendSvg=d3.select("#legend").append("svg").attr({
													width:"1000px",
													height:"14px"
});


legendSvg.append("circle").attr({
								cy:6,
								cx:7,


}).attr("fill",fill(0)).attr("r",5);


legendSvg.append("text").attr("transform","translate(12,11)").text("Hillary Clinton");

legendSvg.append("circle").attr({
								cy:6,
								cx:115,


}).attr("fill",fill(1)).attr("r",5);


legendSvg.append("text").attr("transform","translate(120,11)").text("Bernie Sanders");

legendSvg.append("circle").attr({
								cy:6,
								cx:233,


}).attr("fill",fill(2)).attr("r",5);


legendSvg.append("text").attr("transform","translate(238,11)").text("Tie");

legendSvg.append("text").attr("transform","translate(415,11)").text("Click zoom and explore to learn more about Sacramento and our community.");
var data;

    
   
//get the data

d3.json("Data/primary16Joined.geojson",function(error,collection){
 if(error){
 	alert("There was an error retrieving the data")
 }


//creating the map base layer/window 
 var map = L.map('mapid').setView([38.5558,-121.3944],11);


//tile layer and mapbox
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'nathaniharris.0hge5l9n',
    accessToken: 'pk.eyJ1IjoibmF0aGFuaWhhcnJpcyIsImEiOiJjaXExZjJ2cmQwMHk3Zmlubmw3dmN5ZDUyIn0.suHGEfPnuo1BDAz8Si08fQ'
}).addTo(map);
 


// adding d3 geo layer ad getting it to zoom properly
var svg = d3.select(map.getPanes().overlayPane).append("svg"),
    g = svg.append("g").attr("class", "leaflet-zoom-hide").attr("id","gelement");

function projectPoint(x, y) {
  var point = map.latLngToLayerPoint(new L.LatLng(y, x));
  this.stream.point(point.x, point.y);
};

var transform = d3.geo.transform({point: projectPoint}),
    path = d3.geo.path().projection(transform);
    
  
    
var feature = g.selectAll("path")
    .data(collection.features)
  .enter().append("path");
  




  
feature.attr("d", path)
.attr("stroke","white")
 .on("mousemove", function(d,i) {
      var coordinates = d3.mouse(this); 
     
      
//adding the popup      

     L.popup({
     closeButton: true
     
     }).setLatLng(map.layerPointToLatLng(coordinates))
           .setContent( "<div id='prenum' style='margin-bottom:0px'> Precinct No.<div>"+ "<div 'style='margin-top:0px font-size:24px'><b>"+d.properties["VPrecinct"]+"</b></div>"+
           
           "<table><tbody><tr><td>Name: </td><td>Votes</td></tr><tr><td>Clinton: </td><td>"+d.properties["CountyResults _HILLARY CLINTON"]+"</td></tr><tr><td>Sanders: </td><td>"+" "+d.properties["CountyResults _BERNIE SANDERS"]+"</td></tr><tr><td>Judd: </td><td>"+d.properties["CountyResults _KEITH JUDD"]+"</td></tr><tr><td>Hewes: </td><td>"+d.properties["CountyResults _HENRY HEWES"]+"</td></tr><tr><td>Roque De La Fuente: </td><td>"+d.properties["CountyResults _ROQUE DE LA FUENTE"]+"</td></tr><tr><td>Wilson: </td><td>"+d.properties["CountyResults _WILLIE WILSON"]+"</td></tr><tr><td>Steinberg: </td><td>"+d.properties["CountyResults _MICHAEL STEINBERG"]+"</td></tr></tbody></table>"
           )
           .openOn(map) 
     
         
      
 
       })
       .on("mouseout",  function(d,i) {
       
       })
      .style("fill",function(d){
	if(parseInt(d.properties["CountyResults _HILLARY CLINTON"]) > parseInt(d.properties["CountyResults _BERNIE SANDERS"])){
	return fill(0);
	}else if(parseInt(d.properties["CountyResults _HILLARY CLINTON"]) < parseInt(d.properties["CountyResults _BERNIE SANDERS"])){
	return fill(1);
	}else if(parseInt(d.properties["CountyResults _HILLARY CLINTON"]) == parseInt(d.properties["CountyResults _BERNIE SANDERS"])){
	  return fill(2);
	
	}

})
.attr("fill-opacity",.10)
.attr("stroke-opacity", .5);
//adding all circle elements and sizing them and getting them to center and resize with zooming
g.selectAll("circle")
.data(collection.features)
.enter()
.append("circle")
.attr("class", "leaflet-zoom-hide")
.attr("id", function(d,i){

return i+"circle"

})
.attr('cx', function(d){
   var x = path.centroid(d)[0];
   return x;

})
.attr('cy', function(d){
   var y = path.centroid(d)[1];
   return y;
})
.attr("r",function(d){
  return Math.abs(parseInt(d.properties["CountyResults _HILLARY CLINTON"]) - parseInt(d.properties["CountyResults _BERNIE SANDERS"]))*(1/(3.14*3.14*3.14))+2


})
.style("fill",function(d){
	if(parseInt(d.properties["CountyResults _HILLARY CLINTON"]) > parseInt(d.properties["CountyResults _BERNIE SANDERS"])){
	return fill(0);
	}else if(parseInt(d.properties["CountyResults _HILLARY CLINTON"]) < parseInt(d.properties["CountyResults _BERNIE SANDERS"])){
	return fill(1);
	}else if(parseInt(d.properties["CountyResults _HILLARY CLINTON"]) == parseInt(d.properties["CountyResults _BERNIE SANDERS"])){
	  return fill(2);
	
	}

})
;


var bounds = path.bounds(collection),
    topLeft = bounds[0],
    bottomRight = bounds[1];
    
    
svg .attr("width", bottomRight[0] - topLeft[0])
    .attr("height", bottomRight[1] - topLeft[1])
    .style("left", topLeft[0] + "px")
    .style("top", topLeft[1] + "px");

g .attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

 
 
 function reset(e) {
  console.log("zoom");
    var bounds = path.bounds(collection),
        topLeft = bounds[0],
        bottomRight = bounds[1];

    svg .attr("width", bottomRight[0] - topLeft[0])
        .attr("height", bottomRight[1] - topLeft[1])
        .style("left", topLeft[0] + "px")
        .style("top", topLeft[1] + "px");

    g   .attr("transform", "translate(" + -topLeft[0] + "," + -topLeft[1] + ")");

    feature.attr("d", path);
    
    
    
    
    g.selectAll("circle")
.data(collection.features)
.transition()
.attr('cx', function(d){
   var x = path.centroid(d)[0];
   return x;

})
.attr('cy', function(d){
   var y = path.centroid(d)[1];
   return y;
})

;
  
 
 
 
 
  
if(map.getZoom() !=11){


d3.selectAll("#line").remove()

} 

if(map.getZoom() ==11){

svg.append("text").text("Bernie Sanders").attr("class", "leaflet-zoom-hide").attr("transform","translate(350,328)").attr("id","line");
svg.append("text").text("Won in Midtown").attr("class", "leaflet-zoom-hide").attr("transform","translate(350,339)").attr("id","line");
svg.append("line").attr({
					x1:535,
					x2:450,
					y1:320,
					y2:330,
					stroke:"black"
					
}).attr("class", "leaflet-zoom-hide").attr("id","line");
svg.append("text").text("Hilary Clinton").attr("class", "leaflet-zoom-hide").attr("transform","translate(900,500)").attr("id","line");
svg.append("text").text("Won Biggest in").attr("class", "leaflet-zoom-hide").attr("transform","translate(900,511)").attr("id","line");
svg.append("text").text("East Sac and South Sac/ 'The Pocket'").attr("class", "leaflet-zoom-hide").attr("transform","translate(900,522)").attr("id","line");
svg.append("line").attr({
					x1:895,
					x2:500,
					y1:500,
					y2:450,
					stroke:"black"
					
}).attr("class", "leaflet-zoom-hide").attr("id","line");
svg.append("line").attr({
					x1:895,
					x2:625,
					y1:500,
					y2:320,
					stroke:"black"
					
}).attr("class", "leaflet-zoom-hide").attr("id","line");

} 
   
  }
  

 map.on("viewreset", reset);






//labels on initial zoom


svg.append("text").text("Bernie Sanders").attr("class", "leaflet-zoom-hide").attr("transform","translate(350,328)").attr("id","line");
svg.append("text").text("Won in Midtown").attr("class", "leaflet-zoom-hide").attr("transform","translate(350,339)").attr("id","line");
svg.append("line").attr({
					x1:535,
					x2:450,
					y1:320,
					y2:330,
					stroke:"black"
					
}).attr("class", "leaflet-zoom-hide").attr("id","line");

svg.append("text").text("Hilary Clinton").attr("class", "leaflet-zoom-hide").attr("transform","translate(900,500)").attr("id","line");
svg.append("text").text("Won Biggest in").attr("class", "leaflet-zoom-hide").attr("transform","translate(900,511)").attr("id","line");
svg.append("text").text("East Sac and South Sac/ 'The Pocket'").attr("class", "leaflet-zoom-hide").attr("transform","translate(900,522)").attr("id","line");
svg.append("line").attr({
					x1:895,
					x2:500,
					y1:500,
					y2:450,
					stroke:"black"
					
}).attr("class", "leaflet-zoom-hide").attr("id","line");
svg.append("line").attr({
					x1:895,
					x2:625,
					y1:500,
					y2:320,
					stroke:"black"
					
}).attr("class", "leaflet-zoom-hide").attr("id","line");




})