function TwoD(){
	return
}

range = function (m,M,n){
	result = []
	for(i=0;i<n;i++){
		result.push(m+(M-m+0.0)/n*i)
	}
	return result
}

TwoD.curve = function(fx,fy,rg){
	return {"y": rg.map(fy),
			"x": rg.map(fx),
			"mode" :'lines'}}

TwoD.point = function(x,y){
	return {"x":[x],
			"y":[y]}
}

TwoD.arrow = function(x,y,dx,dy){
	return {
		'axref': 'x',
		'ax': x, 
		'aref': 'x',
		'x': x+dx,
		'ayref': 'y',
		'ay': y,
		'aref': 'y',
		'y': y+dy,
		}
}



TwoD.sketch = function(items, where, annotations = []){
	return 	Plotly.newPlot( where,items, 
				{   "margin": { t: 0, b:0, r:0, l:0 },
					"plot_bgcolor": "rgba(0, 0, 0, 0)",
					"paper_bgcolor": "rgba(0, 0, 0, 0)",
					"xaxis": {showgrid:false, zeroline:false, visible:false},
					"yaxis": {showgrid:false, zeroline:false, visible:false,scaleanchor: "x"},
					"showlegend": false,
					"annotations" : annotations
				},
				{staticPlot: true}
				);
}

function ThreeD(){
	return
}

ThreeD.function = function(f, xrange, yrange){
	z = []
	for(i = 0; i<xrange.length; i++){
		w = []
		for(j = 0; j<xrange.length; j++)
			w.push(f(xrange[i],yrange[j]))
		z.push(w)
	}
	return {"x": xrange,"y": yrange,"z": z,type: 'surface'}
}


ThreeD.plot = function(items, where, annotations = []){
	return 	Plotly.newPlot( where,items, 
				{   "margin": { "t": 0, "b":0, "r":0, "l":0 },
					"plot_bgcolor": "rgba(0, 0, 0, 0)",
					"paper_bgcolor": "rgba(0, 0, 0, 0)",
					"xaxis": {"showgrid":false, "zeroline":false, "visible":false},
					"yaxis": {"showgrid":false, "zeroline":false, "visible":false, "scaleanchor": "x"},
					"zaxis": {"showgrid":false, "zeroline":false, "visible":false},
					"showlegend": false,
					"autosize": false
				},{});
}