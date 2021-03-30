(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("959fe546-0b1e-4718-a3df-34c3d763772c");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '959fe546-0b1e-4718-a3df-34c3d763772c' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js": "HjagQp6T0/7bxYTAXbLotF1MLAGWmhkY5siA1Gc/pcEgvgRPtMsRn0gQtMwGKiw1", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js": "ZEPPTjL+mdyqgIq+/pl9KTwzji8Kow2NnI3zWY8+sFinWP/SYJ80BnfeJsa45iYj", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js": "exLqv2ACDRIaV7ZK1iL8aGzGYQvKVuT3U2CT7FsQREBxRah6JrkVCoFy0koY1YqV"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"fec1b5c9-9e37-419a-a305-1954dc44e6ab":{"defs":[{"extends":null,"module":null,"name":"DataModel","overrides":[],"properties":[]}],"roots":{"references":[{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17310"},"selection_policy":{"id":"17309"}},"id":"17295","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"17282","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17283","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17284","type":"PolyAnnotation"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17294","type":"Scatter"},{"attributes":{},"id":"17303","type":"AllLabels"},{"attributes":{"axis":{"id":"17271"},"dimension":1,"ticker":null},"id":"17274","type":"Grid"},{"attributes":{},"id":"17302","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"17313"},"toolbar_location":"above"},"id":"17314","type":"ToolbarBox"},{"attributes":{"axis":{"id":"17267"},"ticker":null},"id":"17270","type":"Grid"},{"attributes":{"children":[[{"id":"17258"},0,0]]},"id":"17312","type":"GridBox"},{"attributes":{},"id":"17309","type":"UnionRenderers"},{"attributes":{},"id":"17275","type":"ResetTool"},{"attributes":{},"id":"17305","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"17267"}],"center":[{"id":"17270"},{"id":"17274"}],"height":288,"left":[{"id":"17271"}],"output_backend":"webgl","renderers":[{"id":"17296"}],"title":{"id":"17298"},"toolbar":{"id":"17285"},"toolbar_location":null,"width":432,"x_range":{"id":"17259"},"x_scale":{"id":"17263"},"y_range":{"id":"17261"},"y_scale":{"id":"17265"}},"id":"17258","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17306","type":"AllLabels"},{"attributes":{},"id":"17278","type":"WheelZoomTool"},{"attributes":{"source":{"id":"17295"}},"id":"17297","type":"CDSView"},{"attributes":{"formatter":{"id":"17302"},"major_label_policy":{"id":"17303"},"ticker":{"id":"17268"}},"id":"17267","type":"LinearAxis"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17305"},"major_label_policy":{"id":"17306"},"ticker":{"id":"17272"}},"id":"17271","type":"LinearAxis"},{"attributes":{},"id":"17259","type":"DataRange1d"},{"attributes":{},"id":"17263","type":"LinearScale"},{"attributes":{"children":[{"id":"17314"},{"id":"17312"}]},"id":"17315","type":"Column"},{"attributes":{"overlay":{"id":"17284"}},"id":"17279","type":"LassoSelectTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17298","type":"Title"},{"attributes":{"data_source":{"id":"17295"},"glyph":{"id":"17294"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17297"}},"id":"17296","type":"GlyphRenderer"},{"attributes":{},"id":"17261","type":"DataRange1d"},{"attributes":{},"id":"17268","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"17285"}],"tools":[{"id":"17275"},{"id":"17276"},{"id":"17277"},{"id":"17278"},{"id":"17279"},{"id":"17280"},{"id":"17281"},{"id":"17282"}]},"id":"17313","type":"ProxyToolbar"},{"attributes":{},"id":"17281","type":"SaveTool"},{"attributes":{},"id":"17276","type":"PanTool"},{"attributes":{},"id":"17310","type":"Selection"},{"attributes":{},"id":"17280","type":"UndoTool"},{"attributes":{"overlay":{"id":"17283"}},"id":"17277","type":"BoxZoomTool"},{"attributes":{},"id":"17265","type":"LinearScale"},{"attributes":{"active_multi":null,"tools":[{"id":"17275"},{"id":"17276"},{"id":"17277"},{"id":"17278"},{"id":"17279"},{"id":"17280"},{"id":"17281"},{"id":"17282"}]},"id":"17285","type":"Toolbar"},{"attributes":{},"id":"17272","type":"BasicTicker"}],"root_ids":["17315"]},"title":"Bokeh Application","version":"2.3.0"}}';
                  var render_items = [{"docid":"fec1b5c9-9e37-419a-a305-1954dc44e6ab","root_ids":["17315"],"roots":{"17315":"959fe546-0b1e-4718-a3df-34c3d763772c"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();