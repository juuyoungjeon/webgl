
var gl;
var points;

window.onload = function init() {
	var canvas = document.getElementById("gl-canvas");

	gl = WebGLUtils.setupWebGL(canvas);
	if (!gl) { alert("WebGL isn't available"); }

	//  Configure WebGL

	gl.viewport(0, 0, canvas.width, canvas.height);
	gl.clearColor(1, 0, 1, 1);

	//  Load shaders and initialize 
	var program = initShaders(gl, "vertex-shader", "fragment-shader");

	gl.useProgram(program);

	// create a buffer on gpu and bind point    
	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);

	// Associate out shader variables with our data buffer   	
	// attribute variable
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);

	// uniform variable
	var fColor = gl.getUniformLocation(program, "fColor");

	// clear buffer bit
	//gl.clear( gl.COLOR_BUFFER_BIT );
	var sky = new this.Float32Array([
		-1, 0, -1, 1, 1, 1,
		-1, 0, 1, 1, 1, 0
	]);
	gl.bufferData(gl.ARRAY_BUFFER, sky, gl.STATIC_DRAW);

	// leaf color
	gl.uniform4f(fColor, 190/255, 247/255, 1, 1); // color (R,G,B,A)
	//gl.uniform4fv(fColor,[0,1,0,1]); //You can also change the color using this line
	gl.drawArrays(gl.TRIANGLES, 0, 6);

	var sea = new this.Float32Array([
		-1, 0, -1, -1, 1, -1,
		-1, 0, 1, -1, 1, 0
	]);
	gl.bufferData(gl.ARRAY_BUFFER, sea, gl.STATIC_DRAW);

	
	gl.uniform4f(fColor, 0, 0.1, 0.8, 1); // color (R,G,B,A)
	
	gl.drawArrays(gl.TRIANGLES, 0, 6);

	var program = initShaders(gl, "vertex-shader", "fragment-shader");

	gl.useProgram(program);

	// create a buffer on gpu and bind point    
	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);

	// Associate out shader variables with our data buffer   	
	// attribute variable
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);
	
	//Draw wave on the sea
	var wave = new this.Float32Array([
		-1, -0.5,
		-0.75, -0.25,
		-0.5, -0.5,
		-0.25, -0.25,
		0, -0.5,
		0.25, -0.25,
		0.5, -0.5,
		0.75, -0.25,
		1, -0.5
	]);
	
	gl.bufferData(gl.ARRAY_BUFFER, wave, gl.STATIC_DRAW);
	
	gl.drawArrays(gl.LINE_STRIP, 0, 9);

	var program = initShaders(gl, "vertex-shader", "fragment-shader");

	gl.useProgram(program);

	// create a buffer on gpu and bind point    
	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);

	// Associate out shader variables with our data buffer   	
	// attribute variable
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);
	
	//Draw second wave on the sea
	var wave2 = new this.Float32Array([
		-1, -0.75,
		-0.75, -0.5,
		-0.5, -0.75,
		-0.25, -0.5,
		0, -0.75,
		0.25, -0.5,
		0.5, -0.75,
		0.75, -0.5,
		1, -0.75
	]);
	
	gl.bufferData(gl.ARRAY_BUFFER, wave2, gl.STATIC_DRAW);
	
	gl.drawArrays(gl.LINE_STRIP, 0, 9);

	var program = initShaders(gl, "vertex-shader", "fragment-shader");

	gl.useProgram(program);

	// create a buffer on gpu and bind point    
	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);

	// Associate out shader variables with our data buffer   	
	// attribute variable
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);
	
	//Draw third wave on the sea
	var wave3 = new this.Float32Array([
		-1, -1,
		-0.75, -0.75,
		-0.5, -1,
		-0.25, -0.75,
		0, -1,
		0.25, -0.75,
		0.5, -1,
		0.75, -0.75,
		1, -1
	]);
	
	gl.bufferData(gl.ARRAY_BUFFER, wave3, gl.STATIC_DRAW);
	
	gl.drawArrays(gl.LINE_STRIP, 0, 9);

	var program = initShaders(gl, "vertex-shader", "fragment-shader");

	gl.useProgram(program);

	// create a buffer on gpu and bind point    
	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);

	// Associate out shader variables with our data buffer   	
	// attribute variable
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);
	
	//draw a big fish with 3 triangles
	var fish = new this.Float32Array([
		-0.5, -0.5, -0.6, -0.6, -0.5, -0.7,
		-0.5, -0.5, -0.5, -0.7, -0.4, -0.6,
		-0.4, -0.6, -0.35, -0.55, -0.35, -0.65
	]);
	
	gl.bufferData(gl.ARRAY_BUFFER, fish, gl.STATIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLES, 0, 9);

	var program = initShaders(gl, "vertex-shader", "fragment-shader");

	gl.useProgram(program);

	// create a buffer on gpu and bind point    
	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);

	// Associate out shader variables with our data buffer   	
	// attribute variable
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);
	

	//Draw a bottom part of boat
	var boat = new this.Float32Array([
		0, 0, -0.55, -0.4, 0.55, -0.4
	]);
	
	var fColor = gl.getUniformLocation(program, "fColor");

	gl.bufferData(gl.ARRAY_BUFFER, boat, gl.STATIC_DRAW);
	
	gl.uniform4f(fColor, 0.5, 0.25, 0, 1);

	gl.drawArrays(gl.TRIANGLES, 0, 3);

	//draw tree by function
	this.renderTree(0, 0.1);

	this.renderTree(0.5, 0.1);

	this.renderTree(-0.5, 0.1);


	var treecolor = vec4( 0.0, 1.0, 0.0, 1.0 );
	//draw circle by function
	this.renderCircle(0.07, 0.7, 0.7, treecolor);
	this.renderCircle(0.07, 0.6, 0.7, treecolor);
	this.renderCircle(0.07, 0.5, 0.75, treecolor);
	this.renderCircle(0.07, 0.7, 0.8, treecolor);
	this.renderCircle(0.07, 0.6, 0.8, treecolor);
	this.renderCircle(0.07, 0.8, 0.75, treecolor);

	//drwa fish by function
	this.drawFish(0.5,-0.5);

	this.drawFish(0.4, -0.4);


};

