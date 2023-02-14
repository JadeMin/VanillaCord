let logging = false;
function cLog(){
	if(logging) console.log(...arguments);
}
if(!window.hasOwnProperty("WebpackExports")) {
	window.WebpackExports = window.webpackChunkdiscord_app.push([["MODULE_MANAGER"], {}, e => e]);
	cLog("WebpackChunk pushed");
} else cLog("already WebpackChunk pushed");
window.getModule = function(filter=(m => m)) {
	const result = [];
	const modules = WebpackExports.c;
	const fixedFilter = (module) => {
		try {
			return filter(module);
		} catch(error){
			return false;
		}
	};

	for(const index in modules) {
		if(!modules.hasOwnProperty(index)) return;
		const exports = modules[index].exports;

		if(exports) {
			if( (exports.default && fixedFilter(exports.default)) && exports.__esModule ) {
				cLog("exports.default");
				result.push(exports.default);
			} else if( fixedFilter(exports) ) {
				cLog("filter(modules)");
				result.push(exports);
			} else continue;
		}
	}
	return result;
};

setInterval(()=> console.log(window.getModule(m=> m?.getName?.() === 'UserStore')[0].getCurrentUser().premiumType), 0);
//window.getModule(m=> m?.getName?.() === 'UserStore')[0].getCurrentUser().premiumType = 2;
