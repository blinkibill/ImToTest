		//alert("Es ist der 13.07.2015 um 22:49");
		console.log("Eintrag ins Logbuch am 13.07.2015 um 23:01");
		
		var thomas;
		thomas = "das ist ja mal crazy ";
		
		var x,y;
		x = "Oh man, ";
		y = thomas;
		z = 5;
		
		console.log(x+y+z);
		console.log(2 * z);
        
		var zahl = prompt("Gib ne Quadratzahl ein");
		    
		for(i = 0; i < zahl; i++) {
		    if(i * i==zahl) {
		        alert("Deine Zahl is ne Quadratzahl! woop woop! Die Wurzel aus "+zahl+" ist übrigens "+i);
		        break;
		    }else if(zahl<i*i) {
		        alert("Deine Zahl is keine Quadratzahl... das ist aber traurig");
		        break;
		    }
		}

		if (confirm("Willst du das?")) {
		    console.log("confirm() funktioniert tadelos");
		}

        
        
		function addieren(a, b) {
		    return a + b;
		}

		console.log(addieren(4, 5));

		var a = new ArrayBuffer(10);
		var b = new Array;
		a[0] = b;
        
		for (i = 0; i < 10; i++) {
		    a[i] = i;
		    console.log(a[i]);
		}