function renderTree(x, y) {
	var program = initShaders(gl, "vertex-shader", "fragment-shader");

	gl.useProgram(program);

	// create a buffer on gpu and bind point    
	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);

	// Associate out shader variables with our data buffer   	
	// attribute variable
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);

	var all = new Float32Array([
		0, 1, -0.5, 0.5, 0.5, 0.5,   // triangle 
		0, 0.5, -0.5, 0, 0.5, 0,     // triangle 
		0, 0, -0.5, -0.5, 0.5, -0.5,  // triangle 
		-1, -0.5, 0.1, -0.5, -0.1, -1, // triangle
		1, -0.5, -0.1, -0.5, 0.1, -1     // triangle
	]);

	//use for loop which odd number order vertice for x, even umber order vertice for y 
	try {
		for (var kg = 0; kg < (all.length); kg++) {
			if (kg % 2 < 0.8) {
				all[kg] = all[kg] * 0.5 + x;
			} else {
				all[kg] = all[kg] * 0.5 + y;
			}
		}

	} catch (e) {

	}

	gl.bufferData(gl.ARRAY_BUFFER, all, gl.STATIC_DRAW);

	// uniform variable
	var fColor = gl.getUniformLocation(program, "fColor");

	// leaf color
	gl.uniform4f(fColor, 1, 127/255, 39/255, 1); // color (R,G,B,A)
	//gl.uniform4fv(fColor,[0,1,0,1]); //You can also change the color using this line
	gl.drawArrays(gl.TRIANGLES, 0, 9);

	// body color
	gl.uniform4f(fColor, 0.5, 0.25, 0, 1); // color (R,G,B,A)
	//gl.uniform4fv(fColor,[0.5, 0.25, 0, 1]); //You can also change the color using this line
	gl.drawArrays(gl.TRIANGLE_FAN, 9, 6);





};
function renderCircle(r, x, y, vec4_) {
    // 원을 그리는 함수입니다.
    // 반지름, 중간값, 색을 파라미터로 받습니다.

    var noOfFans = 200;
    var centerOfCircle = vec2(x, y);
    var anglePerFna = (2 * Math.PI) / noOfFans;

    var mVirtices = [

    ];


    mVirtices.push(centerOfCircle);

    for (var i = 0; i <= noOfFans; i++) {
        var angle = anglePerFna * (i + 1);
        mVirtices.push(
            vec2(
                x + Math.cos(angle) * r,
                y + Math.sin(angle) * r
            )
        );
    }


    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);


    var color = vec4_;

    var colorLoc = gl.getUniformLocation(program, "color");
	this.gl.uniform4fv(colorLoc, color);
	
	

    this.gl.getUniformLocation(program, "vOffset");


    var bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);


    gl.bufferData(gl.ARRAY_BUFFER, flatten(mVirtices), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);


    gl.drawArrays(gl.TRIANGLE_FAN, 0, mVirtices.length);

}


function drawFish(x,y){
	var program = initShaders(gl, "vertex-shader", "fragment-shader");

	gl.useProgram(program);

	// create a buffer on gpu and bind point    
	var bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);

	// Associate out shader variables with our data buffer   	
	// attribute variable
	var vPosition = gl.getAttribLocation(program, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);
	
	var fish = new this.Float32Array([
		-0.5, -0.5, -0.6, -0.6, -0.5, -0.7,
		-0.5, -0.5, -0.5, -0.7, -0.4, -0.6,
		-0.4, -0.6, -0.35, -0.55, -0.35, -0.65
	]);

//use for loop which odd number order vertice for x, even umber order vertice for 
	try {
		for (var kg = 0; kg < (fish.length); kg++) {
			if (kg % 2 < 0.8) {
				fish[kg] = fish[kg] * 0.5 + x;
			} else {
				fish[kg] = fish[kg] * 0.5 + y;
			}
		}

	} catch (e) {

	}
	
	gl.bufferData(gl.ARRAY_BUFFER, fish, gl.STATIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLES, 0, 9);
}