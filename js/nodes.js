var SQUARIFIC = SQUARIFIC || {};
SQUARIFIC.simpleLogic = SQUARIFIC.simpleLogic || {};
SQUARIFIC.simpleLogic.nodes = {
	
	
	rectifier: {
		inputs: 1,
		outputs: 1,
		defaultOutputs: [false],
		update: function (node, inputs, time) {
			node.outputs[0] = inputs[0];
		},
		getImage: function (node) {
			if (!node.image) {
				
				node.image = SQUARIFIC.simpleLogic.port.getImage("R"); 
				
			}
			return node.image;
		}
	},
	
	
	capacitor: {
		inputs: 2,
		outputs: 0,
		defaultOutputs: [false],
		update: function () {
			
		},
		getImage: function (node) {
			if (!node.image) {
				
				node.image = SQUARIFIC.simpleLogic.port.getImage("C"); 
				
			}
			return node.image;
		}
	},
	
	voltage: {
		inputs: 1,
		outputs: 1,
		defaultOutputs: [false],
		update: function (node, inputs, time) {
			node.outputs[0] = inputs[0];
		},
		getImage: function (node) {
			if (!node.image) {
				
				node.image = SQUARIFIC.simpleLogic.port.getImage("V"); 
				
			}
			return node.image;
		}
	},
	
	
	AND: {
		inputs: 2,
		outputs: 1,
		defaultOutputs: [false],
		update: function (node, inputs, time) {
			node.outputs[0] = inputs[0] && inputs[1];
		},
		getImage: function (node) {
			if (!node.image) {
				
				node.image = SQUARIFIC.simpleLogic.port.getImage("AND"); 
				
			}
			return node.image;
		}
	},
	NAND: {
		inputs: 2,
		outputs: 1,
		defaultOutputs: [false],
		update: function (node, inputs, time) {
			node.outputs[0] = !(inputs[0] && inputs[1]);
		},
		getImage: function (node) {
			if(!node.image) {
				node.image = SQUARIFIC.simpleLogic.port.getImage("NAND");
			}
			return node.image;
		}
	},
	OR: {
		inputs: 2,
		outputs: 1,
		defaultOutputs: [false],
		update: function (node, inputs, time) {
			node.outputs[0] = inputs[0] || inputs[1];
		},
		getImage: function (node) {
			if (!node.image) {
				node.image = SQUARIFIC.simpleLogic.port.getImage("OR");
			}
			return node.image;
		}
	},
	NOR: {
		inputs: 2,
		outputs: 1,
		defaultOutputs: [false],
		update: function (node, inputs, time) {
			node.outputs[0] = !(inputs[0] || inputs[1]);
		},
		getImage: function (node) {
			if(!node.image) {
				node.image = SQUARIFIC.simpleLogic.port.getImage("NOR");
			}
			return node.image;
		}
	},
	XOR: {
		inputs: 2,
		outputs: 1,
		defaultOutputs: [false],
		update: function (node, inputs, time) {
			node.outputs[0] = inputs[0] ? !inputs[1] : inputs[1];
		},
		getImage: function (node) {
			if(!node.image) {
				node.image = SQUARIFIC.simpleLogic.port.getImage("XOR");
			}
			return node.image;
		}
	},
	XNOR: {
		inputs: 2,
		outputs: 1,
		defaultOutputs: [false],
		update: function (node, inputs, time) {
			node.outputs[0] = inputs[0] ? inputs[1] : !inputs[1];
		},
		getImage: function (node) {
			if(!node.image) 
			{
				node.image = SQUARIFIC.simpleLogic.port.getImage("XNOR");
			}
			return node.image;
		}
	},
	NOT: {
		inputs: 1,
		outputs: 1,
		defaultOutputs: [false],
		update: function (node, inputs, time) {
			node.outputs[0] = !inputs[0];
		},
		getImage: function (node) {
			if (!node.image) 
			{
				node.image = SQUARIFIC.simpleLogic.port.getImage("NOT");
			}
			return node.image;
		}
	},
	
	LIGHT1: {
		inputs: 1,
		outputs: 0,
		update: function (node, inputs, time) {
			if (!node.ctx) {
				node.propertys.getImage(node);
			}
			if (node.lastInput !== inputs[0]) {
				if (inputs[0]) {
					node.ctx.beginPath();
					node.ctx.arc(25, 25, 14, 0, 2 * Math.PI);
					
					node.ctx.fillStyle = "#eeeeee";
					node.ctx.fill();
				} else {
					node.ctx.beginPath();
					node.ctx.arc(25, 25, 15, 0, 2 * Math.PI);
					node.ctx.fillStyle = "black";
					node.ctx.fill();
				}
				node.lastInput = inputs[0];
			}
		},
		getImage: function (node) {
			if (!node.image) {
				var ctx = SQUARIFIC.simpleLogic.node.getBackground(50, 50, 5);
				ctx.beginPath();
				ctx.arc(25, 25, 15, 0, 2 * Math.PI);
				/* ctx.fillStyle = "rgb(99, 55, 68)"; */
				ctx.fillStyle = "black";
				ctx.fill();
				node.image = ctx.canvas;
				node.ctx = ctx;
			}
			return node.image;
		}
	},
	
	LIGHT: {
		inputs: 1,
		outputs: 0,
		update: function (node, inputs, time) {
			if (!node.ctx) {
				node.propertys.getImage(node);
			}
			if (node.lastInput !== inputs[0]) {
				if (inputs[0]) {
					node.ctx.beginPath();
					node.ctx.arc(25, 25, 14, 0, 2 * Math.PI);
					
					node.ctx.fillStyle = "#eeeeee";
					node.ctx.fill();
				} else {
					node.ctx.beginPath();
					node.ctx.arc(25, 25, 15, 0, 2 * Math.PI);
					node.ctx.fillStyle = "black";
					node.ctx.fill();
				}
				node.lastInput = inputs[0];
			}
		},
		getImage: function (node) {
			if (!node.image) {
				var ctx = SQUARIFIC.simpleLogic.node.getBackground(50, 50, 5);
				ctx.beginPath();
				ctx.arc(25, 25, 15, 0, 2 * Math.PI);
				ctx.fillStyle = "black";
				ctx.fill();
				node.image = ctx.canvas;
				node.ctx = ctx;
			}
			return node.image;
		}
	},
	
	LEVER: {
		inputs: 0,
		outputs: 1,
		update: function () {
		},
		getImage: function (node) {
			if (!node.image) {
				var ctx = SQUARIFIC.simpleLogic.node.getBackground(50, 50, 5);
				ctx.beginPath();
				ctx.rect(20, 10, 10, 30);
				ctx.fillStyle = "black";
				
				ctx.fill();
				node.image = ctx.canvas;
				node.image.addEventListener("click", function () {
					this.outputs[0] = !this.outputs[0];
					/* ctx.beginPath(); */
					ctx.rect(20, 10, 10, 30);
					ctx.fillStyle = (this.outputs[0]) ? "#eeeeee" : "black";
					ctx.fill();
				}.bind(node));
				node.ctx = ctx;
				node.image.style.cursor = "pointer";
			}
			return node.image;
		}
	},
	
	
	
	
	LEVER3: {
		inputs: 1,
		outputs: 1,
		
		update:function (node, inputs, time) {
			if (!node.ctx) {
				node.propertys.getImage(node);
			}
			if (node.lastInput !== inputs[0]) {
				if (inputs[0]) {
					node.outputs[0] = node.inputs[0];
					node.ctx.beginPath();
					node.ctx.rect(20, 10, 10, 30);
					
					node.ctx.fillStyle = "#eeeeee";
					node.ctx.fill();
				}
				else {
					node.outputs[0] = node.inputs[1];
					node.ctx.beginPath();
					node.ctx.rect(20, 10, 10, 30);
					node.ctx.fillStyle = "black";
					node.ctx.fill();
				}
				node.lastInput = inputs[0];
			}
		},
		getImage: function (node) {
			if (!node.image) {
				var ctx = SQUARIFIC.simpleLogic.node.getBackground(50, 50, 5);
				ctx.beginPath();
				ctx.rect(20, 10, 10, 30);
				ctx.fillStyle = "black";
				
				ctx.fill();
				node.image = ctx.canvas;
				
				node.ctx = ctx;
				node.image.style.cursor = "pointer";
			}
			return node.image;
		}
	},
	
	
	switchCs: {
		inputs: 0,
		outputs: 1,
		update: function () {
		},
		getImage: function (node) {
			if (!node.image) {
				var ctx = SQUARIFIC.simpleLogic.node.getBackground(50, 50, 5);
				ctx.beginPath();
				ctx.rect(20, 10, 10, 30);
				ctx.fillStyle = "black";
				
				ctx.fill();
				node.image = ctx.canvas;
				node.image.addEventListener("click", function () {
					this.outputs[0] = !this.outputs[0];
					/* ctx.beginPath(); */
					ctx.rect(20, 10, 10, 30);
					ctx.fillStyle = (this.outputs[0]) ? "#eeeeee" : "black";
					ctx.fill();
				}.bind(node));
				node.ctx = ctx;
				node.image.style.cursor = "pointer";
			}
			return node.image;
		}
	},
	
	
};
