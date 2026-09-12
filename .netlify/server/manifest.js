export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Favicon.svg","Logo.svg","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","assets/css/home2-style.css","assets/css/inner_pages.css","assets/imgs/Logo-f.svg","assets/imgs/Logo-light.svg","assets/imgs/about/clients/1.svg","assets/imgs/about/clients/2.svg","assets/imgs/about/clients/3.svg","assets/imgs/about/clients/4.svg","assets/imgs/about/clients/5.svg","assets/imgs/about/header/1.jpg","assets/imgs/about/intro1.jpg","assets/imgs/about/s-icon1.svg","assets/imgs/about/s-icon2.svg","assets/imgs/about/team/1.png","assets/imgs/about/team/2.png","assets/imgs/about/team/3.png","assets/imgs/about/team/4.png","assets/imgs/about/testim/Vector_Cricle_Text.svg","assets/imgs/about/testim/avatar1.jpg","assets/imgs/about/testim/avatar2.jpg","assets/imgs/about/testim/avatar3.jpg","assets/imgs/about/testim/vector_quote.svg","assets/imgs/about-bg.png","assets/imgs/blog/1.jpg","assets/imgs/blog/2.jpg","assets/imgs/blog/3.jpg","assets/imgs/blogs/blog1/1.jpg","assets/imgs/blogs/blog1/2.jpg","assets/imgs/blogs/blog1/3.jpg","assets/imgs/blogs/blog1/4.jpg","assets/imgs/blogs/blog1/5.jpg","assets/imgs/blogs/blog1/6.jpg","assets/imgs/blogs/blog1/a1.jpg","assets/imgs/blogs/blog1/a2.jpg","assets/imgs/blogs/post/1.jpg","assets/imgs/blogs/post/2.jpg","assets/imgs/blogs/post/3.jpg","assets/imgs/blogs/post/a1.jpg","assets/imgs/brands/1.svg","assets/imgs/brands/2.svg","assets/imgs/brands/3.svg","assets/imgs/brands/4.svg","assets/imgs/clients/1.svg","assets/imgs/clients/2.svg","assets/imgs/clients/3.svg","assets/imgs/clients/4.svg","assets/imgs/clients/5.svg","assets/imgs/faqs.jpg","assets/imgs/favicon.ico","assets/imgs/header-bg.png","assets/imgs/intro/f1.jpg","assets/imgs/intro/f2.jpg","assets/imgs/plus-solid.svg","assets/imgs/portfolio/works1/8.jpg","assets/imgs/portfolio/works2/1.jpg","assets/imgs/portfolio/works2/2.jpg","assets/imgs/portfolio/works2/3.jpg","assets/imgs/portfolio/works2/4.jpg","assets/imgs/portfolio/works2/5.jpg","assets/imgs/portfolio/works2/6.jpg","assets/imgs/portfolio/works2/7.jpg","assets/imgs/portfolio/works2/8.jpg","assets/imgs/portfolio/works3/1.jpg","assets/imgs/portfolio/works3/2.jpg","assets/imgs/portfolio/works3/3.jpg","assets/imgs/portfolio/works3/4.jpg","assets/imgs/price/clients/1.svg","assets/imgs/price/clients/2.svg","assets/imgs/price/clients/3.svg","assets/imgs/price/clients/4.svg","assets/imgs/price/clients/5.svg","assets/imgs/price/testim/Vector_Cricle_Text.svg","assets/imgs/price/testim/avatar1.jpg","assets/imgs/price/testim/avatar2.jpg","assets/imgs/price/testim/avatar3.jpg","assets/imgs/price/testim/vector_quote.svg","assets/imgs/pricing/Label.svg","assets/imgs/pricing/minus-solid.svg","assets/imgs/pricing/plus-solid.svg","assets/imgs/services/1.jpg","assets/imgs/services/img1.jpg","assets/imgs/services/img2.jpg","assets/imgs/services/services/img1.jpg","assets/imgs/services/services/img2.jpg","assets/imgs/team/1.png","assets/imgs/team/2.png","assets/imgs/team/3.png","assets/imgs/team/4.png","assets/imgs/team/5.png","assets/imgs/team/6.png","assets/imgs/testim/Vector_Cricle_Text.svg","assets/imgs/testim/avatar1.jpg","assets/imgs/testim/avatar2.jpg","assets/imgs/testim/avatar3.jpg","assets/imgs/testim/vector_quote.svg","assets/imgs/works/1.jpg","assets/imgs/works/2.jpg","assets/imgs/works/3.jpg","assets/imgs/works/4.jpg","assets/js/inner_pages.js","assets/js/scripts.js","brand/nxtedge-mark-charcoal.png","brand/nxtedge-mark-white.png","brand/nxtedge-wordmark-charcoal.png","brand/nxtedge-wordmark-white.png","common/css/common_style.css","common/css/plugins/YouTubePopUp.css","common/css/plugins/animate.min.css","common/css/plugins/bootstrap.min.css","common/css/plugins/fontawesome-all.min.css","common/css/plugins/justifiedGallery.min.css","common/css/plugins/magnific-popup.css","common/css/plugins/pe-icon-7-stroke.css","common/css/plugins/swiper.min.css","common/css/plugins/themify-icons.css","common/css/plugins.css","common/fonts/fa-brands-400.woff2","common/fonts/fa-solid-900.woff2","common/fonts/themify.woff","common/imgs/Logo-light.svg","common/imgs/icons/arrow-top-right.svg","common/imgs/icons/bezier-curve-solid.svg","common/imgs/icons/chart-line-solid.svg","common/imgs/icons/code-solid.svg","common/imgs/icons/crown-solid.svg","common/imgs/icons/paper-plane.svg","common/imgs/menu-shape.png","common/js/common_scripts.js","common/js/gsap_lib/ScrollSmoother.min.js","common/js/gsap_lib/ScrollTrigger.min.js","common/js/gsap_lib/SplitText.min.js","common/js/gsap_lib/gsap.min.js","common/js/gsap_lib/matter.js","common/js/gsap_lib/throwable.js","common/js/lib/jquery-3.6.0.min.js","common/js/lib/jquery-migrate-3.4.0.min.js","common/js/lib/plugins.js","favicon-16x16.png","favicon-32x32.png","favicon.ico"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".css":"text/css",".jpg":"image/jpeg",".js":"text/javascript",".woff2":"font/woff2",".woff":"font/woff"},
	_: {
		client: {start:"_app/immutable/entry/start.0w-_9fy3.js",app:"_app/immutable/entry/app.CcWo3D38.js",imports:["_app/immutable/entry/start.0w-_9fy3.js","_app/immutable/chunks/kGDfIEga.js","_app/immutable/chunks/E27LIa9t.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CVJlKQSv.js","_app/immutable/entry/app.CcWo3D38.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/E27LIa9t.js","_app/immutable/chunks/DSBLNmDD.js","_app/immutable/chunks/CVJlKQSv.js","_app/immutable/chunks/h4N0JkmE.js","_app/immutable/chunks/CN7cC9LB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/expertise",
				pattern: /^\/expertise\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/expertise/[slug]",
				pattern: /^\/expertise\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/industries",
				pattern: /^\/industries\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/industries/[slug]",
				pattern: /^\/industries\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/insights",
				pattern: /^\/insights\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/pricing",
				pattern: /^\/pricing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/process",
				pattern: /^\/process\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/products/[slug]",
				pattern: /^\/products\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/robots.txt",
				pattern: /^\/robots\.txt\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/robots.txt/_server.ts.js'))
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
			},
			{
				id: "/solutions",
				pattern: /^\/solutions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/solutions/[slug]",
				pattern: /^\/solutions\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/work/[slug]",
				pattern: /^\/work\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
