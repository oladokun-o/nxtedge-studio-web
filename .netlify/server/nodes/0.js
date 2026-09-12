import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.aSvrCY5_.js","_app/immutable/chunks/DSBLNmDD.js","_app/immutable/chunks/E27LIa9t.js","_app/immutable/chunks/2JbTKr3O.js","_app/immutable/chunks/h4N0JkmE.js","_app/immutable/chunks/DevBqPAl.js","_app/immutable/chunks/4j4RtKsK.js","_app/immutable/chunks/rm_HEKJh.js","_app/immutable/chunks/C2YSQHQA.js","_app/immutable/chunks/4JVl5rLI.js","_app/immutable/chunks/CGo2WVfS.js","_app/immutable/chunks/BEJL9-M3.js","_app/immutable/chunks/CN7cC9LB.js"];
export const stylesheets = ["_app/immutable/assets/0.CLt9YG8r.css"];
export const fonts = [];
