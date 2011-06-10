/**
 * Cookie Stack
 * Created by Kevin Burns
 * http://kevburnsjr.com
 *
 * cookiemq.listen('default', function(m){alert(m);});
 * cookiemq.push('default', "o_O HEY YOU GUUUUUYS!!! o_O");
 *	
 * Free open source software available under MIT license.
 */
window.cookiemq = {
	interval: 250,
	create : function(name,value) {
		document.cookie = '_cookiemq.'+name+"="+value+"; path=/";
	},
	read : function(name) {
		var nameEQ = '_cookiemq.'+name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	},
	push : function(name, val) {
		cookiemq.create(name,val,-1);
	},
	clear : function(name) {
		cookiemq.create(name,"",-1);
	},
	listen : function(name, fun) {
		var t;
		var spin = function(){
			var msg = cookiemq.read(name);
			if(msg != '') {
				fun(msg);
			}
			t = setTimeout(spin, cookiemq.interval);
		};
		t = setTimeout(spin, cookiemq.interval);
	}
};