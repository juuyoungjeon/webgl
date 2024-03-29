
var gl;
var points;

window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }   
    
    //k is Function to make a regular polygon
    var k = Math.sqrt(3) / 2;

   // vertex position
    var vertices = [
        vec2(0, 0),

        vec2(-0.25, 0.5*k),
        vec2(0.25, 0.5 * k),
        vec2(0.5, 0),
        vec2(0.25, -0.5 * k),
        vec2(-0.25, -0.5*k),
        vec2(-0.5, 0),
        vec2(-0.25, 0.5*k)
    ];   

    // vertex color (R, G, B, A)
    // colors which angles are some same others different for looks awesome
        var colors = [
            vec4(1.0, 1.0, 1.0, 1.0),
            vec4(1.0, 0.0, 0.0, 1.0),
            vec4(1.0, 1.0, 0.0, 1.0),
            vec4(0.0, 1.0, 0.0, 1.0),
            vec4(0.0, 1.0, 1.0, 1.0),
            vec4(0.0, 0.0, 1.0, 1.0),
            vec4(1.0, 0.0, 1.0, 1.0),
            vec4(1.0, 0.0, 0.0, 1.0),
        ];

 


	//  Configure WebGL
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
    
    //  Load shaders and initialize attribute buffers    
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

	// Create a buffer object, initialize it, and associate it with the
    //  associated attribute variable in our vertex shader    

	/*-----------------------------------------------------------------------*/
	/* vertex position ------------------------------------------------------*/
	/*-----------------------------------------------------------------------*/

	// triangle vertex buffer 
	var vertexPositionBufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vertexPositionBufferId );	
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );
    	    

	var vPosition = gl.getAttribLocation(program, "vPosition"); 
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition ); 

	/*-----------------------------------------------------------------------*/
	/* vertex color ---------------------------------------------------------*/
	/*-----------------------------------------------------------------------*/

	var vertexColorBufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vertexColorBufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );
    		

    var vColor = gl.getAttribLocation(program, "vColor");	
	gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );	
    gl.enableVertexAttribArray( vColor );  
    
	// render
    gl.clear( gl.COLOR_BUFFER_BIT );    
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 8);
};
